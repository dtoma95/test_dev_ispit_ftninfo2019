package kts.nwt.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import kts.nwt.domain.Firma;
import kts.nwt.domain.Institucija;
import kts.nwt.domain.Komentar;
import kts.nwt.domain.Korisnik;
import kts.nwt.domain.Kvar;
import kts.nwt.domain.Predracun;
import kts.nwt.domain.Slika;
import kts.nwt.domain.Stan;
import kts.nwt.domain.Stanar;
import kts.nwt.domain.Zgrada;
import kts.nwt.exceptions.BadRequestException;
import kts.nwt.exceptions.NotFoundException;
import kts.nwt.repository.InstitucijaRepository;
import kts.nwt.repository.KomentarRepository;
import kts.nwt.repository.KorisnikRepository;
import kts.nwt.repository.KvarRepository;
import kts.nwt.repository.PredracunRepository;
import kts.nwt.repository.SlikaRepository;
import kts.nwt.repository.StanarRepository;
import kts.nwt.repository.ZgradaRepository;

@Service
public class KvarServiceImpl implements KvarService {

	@Autowired
	private KorisnikRepository korisnikRepository;

	@Autowired
	private KvarRepository kvarRepository;

	@Autowired
	private KomentarRepository komentarRepository;

	@Autowired
	private StanarRepository stanarRepository;

	@Autowired
	private InstitucijaRepository institucijaRepository;

	@Autowired
	private SlikaRepository slikaRepository;

	@Autowired
	private ZgradaRepository zgradaRepository;

	@Autowired
	private PredracunRepository predracunRepository;

	public Kvar dodajKvar(Kvar kvar, Long odgovornoLiceId, String email) {

		// stanar neophodan zbog dobavljanja zgrade
		Stanar stanar = stanarRepository.findStanarByEmail(email)
				.orElseThrow(() -> new NotFoundException("Nepostojeci stanar!"));

		Zgrada zgrada;
		if (stanar.getStan() != null) {
			zgrada = stanar.getStan().getZgrada();

			if (zgrada == null) {
				throw new NotFoundException("Nepostojeca zgrada!");
			}

		} else {
			throw new BadRequestException("Korisniku nije dodeljen stan!");
		}

		kvar.setStanar(stanar);
		kvar.setZgrada(zgrada);

		if (odgovornoLiceId == null) {
			if (zgrada.getPredsednikSkupstine() == null) {
				throw new BadRequestException("Morate uneti odgovorno lice jer zgrada nema predsednika skupstine!");
			} else {
				kvar.setOdgovornoLice(stanar.getStan().getZgrada().getPredsednikSkupstine());
			}
		} else {
			Korisnik korisnik = this.korisnikRepository.findKorisnikById(odgovornoLiceId)
					.orElseThrow(() -> new NotFoundException("Nepostojeci korisnik kao odgovorno lice!"));

			/*
			 * Zasto treba ova provera? if
			 * (korisnik.getEmail().equals(stanar.getEmail())) { throw new
			 * BadRequestException(
			 * "Nije moguce sebe dodeliti kao odgovorno lice!"); }
			 */

			if (korisnik instanceof Stanar) {
				if (((Stanar) korisnik).getStan() == null
						|| !zgrada.equals(((Stanar) korisnik).getStan().getZgrada())) {
					throw new BadRequestException("Nije moguce kao dogovorno lice odrediti stanara iz druge zgrade!");
				}
			} else if (korisnik instanceof Firma) {
				if (!zgrada.getFirme().contains(((Firma) korisnik))) {
					throw new BadRequestException("Nije moguce postaviti firmu koja nije zaduzena za tu zgradu!");
				}
			}

			kvar.setOdgovornoLice(korisnik);
		}

		kvar.setGotovo(false);
		kvar.setDatumPostavljanja(new Date());
		/*
		 * try {
		 * 
		 * for (int i = 0; i < files.length; i++) { byte[] bytes =
		 * files[i].getBytes(); kvar.getSlike().add(new Slika(bytes)); }
		 * 
		 * } catch (IOException e) { throw new BadRequestException(
		 * "Greska prilikom citanja slika!"); }
		 */
		this.kvarRepository.save(kvar);

		zgrada.getKvarovi().add(kvar);

		this.zgradaRepository.save(zgrada);
		return kvar;
	}

	public Kvar dodajSliku(Long kvarId, MultipartFile[] files, String email) {

		Kvar kvar = this.kvarRepository.findKvarById(kvarId)
				.orElseThrow(() -> new NotFoundException("Nepostojeci kvar!"));

		Zgrada zgrada = kvar.getZgrada();

		if (kvar.isGotovo())
			throw new BadRequestException("Kvar je zavrsen, nije moguce praviti izmene!");

		if (!kvar.getStanar().getEmail().equals(email)) {
			if (!(zgrada.getPredsednikSkupstine() != null
					&& zgrada.getPredsednikSkupstine().getEmail().equals(email))) {
				throw new BadRequestException("Ne mozete dodavati sliku jer niste autor kvara!");
			}
		}

		try {

			for (int i = 0; i < files.length; i++) {
				byte[] bytes = files[i].getBytes();
				kvar.getSlike().add(new Slika(bytes));
			}

		} catch (IOException e) {
			throw new BadRequestException("Greska prilikom citanja slike!");
		}

		this.kvarRepository.save(kvar);

		return kvar;
	}

	public void obrisiSliku(Long kvarId, Long slikaId, String email) {

		Kvar kvar = this.kvarRepository.findKvarById(kvarId)
				.orElseThrow(() -> new NotFoundException("Nepostojeci kvar!"));

		if (kvar.isGotovo())
			throw new BadRequestException("Kvar je zavrsen, nije moguce praviti izmene!");

		Slika s = this.slikaRepository.findSlikaById(slikaId)
				.orElseThrow(() -> new NotFoundException("Nepostojeca slika!"));

		if (!kvar.getSlike().contains(s)) {
			throw new BadRequestException("Kvar ne sadrzi datu sliku!");
		}

		Zgrada zgrada = kvar.getZgrada();

		if (!kvar.getStanar().getEmail().equals(email)) {
			if (!(zgrada.getPredsednikSkupstine() != null
					&& zgrada.getPredsednikSkupstine().getEmail().equals(email))) {
				throw new BadRequestException("Ne mozete izbrisati sliku jer niste autor kvara!");
			}
		}

		kvar.getSlike().remove(s);
		this.kvarRepository.save(kvar);
	}

	public Kvar izmeniKvar(Kvar kvar, String email) {

		Kvar k = this.kvarRepository.findKvarById(kvar.getId())
				.orElseThrow(() -> new NotFoundException("Nepostojeci kvar!"));

		Zgrada zgrada = k.getZgrada();

		if (k.isGotovo())
			throw new BadRequestException("Kvar je zavrsen, nije moguce praviti izmene!");

		if (!k.getStanar().getEmail().equals(email)) {
			if (!(zgrada.getPredsednikSkupstine() != null
					&& zgrada.getPredsednikSkupstine().getEmail().equals(email))) {
				throw new BadRequestException("Ne mozete menjati kvar jer niste njegov autor!");
			}
		}

		k.setOpis(kvar.getOpis());
		k.setLokacija(kvar.getLokacija());
		// k.setDatumPostavljanja(new Date());

		this.kvarRepository.save(k);

		return k;
	}

	public void obrisiKvar(Long kvarId, String email) {

		Kvar kvar = this.kvarRepository.findKvarById(kvarId)
				.orElseThrow(() -> new NotFoundException("Nepostojeci kvar!"));

		Zgrada zgrada = kvar.getZgrada();

		if (!kvar.getStanar().getEmail().equals(email)) {
			if (!(zgrada.getPredsednikSkupstine() != null
					&& zgrada.getPredsednikSkupstine().getEmail().equals(email))) {
				throw new BadRequestException("Ne mozete brisati kvar jer niste njegov autor!");
			}
		}

		zgrada.getKvarovi().remove(kvar);
		this.zgradaRepository.save(zgrada);

		this.kvarRepository.delete(kvar);
	}

	public Komentar noviKomentar(Komentar kk, Long kvarId, String email) {

		Korisnik korisnik = this.korisnikRepository.findKorisnikByEmail(email)
				.orElseThrow(() -> new NotFoundException("Nepostojeci korisnik!"));

		Kvar kvar = this.kvarRepository.findKvarById(kvarId)
				.orElseThrow(() -> new NotFoundException("Nepostojeci kvar!"));

		
		
		if (!kvar.getOdgovornoLice().getEmail().equals(email) && 
				!kvar.getStanar().getEmail().equals(email)) {
			throw new BadRequestException(
					"Ne mozete postavljati komentare na ovaj kvar jer niste odgovorno lice ili autor za isti!");
		}
		

		kk.setDatum(new Date());
		kk.setMenjan(false);
		kk.setAutor(korisnik);
		this.komentarRepository.save(kk);
		kvar.getKomentari().add(kk);
		this.kvarRepository.save(kvar);
		return kk;
	}

	public Komentar izmeniKomentar(Komentar kk, Long kvarId, Long komentarId, String email) {

		Kvar kvar = this.kvarRepository.findKvarById(kvarId)
				.orElseThrow(() -> new NotFoundException("Nepostojeci kvar!"));

		Komentar komentar = this.komentarRepository.findKomentarById(komentarId)
				.orElseThrow(() -> new NotFoundException("Nepostojeci komentar!"));

		if (!kvar.getKomentari().contains(komentar)) {
			throw new BadRequestException("Kvar ne sadrzi dati komentar!");
		}

		if (!komentar.getAutor().getEmail().equals(email)) {
			throw new BadRequestException("Ne moze se menjati komentar u kvaru jer niste njegov autor!");
		}

		komentar.setMenjan(true);
		komentar.setTekst(kk.getTekst());
		this.komentarRepository.save(komentar);
		return komentar;
	}

	public void obrisiKomentar(Long komentarId, Long kvarId, String email) {

		Kvar kvar = this.kvarRepository.findKvarById(kvarId)
				.orElseThrow(() -> new NotFoundException("Nepostojeci kvar!"));

		Komentar komentar = this.komentarRepository.findKomentarById(komentarId)
				.orElseThrow(() -> new NotFoundException("Nepostojeci komentar!"));

		if (!kvar.getKomentari().contains(komentar)) {
			throw new BadRequestException("Kvar ne sadrzi dati komentar!");
		}

		if (!komentar.getAutor().getEmail().equals(email)) {
			throw new BadRequestException("Ne moze se menjati komentar u kvaru jer niste njegov autor!");
		}

		kvar.getKomentari().remove(komentar);
		this.kvarRepository.save(kvar);

		this.komentarRepository.delete(komentar);
	}

	public List<Komentar> dobaviKomentare(Long kvarId) {

		Kvar kvar = this.kvarRepository.findKvarById(kvarId)
				.orElseThrow(() -> new NotFoundException("Nepostojeci kvar!"));

		return kvar.getKomentari();
	}

	public Kvar zameniOdgovornoLice(Long kvarId, Long odgovornoLiceId, String email) {

		Kvar kvar = this.kvarRepository.findKvarById(kvarId)
				.orElseThrow(() -> new NotFoundException("Nepostojeci kvar!"));

		if (!kvar.getStanar().getEmail().equals(email)) {
			if (!kvar.getOdgovornoLice().getEmail().equals(email)) {
				throw new BadRequestException("Nemate pravo da vrsite ovu akciju!");
			}

		}
		if (kvar.isGotovo())
			throw new BadRequestException("Kvar je zavrsen, nije moguce praviti izmene!");

		Zgrada zgrada = kvar.getZgrada();
		Korisnik odgovoran = this.korisnikRepository.findKorisnikById(odgovornoLiceId)
				.orElseThrow(() -> new NotFoundException("Nepostojeci korisnik kao odgovorno lice!"));

		if (odgovoran instanceof Stanar) {
			if (((Stanar) odgovoran).getStan() == null || !zgrada.equals(((Stanar) odgovoran).getStan().getZgrada())) {
				throw new BadRequestException("Nije moguce kao dogovorno lice odrediti stanara iz druge zgrade!");
			}
		} else if (odgovoran instanceof Firma) {
			if (!zgrada.getFirme().contains(((Firma) odgovoran))) {
				throw new BadRequestException("Nije moguce postaviti firmu koja nije zaduzena za tu zgradu!");
			}
		}

		kvar.setOdgovornoLice(odgovoran);

		this.kvarRepository.save(kvar);

		return kvar;
	}

	public Kvar postaviVremePopravke(Long kvarId, Date vreme, String email) {

		Kvar kvar = this.kvarRepository.findKvarById(kvarId)
				.orElseThrow(() -> new NotFoundException("Nepostojeci kvar!"));

		if (!kvar.getOdgovornoLice().getEmail().equals(email))
			throw new BadRequestException("Nemate pravo da vrsite ovu akciju!");

		Date sada = new Date();

		if (vreme.before(sada))
			throw new BadRequestException("Uneto vreme mora biti u buducnosti!");

		kvar.setVremePopravke(vreme);
		if (kvar.isGotovo())
			throw new BadRequestException("Kvar je zavrsen, nije moguce praviti izmene!");

		this.kvarRepository.save(kvar);

		return kvar;
	}

	public void unesiPredracun(Predracun predracun, Long kvarId, String email) {
		Kvar kvar = this.kvarRepository.findKvarById(kvarId)
				.orElseThrow(() -> new NotFoundException("Nepostojeci kvar!"));

		if (!kvar.getOdgovornoLice().getEmail().equals(email)) {
			throw new BadRequestException("Ne mozete definisati predracun za koji niste odgovorno lice!");
		}

		if (kvar.isGotovo()) {
			throw new BadRequestException("Ne mozete menjati predracun jer je vec placen!");
		}

		this.predracunRepository.save(predracun);
		kvar.setPredracun(predracun);
		this.kvarRepository.save(kvar);
	}

	public Kvar zavrsiKvar(Long kvarId, String email) {
		Kvar kvar = this.kvarRepository.findKvarById(kvarId)
				.orElseThrow(() -> new NotFoundException("Nepostojeci kvar!"));

		Zgrada zgrada = kvar.getZgrada();

		if (!kvar.getStanar().getEmail().equals(email)) {
			if (!(zgrada.getPredsednikSkupstine() != null
					&& zgrada.getPredsednikSkupstine().getEmail().equals(email))) {
				throw new BadRequestException("Ne mozete menjati kvar jer niste njegov autor!");
			}
		}

		kvar.setGotovo(!kvar.isGotovo());

		this.kvarRepository.save(kvar);
		return kvar;
	}

	@Override
	public List<Korisnik> moguciOdgovorni(Long zgradaId, String search) {

		ArrayList<Korisnik> retval = new ArrayList<Korisnik>();
		Zgrada zgrada = this.zgradaRepository.findZgradaById(zgradaId)
				.orElseThrow(() -> new NotFoundException("Nepostojeca zgrada!"));
		;
		for (Firma firma : zgrada.getFirme()) {
			if (firma.getAdresa().contains(search) || firma.getNaziv().contains(search)
					|| firma.getEmail().contains(search))
				retval.add(firma);
		}
		for (Institucija inst : this.institucijaRepository.findAll()) {
			if (inst.getLokacija().contains(search) || inst.getNaziv().contains(search)
					|| inst.getEmail().contains(search))
				retval.add(inst);
		}

		for (Stan stan : zgrada.getStanovi()) {
			for (Stanar stanar : stan.getStanari()) {
				if ((stanar.getIme() + " " + stanar.getPrezime()).contains(search)
						|| stanar.getEmail().contains(search))
					retval.add(stanar);
			}
		}

		return retval;
	}

	@Override
	public Slika dobaviSliku(Long slikaId) {
		Slika s = this.slikaRepository.findSlikaById(slikaId)
				.orElseThrow(() -> new NotFoundException("Nepostojeca slika!"));
		return s;
	}

	@Override
	public List<Komentar> izlistajKomentare(Long kvarId) {
		Kvar kvar = this.kvarRepository.findKvarById(kvarId)
				.orElseThrow(() -> new NotFoundException("Nepostojeci kvar!"));

		return kvar.getKomentari();
	}

	@Override
	public List<Kvar> izlistajKvaroveAutora(String email, boolean gotovo) {
		Stanar stanar = stanarRepository.findStanarByEmail(email)
				.orElseThrow(() -> new NotFoundException("Nepostojeci stanar!"));
		
		List<Kvar> kvarovi = new ArrayList<Kvar>();
		if (!gotovo) {
			for (Kvar k : (List<Kvar>) (List<Kvar>) this.kvarRepository.findByStanar(stanar)) {
				if (!k.isGotovo()) {
					kvarovi.add(k);
				}
			}
		} else {
			kvarovi = (List<Kvar>) (List<Kvar>) this.kvarRepository.findByStanar(stanar);
		}
		
		return kvarovi;
	}

	@Override
	public List<Kvar> izlistajKvaroveOdgovornogLica(String email, boolean gotovo) {
		Korisnik odgovornoLice = korisnikRepository.findKorisnikByEmail(email)
				.orElseThrow(() -> new NotFoundException("Nepostojeci korisnik!"));

		List<Kvar> kvarovi = new ArrayList<Kvar>();
		if (!gotovo) {
			for (Kvar k : (List<Kvar>) this.kvarRepository.findByOdgovornoLice(odgovornoLice)) {
				if (!k.isGotovo()) {
					kvarovi.add(k);
				}
			}
		} else {
			kvarovi = (List<Kvar>) this.kvarRepository.findByOdgovornoLice(odgovornoLice);
		}
		
		return kvarovi;
	}

	@Override
	public List<Kvar> izlistajKvaroveZgrade(Long zgradaId, boolean gotovo) {
		Zgrada z = zgradaRepository.findZgradaById(zgradaId)
				.orElseThrow(() -> new NotFoundException("Nepostojeca zgrada!"));

		List<Kvar> kvarovi = new ArrayList<Kvar>();
		if (!gotovo) {
			for (Kvar k : z.getKvarovi()) {
				if (!k.isGotovo()) {
					kvarovi.add(k);
				}
			}
		} else {
			kvarovi = z.getKvarovi();
		}
		return kvarovi;
	}

	@Override
	public Kvar dobaviKvar(Long kvarId) {
		Kvar k = kvarRepository.findKvarById(kvarId).orElseThrow(() -> new NotFoundException("Nepostojeci kvar!"));
		return k;
	}

}
