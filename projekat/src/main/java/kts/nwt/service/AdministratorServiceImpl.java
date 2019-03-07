package kts.nwt.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.support.PagedListHolder;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kts.nwt.domain.Firma;
import kts.nwt.domain.Institucija;
import kts.nwt.domain.Korisnik;
import kts.nwt.domain.Stan;
import kts.nwt.domain.Stanar;
import kts.nwt.domain.Zgrada;
import kts.nwt.exceptions.BadRequestException;
import kts.nwt.exceptions.NotFoundException;
import kts.nwt.repository.FirmaRepository;
import kts.nwt.repository.InstitucijaRepository;
import kts.nwt.repository.KorisnikRepository;
import kts.nwt.repository.StanRepository;
import kts.nwt.repository.StanarRepository;
import kts.nwt.repository.ZgradaRepository;

@Service
public class AdministratorServiceImpl implements AdministratorService {

	@Autowired
	private KorisnikRepository korisnikRepository;

	@Autowired
	private ZgradaRepository zgradaRepository;

	@Autowired
	private StanRepository stanRepository;

	@Autowired
	private InstitucijaRepository institucijaRepository;

	@Autowired
	private StanarRepository stanarRepository;
	
	@Autowired
	private FirmaRepository firmaRepository;

	@Override
	public Zgrada novaZgrada(Zgrada zgrada) {
		List<Zgrada> zgrade = this.zgradaRepository.findByUlicaIgnoreCase(zgrada.getUlica());
		for (Zgrada z : zgrade) {
			if (z.getBroj() == zgrada.getBroj()) {
				if (z.getLokacija().equalsIgnoreCase(zgrada.getLokacija())) {
				     throw new BadRequestException("Vec postoji zgrada na toj adresi!");
				}
			}
		}
		this.zgradaRepository.save(zgrada);
		for (Stan stan: zgrada.getStanovi()) {
			this.stanRepository.save(stan);
		}

		return zgrada;
	}

	@Override
	public Page<Zgrada> zgrade(Pageable page, String ulicaBroj, String mesto) {
		Page<Zgrada> zgrade;
		if (ulicaBroj == null && mesto == null) {
			zgrade = this.zgradaRepository.findAll(page);
		} else if (ulicaBroj == null) {
			zgrade = this.zgradaRepository.findByLokacijaSearch(mesto, page);
		} else if (mesto == null) {
			zgrade = this.zgradaRepository.findByUlicaSearch(ulicaBroj, page);
		} else {
			zgrade = this.zgradaRepository.findByLokacijaAndUlicaSearch(mesto, ulicaBroj, page);
		}
		
		return zgrade;
	}
	
	@Override
	public void obrisiZgradu(Long id) {

		Zgrada zgrada = this.zgradaRepository.findZgradaById(id)
				.orElseThrow(() -> new NotFoundException("Nepostojeca zgrada!"));
        
		for (Stan stan : zgrada.getStanovi()){
			for (Stanar stanar : stan.getStanari()){
				stanar.setStan(null);
				this.stanarRepository.save(stanar);
			}
			
		}		
		
		this.zgradaRepository.delete(id);
	}

	@Override
	@Transactional
	public Stan noviStan(Stan stan, Long zgradaId) {

		Zgrada z = this.zgradaRepository.findZgradaById(zgradaId)
				.orElseThrow(() -> new NotFoundException("Nepostojeca zgrada!"));

		if (stan.getBroj() < 0) {
			throw new BadRequestException("Broj stana mora biti pozitivan broj!");
		}

		for (Stan s : z.getStanovi()) {
			if (s.getBroj() == stan.getBroj()) {
				throw new BadRequestException("Broj stana je vec zauzet!");
			}
		}

		stan.setZgrada(z);
		this.stanRepository.save(stan);
		return stan;
	}

	@Override
	@Transactional
	public PagedListHolder<Stan> izlistajStanoveZgrade(Long zgradaId, Pageable page) {
		Zgrada zgrada = this.zgradaRepository.findById(zgradaId);
		if (zgrada == null){
		    throw new NotFoundException("Nepostojeca zgrada!");	
		}
		
		List<Stan> stanovi = zgrada.getStanovi();
		PagedListHolder<Stan> holder = new PagedListHolder<>(stanovi);
	    holder.setPage(page.getPageNumber());
	    holder.setPageSize(page.getPageSize());
        return holder;
	}
	
	@Override
	public void obrisiStan(Long id) {

		Stan stan = this.stanRepository.findStanById(id)
				.orElseThrow(() -> new NotFoundException("Nepostojeci stan!"));

		Zgrada zgrada = stan.getZgrada();
		
		if (zgrada == null) {
			throw new BadRequestException("Stan nije dodeljen zgradi!");
		}
		
		for (Stanar stanar : stan.getStanari()) {
			stanar.setStan(null);
			this.stanarRepository.save(stanar);
		}
        Stanar vlasnik = stan.getVlasnik();
        vlasnik.getVlasnikStanova().remove(stan);
        this.stanarRepository.save(vlasnik);
		
		zgrada.getStanovi().remove(stan);
		this.zgradaRepository.save(zgrada);
	}

	@Override
	@Transactional
	public Stanar noviStanar(Stanar stanar) {

		Korisnik k = this.korisnikRepository.findByEmail(stanar.getEmail());

		if (k != null) {
			throw new BadRequestException("E-mail adresa: " + stanar.getEmail() + " je zauzeta!");
		}

		this.stanarRepository.save(stanar);

		return stanar;
	}
	
	@Override
	public Stanar stanar(Long stanarId) {
		Stanar stanar = this.stanarRepository.findById(stanarId);
		if (stanar == null) {
			throw new NotFoundException("Nepostojeci stanar!");
		}
		return stanar;
	}
	
	@Override
	public PagedListHolder<Stanar> stanari(Pageable page, String filter) {
		List<Stanar> stanari = (List<Stanar>) this.stanarRepository.findAll();
		if (filter != null) {
		    stanari = this.filtrirajStanare(stanari, filter);
		}
		PagedListHolder<Stanar> holder = new PagedListHolder<>(stanari);
		holder.setPage(page.getPageNumber());
		holder.setPageSize(page.getPageSize());
		return holder;
	}
	
	public List<Stanar> filtrirajStanare(List<Stanar> stanari, String filter) {
		List<Stanar> filtriraniStanari = new ArrayList<Stanar>();
		for (Stanar stanar : stanari) {
			if ((stanar.getIme() + " " + stanar.getPrezime()).toLowerCase().contains(filter.toLowerCase())) {
				filtriraniStanari.add(stanar);
			} else if (stanar.getEmail().toLowerCase().contains(filter.toLowerCase())) {
				filtriraniStanari.add(stanar);
			}
		}
		return filtriraniStanari;
	}
	
	@Override
	public Map<String, List<Stan>> izlistajStanoveStanara(Long stanarId) {
		Stanar stanar = this.stanarRepository.findById(stanarId);
		if (stanar == null) {
			throw new NotFoundException("Nepostojeci stanar!");
		}
		
		Map<String, List<Stan>> stanovi = new HashMap<String, List<Stan>>();
		stanovi.put("stanuje", new ArrayList<Stan>());
		stanovi.put("vlasnik", new ArrayList<Stan>());
		
		if (stanar.getStan() != null) {
			stanovi.get("stanuje").add(stanar.getStan());
		}
		
		for (Stan stan : stanar.getVlasnikStanova()) {
			stanovi.get("vlasnik").add(stan);
		}
		
		return stanovi;
	}
	
	@Override
	@Transactional
	public List<Stanar> izlistajStanareStana(Long stanId){
		Stan stan = this.stanRepository.findById(stanId);
		if (stan == null){
			throw new NotFoundException("Nepostojeci stan!");
		}
		
		List<Stanar> stanari = stan.getStanari();
		return stanari;
	}
	
	@Override
	@Transactional
	public void obrisiStanara(Long id) {
		//korisnik se ne brise nego se setuje na njegov stan na null
		//zbog evidencija korisnika
		Stanar s = this.stanarRepository.findById(id);

		if (s == null) {
			throw new NotFoundException("Nepostojeci stanar!");
		}
		
		if (s.getStan() == null) {
			return;
		}

		Stan stan = s.getStan();
	
		stan.getStanari().remove(s);
		
		s.setStan(null);
		
		this.stanarRepository.save(s);
		this.stanRepository.save(stan);
	}

	@Override
	@Transactional
	public Institucija novaInstituciju(Institucija institucija) {
		Korisnik k = this.korisnikRepository.findByEmail(institucija.getEmail());
		if (k != null) {
			throw new BadRequestException("E-mail adresa: " + institucija.getEmail() + " je zauzeta!");
	    }

		this.institucijaRepository.save(institucija);

		return institucija;
	}
	
	@Override
	public PagedListHolder<Institucija> institucije(Pageable page, String filter) {
		List<Institucija> institucije = (List<Institucija>) this.institucijaRepository.findAll();
		if (filter != null) {
		    institucije = this.filtrirajInstitucije(institucije, filter);
		}
		PagedListHolder<Institucija> holder = new PagedListHolder<>(institucije);
		holder.setPage(page.getPageNumber());
		holder.setPageSize(page.getPageSize());
		return holder;
	}
	
	public List<Institucija> filtrirajInstitucije(List<Institucija> institucije, String filter) {
		List<Institucija> filtriraneInstitucije = new ArrayList<Institucija>();
		for (Institucija institucija : institucije) {
			if (institucija.getNaziv().toLowerCase().contains(filter.toLowerCase())) {
				filtriraneInstitucije.add(institucija);
			} else if (institucija.getEmail().toLowerCase().contains(filter.toLowerCase())) {
				filtriraneInstitucije.add(institucija);
			}
		}
		return filtriraneInstitucije;
	}

	@Override
	@Transactional
	public Stanar dodeliStanara(Long stanarId, Long stanId) {

		Stanar stanar = this.stanarRepository.findById(stanarId);
		if (stanar == null) {
			throw new NotFoundException("Nepostojeci stanar!");
		}

		Stan stan = this.stanRepository.findById(stanId);
		if (stan == null) {
			throw new NotFoundException("Nepostojeci stan!");
		}
        
		// u slucaj da se stanar seli
		Stan prethodniStan = stanar.getStan();
		if (prethodniStan != null) {
			prethodniStan.getStanari().remove(stanar);
			// VLASNIK SE MORA RUCNO PROMENUTI
			this.stanRepository.save(prethodniStan);
		}
		stanar.setStan(stan);
		stan.getStanari().add(stanar);

		this.stanarRepository.save(stanar);
		this.stanRepository.save(stan);
		
		return stanar;
	}
	
	@Override
	public Stanar iseliStanara(Long stanarId, Long stanId) {
		Stanar stanar = this.stanarRepository.findById(stanarId);
		if (stanar == null) {
			throw new NotFoundException("Nepostojeci stanar!");
		}

		Stan stan = this.stanRepository.findById(stanId);
		if (stan == null) {
			throw new NotFoundException("Nepostojeci stan!");
		}
		
		if (stanar.getStan() != stan) {
			throw new BadRequestException("Stanar nije dodeljen datom stanu!");
		}
		stanar.setStan(null);
		stan.getStanari().remove(stanar);
		
		Zgrada z = stan.getZgrada();
		if (z.getPredsednikSkupstine() == stanar) {
			stanar.setAuthorities("STANAR");
			stan.getZgrada().setPredsednikSkupstine(null);
			this.zgradaRepository.save(stan.getZgrada());
		}
		
		this.stanarRepository.save(stanar);
		this.stanRepository.save(stan);
		
		return stanar;
	}

	@Override
	public Zgrada postaviPredsednika(Long stanarId) {
		Stanar stanar = this.stanarRepository.findById(stanarId);
		if (stanar == null){
			throw new NotFoundException("Nepostojeci stanar!");
		}
		
		if (stanar.getStan() == null) {
			throw new BadRequestException("Stanar nije dodeljen nijednom stanu!");
		}
		
		Zgrada zgrada = this.zgradaRepository.findById(stanar.getStan().getZgrada().getId());
		if (zgrada == null) {
			throw new NotFoundException("Nepostojeca zgrada!");
		}
		
		Stanar prethodniPredsednik = zgrada.getPredsednikSkupstine();
		if (prethodniPredsednik != null) {
			prethodniPredsednik.setAuthorities("STANAR");
			this.stanarRepository.save(prethodniPredsednik);
		}
		
		stanar.setAuthorities("PREDSEDNIK_SKUPSTINE");
        this.stanarRepository.save(stanar);
		zgrada.setPredsednikSkupstine(stanar);
		this.zgradaRepository.save(zgrada);
		
		return zgrada;
	}
	
	@Override
	public Stan postaviVlasnika(Long stanarId, Long stanId) {
		Stanar stanar = this.stanarRepository.findById(stanarId);
		if (stanar == null) {
			throw new NotFoundException("Nepostojeci stanar!");
		}
		
		Stan stan = this.stanRepository.findById(stanId);
		if (stan == null) {
			throw new NotFoundException("Nepostojeci stan!");
		}
		
		Stanar prethodniVlasnik = stan.getVlasnik();
		if (prethodniVlasnik != null) {
			prethodniVlasnik.getVlasnikStanova().remove(stan);
			this.stanarRepository.save(prethodniVlasnik);
		}
		
		stanar.getVlasnikStanova().add(stan);
		stan.setVlasnik(stanar);
		this.stanarRepository.save(stanar);
		this.stanRepository.save(stan);
		return stan;
	}

	@Override
	public Stan ukloniVlasnika(Long stanId) {
		Stan stan = this.stanRepository.findById(stanId);
		if (stan == null) {
			throw new NotFoundException("Nepostojeci stan!");
		}
		
		Stanar stanar = stan.getVlasnik();
		if (stanar == null) {
			throw new BadRequestException("Stan nema vlasnika!");
		}
		
		stanar.getVlasnikStanova().remove(stan);
		stan.setVlasnik(null);
		this.stanarRepository.save(stanar);
		this.stanRepository.save(stan);
		return stan;
	}
	
	@Override
	@Transactional
	public Firma novaFirma(Firma firma) {
		Korisnik k = this.korisnikRepository.findByEmail(firma.getEmail());
		if (k != null) {
			throw new BadRequestException("E-mail adresa: " + firma.getEmail() + " je zauzeta!");
		}

		this.firmaRepository.save(firma);

		return firma;
	}

	@Override
	public Zgrada dodeliFirmu(Long firmaId, Long zgradaId) {
		Firma firma =this.firmaRepository.findById(firmaId);	
		if (firma == null) {
			throw new NotFoundException("Nepostojeca firma!");
		}

		Zgrada zgrada = this.zgradaRepository.findById(zgradaId);
		if (zgrada == null) {
			throw new NotFoundException("Nepostojeca zgrada!");
		}
		
		zgrada.getFirme().add(firma);

		this.zgradaRepository.save(zgrada);
		return zgrada;
	}
	
	@Override
	public PagedListHolder<Firma> firme(Pageable page, String filter) {
		List<Firma> firme = (List<Firma>) this.firmaRepository.findAll();
		if (filter != null) {
		    firme = this.filtrirajFirme(firme, filter);
		}
		PagedListHolder<Firma> holder = new PagedListHolder<>(firme);
		holder.setPage(page.getPageNumber());
		holder.setPageSize(page.getPageSize());
		return holder;
	}
	
	public List<Firma> filtrirajFirme(List<Firma> firme, String filter) {
		List<Firma> filtriraneFirme = new ArrayList<Firma>();
		for (Firma firma : firme) {
			if (firma.getNaziv().toLowerCase().contains(filter.toLowerCase())) {
				filtriraneFirme.add(firma);
			} else if (firma.getEmail().toLowerCase().contains(filter.toLowerCase())) {
				filtriraneFirme.add(firma);
			}
		}
		return filtriraneFirme;
	}

	@Override
	@Transactional
	public void obrisiFirmu(Long firmaId, Long zgradaId) {
		Firma firma =this.firmaRepository.findById(firmaId);
		
		if (firma == null) {
			throw new NotFoundException("Nepostojeca firma!");
		}

		Zgrada zgrada = this.zgradaRepository.findById(zgradaId);

		if (zgrada == null) {
			throw new NotFoundException("Nepostojeca zgrada!");
		}
		
		if (zgrada.getFirme().contains(firma)){
			zgrada.getFirme().remove(firma);
			this.zgradaRepository.save(zgrada);
		} else {
		    throw new BadRequestException("Zgrada ne sadrzi navedenu firmu!");
		}
	}
	
}
