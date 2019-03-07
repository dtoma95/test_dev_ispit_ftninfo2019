package kts.nwt.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kts.nwt.domain.Korisnik;
import kts.nwt.domain.Kriterijum;
import kts.nwt.domain.PredlogTackeDnevnogReda;
import kts.nwt.domain.Skupstina;
import kts.nwt.domain.Stan;
import kts.nwt.domain.Stanar;
import kts.nwt.domain.Zgrada;
import kts.nwt.exceptions.BadRequestException;
import kts.nwt.exceptions.NotFoundException;
import kts.nwt.repository.KorisnikRepository;
import kts.nwt.repository.PredlogTackeDnevnogRedaRepository;
import kts.nwt.repository.SkupstinaRepository;
import kts.nwt.repository.StanarRepository;
import kts.nwt.repository.ZgradaRepository;

@Service
public class SkupstinaServiceImpl implements SkupstinaService {

	@Autowired
	private StanarRepository stanarRepository;
	
	@Autowired
	private KorisnikRepository korisnikRepository;

	@Autowired
	private SkupstinaRepository skupstinaRepository;

	@Autowired
	private ZgradaRepository zgradaRepository;

	@Autowired
	private PredlogTackeDnevnogRedaRepository predlogTackeDnevnogRedaRepository;
	
	public Skupstina dodajSkupstinu(Skupstina sk, String email) {
		
		Stanar s = this.stanarRepository.findStanarByEmail(email)
				.orElseThrow(() -> new NotFoundException("Nepostojeci stanar!"));

		
		if(s.getStan() == null){
			throw new BadRequestException("Korisniku nije dodeljen stan!");
		}
		
		Zgrada z = s.getStan().getZgrada();
		
		if (z.getPredsednikSkupstine() != null) {
			if (!z.getPredsednikSkupstine().getEmail().equals(email)) {
				throw new BadRequestException("Niste predsednik ove zgrade!");
			}
		} else {
			throw new BadRequestException("Zgrada nema postavljenog predsednika skupstine!");
		}

		
		sk.setPredsednikSkupstine(s);
		sk.setZgrada(z);
		Date sada = new Date();

		if (sada.after(sk.getPocetakSkupstine())) {
			throw new BadRequestException("Greska: Skupstina ne sme da pocinje u proslosti!");
		} else if (sk.getPocetakSkupstine().after(sk.getKrajSkupstine())) {
			throw new BadRequestException("Greska: Pocetak skupstine je posle kraja!");
		}
		this.skupstinaRepository.save(sk);

		z.getSkupstine().add(sk);
		this.zgradaRepository.save(z);

		return sk;
	}

	private void proveraDozvoljeneIzmene(Skupstina sk, String email){
		Date sada = new Date();
		if (sada.after(sk.getPocetakSkupstine())) {
			throw new BadRequestException("Greska: Skupstina se vec desila ili je u toku!");
		}
		
		Zgrada z = sk.getZgrada();
		if (z == null)
			throw new NotFoundException("Nepostojeca zgrada!");

		if (z.getPredsednikSkupstine() != null) {
			if (!z.getPredsednikSkupstine().getEmail().equals(email)) {
				throw new BadRequestException("Niste predsednik ove zgrade!");
			}
		} else {
			throw new BadRequestException("Zgrada nema postavljenog predsednika skupstine!");
		}		
	}
	
	public Skupstina izmeniSkupstinu(Skupstina newsk, String email) {
		Skupstina sk = this.skupstinaRepository.findSkupstinaById(newsk.getId())
				.orElseThrow(() -> new NotFoundException("Nepostojeca skupstina!"));
		
		
		proveraDozvoljeneIzmene(sk, email);
		
		// Stanar s = this.stanarRepository.findByEmail(email);
		// Dozvoljeno je da neki predsednik menja skupstinu iako on nije nju
		// zakazao inicijalno!
		// sk.setPredsednikSkupstine(s);

		Date sada = new Date();
		
		sk.setKrajSkupstine(newsk.getKrajSkupstine());
		sk.setPocetakSkupstine(newsk.getPocetakSkupstine());
		if (sada.after(sk.getPocetakSkupstine())) {
			throw new BadRequestException("Greska: Skupstina ne sme da pocinje u proslosti!");
		} else if (sk.getPocetakSkupstine().after(sk.getKrajSkupstine())) {
			throw new BadRequestException("Greska: Pocetak skupstine je posle kraja!");
		}
		this.skupstinaRepository.save(sk);

		return sk;

	}

	public void obrisiSkupstinu(Long skupstinaId, String email) {
		
		Skupstina sk = this.skupstinaRepository.findSkupstinaById(skupstinaId)
				.orElseThrow(() -> new NotFoundException("Nepostojeca skupstina!"));
		
		
		proveraDozvoljeneIzmene(sk, email);
		
		Zgrada z = sk.getZgrada();
		//Potrebno je premestiti sve PTRD-ove nazad u zgradu
		for (PredlogTackeDnevnogReda ptdr : sk.getPredloziZaTackeDnevnogReda()) {
			ptdr.setSkupstina(null);
		}
		z.getPtdrovi().addAll(sk.getPredloziZaTackeDnevnogReda());
		sk.getPredloziZaTackeDnevnogReda().clear();
		
		z.getSkupstine().remove(sk);
		this.zgradaRepository.save(z);

	}

	@Override
	public PredlogTackeDnevnogReda dodajPtdr(Long skupstinaId, Long ptdrId, String email) {
		
		Skupstina sk = this.skupstinaRepository.findSkupstinaById(skupstinaId)
				.orElseThrow(() -> new NotFoundException("Nepostojeca skupstina!"));
		
		proveraDozvoljeneIzmene(sk, email);
		
		Zgrada z = sk.getZgrada();
		
		
		PredlogTackeDnevnogReda ptdr =  this.predlogTackeDnevnogRedaRepository.findPtdrById(ptdrId)
				.orElseThrow(() -> new BadRequestException("Nepostojeca tacka!"));
		if(!z.getPtdrovi().remove(ptdr))
			throw new BadRequestException("Predlog tacke dnevnog reda nije pronadjen u vasoj zgradi!");
		ptdr.setSkupstina(sk);
		sk.getPredloziZaTackeDnevnogReda().add(ptdr);
		this.zgradaRepository.save(z);
		this.predlogTackeDnevnogRedaRepository.save(ptdr);
		this.skupstinaRepository.save(sk);
		
		return ptdr;
	}

	@Override
	public PredlogTackeDnevnogReda ukloniPtdr(Long skupstinaId, Long ptdrId, String email) {
		Skupstina sk = this.skupstinaRepository.findSkupstinaById(skupstinaId)
				.orElseThrow(() -> new NotFoundException("Nepostojeca skupstina!"));
		
		proveraDozvoljeneIzmene(sk, email);
		
		Zgrada z = sk.getZgrada();
		
		PredlogTackeDnevnogReda ptdr = this.predlogTackeDnevnogRedaRepository.findPtdrById(ptdrId)
				.orElseThrow(() -> new BadRequestException("Nepostojeca tacka!"));
		
		if (!sk.getPredloziZaTackeDnevnogReda().remove(ptdr)){
			throw new BadRequestException("Predlog tacke dnevnog reda  nije deo ove skupstine!");
		}
				
				
		z.getPtdrovi().add(ptdr);
		ptdr.setSkupstina(null);
		
		this.zgradaRepository.save(z);
		this.skupstinaRepository.save(sk);
		return ptdr;
	}

	@Override
	@Transactional
	public Skupstina pregledSkupstine(Long skupstinaId, String email) {
		Skupstina skupstina = skupstinaRepository.findById(skupstinaId);
		if (skupstina == null) {
			throw new NotFoundException("Nepostojeca skupstina!");
		}
		
		Korisnik k = this.korisnikRepository.findByEmail(email);
		if (k == null) {
			throw new NotFoundException("Nepostojeci korisnik!");
		}
		
		if (k.getAuthorities().equals("ADMIN") || k.getAuthorities().equals("INSTITUCIJA") || k.getAuthorities().equals("FIRMA")) {
			return skupstina;
		}
		
		Stanar stanar = (Stanar)k;
		
		Set<Zgrada> zgrade = new HashSet<Zgrada>();
		// prvo uzimamo zgradu u kojoj stanar zivi, a zatim i one u kojima je vlasnik stana
		zgrade.add(stanar.getStan().getZgrada());
		for (Stan stan : stanar.getVlasnikStanova()) {
			zgrade.add(stan.getZgrada());
		}
		for (Zgrada zgrada : zgrade) {
			for (Skupstina s : zgrada.getSkupstine()) {
				if (skupstina == s){
					return skupstina;
				}
			}
		}
		
		throw new BadRequestException("Stanar nema pristup datoj skupstini!");
	}
	
	@Override
	@Transactional
	public List<Skupstina> izlistajSkupstine(Kriterijum kriterijum, String email) {
        List<Skupstina> skupstine = this.filtrirajSkupstine(kriterijum, email);		
		
		return skupstine;
	}

	public List<Skupstina> filtrirajSkupstine(Kriterijum kriterijum,
			String email) {
		
		Korisnik k = this.korisnikRepository.findByEmail(email);
		if (k == null) {
			throw new NotFoundException("Nepostojeci korisnik!");
		}
		
		List<Skupstina> skupstine = new ArrayList<Skupstina>();
		
		if (k.getAuthorities().equals("STANAR") || k.getAuthorities().equals("PREDSEDNIK_SKUPSTINE")) {
			skupstine = this.preuzmiSkupstineStanara(email);
		} else {
			Zgrada z = this.zgradaRepository.findById(kriterijum.getId());
			if (z == null) {
				throw new NotFoundException("Nepostojeca zgrada!");
			}
			
			skupstine = z.getSkupstine();
		}

		if (kriterijum.getId() != null) {
			List <Skupstina> skupstineZgrade = new ArrayList<Skupstina>();
			for (Skupstina s : skupstine) {
				if (s.getZgrada().getId() == kriterijum.getId()){
					skupstineZgrade.add(s);
				}
			}
			skupstineZgrade = filtrirajPoDatumu(skupstineZgrade, kriterijum.getOD(), kriterijum.getDO());
			return skupstineZgrade;
		} else {
			skupstine = filtrirajPoDatumu(skupstine, kriterijum.getOD(), kriterijum.getDO());
		    return skupstine;
		}
	}
	
	public List<Skupstina> preuzmiSkupstineStanara(String email){
		Stanar stanar = this.stanarRepository.findByEmail(email);
		if (stanar == null) {
			throw new NotFoundException("Nepostojeci stanar!");
		}
		
		Set<Zgrada> zgrade = new HashSet<Zgrada>();
		// prvo uzimamo zgradu u kojoj stanar zivi, a zatim i one u kojima je vlasnik stana
		zgrade.add(stanar.getStan().getZgrada());
		for (Stan stan : stanar.getVlasnikStanova()) {
			zgrade.add(stan.getZgrada());
		}
		
		List<Skupstina> skupstine = new ArrayList<Skupstina>();
		for (Zgrada zgrada : zgrade){
			skupstine.addAll(zgrada.getSkupstine());
		}
		return skupstine;
	}
	
	public List<Skupstina> filtrirajPoDatumu(List<Skupstina> skupstine, Date OD, Date DO) {
		List<Skupstina> filtriraneSkupstine = new ArrayList<Skupstina>();
	    if (OD == null && DO == null) {
	    	return skupstine;
	    } else if (OD == null){
	    	for (Skupstina skupstina : skupstine) {
	    		if (!skupstina.getKrajSkupstine().after(DO)) {
	    			filtriraneSkupstine.add(skupstina);
	    		}
	    	}
	    } else if (DO == null) {
	    	for (Skupstina skupstina : skupstine) {
	    		if (!skupstina.getPocetakSkupstine().before(OD)) {
	    			filtriraneSkupstine.add(skupstina);
	    		}
	    	}
	    } else if (DO.equals(OD)) {
	    	for (Skupstina skupstina : skupstine) {
	    		if (skupstina.getPocetakSkupstine().before(OD) &&
						skupstina.getKrajSkupstine().after(DO)) {
	    			filtriraneSkupstine.add(skupstina);
	    		}
	    	}
	    } else {
	    	for (Skupstina skupstina : skupstine) {
	    		if (!skupstina.getPocetakSkupstine().before(OD) &&
						!skupstina.getKrajSkupstine().after(DO)) {
	    			filtriraneSkupstine.add(skupstina);
	    		}
	    	}
	    }
	    return filtriraneSkupstine;
	}

	@Override
	@Transactional
	public List<PredlogTackeDnevnogReda> izlistajPredlogeTacaka(
			Long skupstinaId, String email) {
		Korisnik k = this.korisnikRepository.findByEmail(email);
		if (k == null) {
			throw new NotFoundException("Nepostojeci korisnik!");
		}
		
		Skupstina skupstina = this.skupstinaRepository.findById(skupstinaId);
		if (skupstina == null) {
			throw new NotFoundException("Nepostojeca skupstina!");
		}
		
		if (k.getAuthorities().equals("ADMIN") || k.getAuthorities().equals("INSTITUCIJA") || k.getAuthorities().equals("FIRMA")) {
			return skupstina.getPredloziZaTackeDnevnogReda();
		}
		
		Stanar stanar = (Stanar)k;
		
		Set<Zgrada> zgrade = new HashSet<Zgrada>();
		zgrade.add(stanar.getStan().getZgrada());
		for (Stan stan : stanar.getVlasnikStanova()) {
			zgrade.add(stan.getZgrada());
		}
		for (Zgrada zgrada : zgrade) {
			for (Skupstina s : zgrada.getSkupstine()) {
				if (skupstina == s){
					return skupstina.getPredloziZaTackeDnevnogReda();
				}
			}
		}
		throw new BadRequestException("Stanar nema pristup datoj skupstini!");
	}

}
