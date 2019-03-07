package kts.nwt.service;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kts.nwt.domain.Korisnik;
import kts.nwt.domain.PredlogTackeDnevnogReda;
import kts.nwt.domain.Stanar;
import kts.nwt.domain.Zgrada;
import kts.nwt.exceptions.BadRequestException;
import kts.nwt.exceptions.NotFoundException;
import kts.nwt.repository.KorisnikRepository;
import kts.nwt.repository.PredlogTackeDnevnogRedaRepository;
import kts.nwt.repository.StanarRepository;
import kts.nwt.repository.ZgradaRepository;

@Service
public class PredlogTackeDnevnogRedaServiceImpl implements PredlogTackeDnevnogRedaService {

	@Autowired
	private StanarRepository stanarRepository;
	
	@Autowired
	private KorisnikRepository korisnikRepository;

	@Autowired
	private PredlogTackeDnevnogRedaRepository predlogTackeDnevnogRedaRepository;

	@Autowired
	private ZgradaRepository zgradaRepository;
	
	@Autowired
	private SkupstinaService skupstinaService;
	
	public PredlogTackeDnevnogReda noviPredlogTackeDnevnogReda(PredlogTackeDnevnogReda predlogTackeDnevnogReda, String email) {

		Stanar stanar = stanarRepository.findStanarByEmail(email)
				.orElseThrow(() -> new NotFoundException("Nepostojeci stanar!"));

		if(stanar.getStan() == null)
			throw new BadRequestException("Stanar nije dodeljen stanu!");
		
		//ne treba da se proverava da li je zgrada null jer stan uvek mora da ima zgradu(optional = false)
		Zgrada zgrada = stanar.getStan().getZgrada();

		predlogTackeDnevnogReda.setStanar(stanar);
		predlogTackeDnevnogReda.setDatum(new Date());
		predlogTackeDnevnogReda.setSkupstina(null);
		predlogTackeDnevnogReda.setZgrada(zgrada);
		zgrada.getPtdrovi().add(predlogTackeDnevnogReda);
		this.predlogTackeDnevnogRedaRepository.save(predlogTackeDnevnogReda);
		
		return predlogTackeDnevnogReda;
	}

	public PredlogTackeDnevnogReda izmenaPredlogaTackeDnevnogReda(PredlogTackeDnevnogReda predlogTackeDnevnogReda,
			Long ptdrId, String email) {

		PredlogTackeDnevnogReda ptdr = this.predlogTackeDnevnogRedaRepository.findPtdrById(ptdrId)
				.orElseThrow(() -> new NotFoundException("Nepostojeci predlog tacke dnevnog reda!"));

		Stanar stanar = stanarRepository.findStanarByEmail(email)
				.orElseThrow(() -> new NotFoundException("Nepostojeci stanar!"));
		
		if(stanar.getStan() == null)
			throw new BadRequestException("Stanar nije dodeljen stanu!");
		
		Zgrada zgrada = stanar.getStan().getZgrada();
		
		if(zgrada.getId() != ptdr.getZgrada().getId())
			throw new BadRequestException("Ova tacka se ne nalazi u vasoj zgradi!");
		else if (ptdr.getSkupstina() != null &&ptdr.getSkupstina().getPocetakSkupstine().before(new Date())) 
			throw new BadRequestException("Skupstina je pocela, nisu dozvoljene izmene!");
		
		if (ptdr.getStanar() != stanar){
			if (zgrada.getPredsednikSkupstine() != null && !zgrada.getPredsednikSkupstine().getEmail().equals(stanar.getEmail())) {
				throw new BadRequestException("Niste ovlasteni da menjate predloge drugih korisnika!");
			}
		}
		
		ptdr.setTekst(predlogTackeDnevnogReda.getTekst());
		ptdr.setIzmenjen(true);
		ptdr.setDatum(new Date());

		this.predlogTackeDnevnogRedaRepository.save(ptdr);
		return ptdr;
	}

	public void brisanjePredlogaTackeDnevnogReda(Long ptdrId, String email) {
		
		PredlogTackeDnevnogReda ptdr = this.predlogTackeDnevnogRedaRepository.findPtdrById(ptdrId)
				.orElseThrow(() -> new NotFoundException("Nepostojeci predlog tacke dnevnog reda!"));

		Stanar stanar = stanarRepository.findStanarByEmail(email)
				.orElseThrow(() -> new NotFoundException("Nepostojeci stanar!"));

		if ( ptdr.getSkupstina() != null) {
			throw new BadRequestException("Zabranjeno je brisati tacku koja je vec dodeljena skupstini!");
		}
		else if(stanar.getStan() == null)
			throw new BadRequestException("Stanar nije dodeljen stanu!");
		Zgrada zgrada = stanar.getStan().getZgrada();
		
		if (!ptdr.getStanar().getEmail().equals(stanar.getEmail())) {
			if (!(zgrada.getPredsednikSkupstine() != null && zgrada.getPredsednikSkupstine().equals(stanar))) {
				throw new BadRequestException("Niste autor ovog predloga tacke dnevnog reda!");
			}
		}

		if (zgrada.getPtdrovi().contains(ptdr)){
			zgrada.getPtdrovi().remove(ptdr);
		}

		this.zgradaRepository.save(zgrada);

		this.predlogTackeDnevnogRedaRepository.delete(ptdrId);

	}
	
	public PredlogTackeDnevnogReda odlukaPredlogaTackeDnevnogReda(String odluka,
			Long ptdrId, String email) {

		PredlogTackeDnevnogReda ptdr = this.predlogTackeDnevnogRedaRepository.findPtdrById(ptdrId)
				.orElseThrow(() -> new NotFoundException("Nepostojeci predlog tacke dnevnog reda!"));

		Zgrada z = ptdr.getZgrada();
		
		if(z == null)
			throw new NotFoundException("Nepostojeci zgrada!");
		if (z.getPredsednikSkupstine() != null) {
			if (!z.getPredsednikSkupstine().getEmail().equals(email)) {
				throw new BadRequestException("Niste predsednik ove zgrade!");
			}
		} else {
			throw new BadRequestException("Zgrada nema postavljenog predsednika skupstine!");
		}
		
		if (ptdr.getSkupstina() == null || ptdr.getSkupstina().getKrajSkupstine().after(new Date())) 
			throw new BadRequestException("Predlog tacke dnevnog reda mora da bude deo skupstine koja se zavrsila!");
		
		ptdr.setOdluka(odluka);
		
		this.predlogTackeDnevnogRedaRepository.save(ptdr);
		return ptdr;
	}
	
	public PredlogTackeDnevnogReda pregledPredlogaTackeDnevrnogReda(
			Long ptdrId, String email) {
		PredlogTackeDnevnogReda ptdr = this.predlogTackeDnevnogRedaRepository.findById(ptdrId);
		if (ptdr == null) {
			throw new NotFoundException("Nepostojeci predlog tacke dnevnog reda!");
		}
		
		Korisnik k = this.korisnikRepository.findByEmail(email);
		if (k == null) {
			throw new NotFoundException("Nepostojeci korisnik!");
		}
		
		// ukoliko baci exception dok uzima skupstina onda ce baciti i u ovoj metodi
		// provera da li stanar ima pristup skupstini
		this.skupstinaService.pregledSkupstine(ptdr.getSkupstina().getId(), email);
		
		return ptdr;
	}

}
