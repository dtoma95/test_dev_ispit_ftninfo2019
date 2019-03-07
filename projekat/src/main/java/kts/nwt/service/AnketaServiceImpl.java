package kts.nwt.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.support.PagedListHolder;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kts.nwt.domain.Pitanje;
import kts.nwt.domain.FirmaOpcija;
import kts.nwt.domain.Opcija;
import kts.nwt.domain.PredlogTackeDnevnogReda;
import kts.nwt.domain.Stan;
import kts.nwt.domain.Stanar;
import kts.nwt.domain.StanarOpcija;
import kts.nwt.domain.VrstaPitanja;
import kts.nwt.domain.Zgrada;
import kts.nwt.exceptions.BadRequestException;
import kts.nwt.exceptions.NotFoundException;
import kts.nwt.repository.AnketaRepository;
import kts.nwt.repository.OpcijaRepository;
import kts.nwt.repository.PredlogTackeDnevnogRedaRepository;
import kts.nwt.repository.StanRepository;
import kts.nwt.repository.StanarRepository;

@Service
public class AnketaServiceImpl implements AnketaService {

	@Autowired
	private StanarRepository stanarRepository;

	@Autowired
	private AnketaRepository anketaRepository;

	@Autowired
	private OpcijaRepository opcijaRepository;

	@Autowired
	private PredlogTackeDnevnogRedaRepository predlogTackeDnevnogRedaRepository;

	@Autowired
	private StanRepository stanRepository;

	public Pitanje dodajPitanjeUAnketu(Pitanje pitanje, String email, Long ptdrId) {

		Stanar stanar = this.stanarRepository.findStanarByEmail(email)
				.orElseThrow(() -> new NotFoundException("Nepostojeci korisnik!"));

		PredlogTackeDnevnogReda ptdr = this.predlogTackeDnevnogRedaRepository.findPtdrById(ptdrId)
				.orElseThrow(() -> new NotFoundException("Nepostojeci predlog tacke dnevnog reda!"));

		Zgrada zgrada = ptdr.getZgrada();

		if (stanar.getStan() != null) {
			if (!zgrada.equals(stanar.getStan().getZgrada())) {
				throw new BadRequestException("Nije moguce dodati pitanje u anketu za neodgovarajucu zgradu!");
			}
		} else {
			throw new BadRequestException("Stanaru nije dodeljen stan!");
		}
		
		if (ptdr.getSkupstina() == null) {
			throw new BadRequestException("Ne mozete dodati pitanje u anketu tacke dnevnog reda koja nije dodeljena skupstini!");
		}

		if (ptdr.getSkupstina().getPocetakSkupstine().before(new Date())) {
			throw new BadRequestException("Ne mozete dodati pitanje nakon pocetka skupstine!");
		}

		if (pitanje.getOpcije().size() < 2) {
			throw new BadRequestException("Pitanje ne moze imati manje od 2 opcije!");
		}

		pitanje.setPredlogTackeDnevnogReda(ptdr);
		pitanje.setStanar(stanar);

		if (pitanje.getVrstaPitanja() == VrstaPitanja.STANAR_PITANJE) {

			for (int i = 0; i < pitanje.getOpcije().size(); i++) {

				StanarOpcija op = (StanarOpcija) pitanje.getOpcije().get(i);

				if (!zgrada.equals(op.getStanar().getStan().getZgrada())) {
					throw new BadRequestException("Stanar ne zivi u toj zgradi, te ne moze biti izabran kao opcija!");
				}

				pitanje.getOpcije().get(i).setTekst(pitanje.getOpcije().get(i).getTekst() + " - " + op.getStanar().getEmail());
			}

		} else if (pitanje.getVrstaPitanja() == VrstaPitanja.FIRMA_PITANJE) {

			for (int i = 0; i < pitanje.getOpcije().size(); i++) {

				FirmaOpcija op = (FirmaOpcija) pitanje.getOpcije().get(i);

				if (!zgrada.getFirme().contains(op.getFirma())) {
					throw new BadRequestException(
							"Firma nije nadlezna za tu zgradu te ne moze biti dodeljena kao opcija!");
				}

				pitanje.getOpcije().get(i)
						.setTekst(pitanje.getOpcije().get(i).getTekst() + " - " + op.getFirma().getEmail());
			}
		}

		this.anketaRepository.save(pitanje);
		ptdr.getAnketa().add(pitanje);
		this.predlogTackeDnevnogRedaRepository.save(ptdr);

		return pitanje;
	}

	public Opcija dodajOpciju(Opcija opcija, String email, Long pitanjeId) {

		Stanar stanar = this.stanarRepository.findStanarByEmail(email)
				.orElseThrow(() -> new NotFoundException("Nepostojeci Stanar!"));

		Pitanje pitanje = this.anketaRepository.findAnketaById(pitanjeId)
				.orElseThrow(() -> new NotFoundException("Nepostojece pitanje!"));

		Zgrada zgrada = pitanje.getPredlogTackeDnevnogReda().getZgrada();

		if (stanar.getStan() != null) {
			if (!zgrada.equals(stanar.getStan().getZgrada())) {
				throw new BadRequestException("Nije moguce dodati opciju za pitanje za neodgovarajucu zgradu!");
			}
		} else {
			throw new BadRequestException("Stanaru nije dodeljen stan!");
		}

		if (!pitanje.getStanar().getEmail().equals(email)) {
			// znaci dodavanje vrsi predsednik skupstine
			if (!(zgrada.getPredsednikSkupstine() != null && zgrada.getPredsednikSkupstine().equals(stanar))) {
				throw new BadRequestException("Niste autor ovog pitanja!");
			}
		}

		if (pitanje.getPredlogTackeDnevnogReda().getSkupstina() != null
				&& pitanje.getPredlogTackeDnevnogReda().getSkupstina().getPocetakSkupstine().before(new Date())) {
			throw new BadRequestException("Ne mozete dodati opciju za pitanje nakon pocetka skupstine!");
		}

		if (pitanje.getVrstaPitanja() == VrstaPitanja.OBICNO_PITANJE) {

			if (opcija instanceof StanarOpcija || opcija instanceof FirmaOpcija) {
				throw new BadRequestException("Neodgovarajuci tip opcije!");
			}

			opcija.setPitanje(pitanje);
			pitanje.getOpcije().add(opcija);
			this.opcijaRepository.save(opcija);
			this.anketaRepository.save(pitanje);

			return opcija;

		} else if (pitanje.getVrstaPitanja() == VrstaPitanja.STANAR_PITANJE) {

			if (!(opcija instanceof StanarOpcija)) {
				throw new BadRequestException("Neodgovarajuci tip opcije!");
			}

			StanarOpcija so = (StanarOpcija) opcija;

			if (!zgrada.equals(so.getStanar().getStan().getZgrada())) {
				throw new BadRequestException("Stanar ne zivi u toj zgradi, te ne moze biti izabran kao opcija!");
			}

			so.setTekst(so.getTekst() + " " + so.getStanar().getIme() + " " + so.getStanar().getPrezime() + " - "
					+ so.getStanar().getEmail());
			so.setPitanje(pitanje);
			pitanje.getOpcije().add(so);
			this.opcijaRepository.save(so);
			this.anketaRepository.save(pitanje);

			return so;
		} else {

			if (!(opcija instanceof FirmaOpcija)) {
				throw new BadRequestException("Neodgovarajuci tip opcije!");
			}

			FirmaOpcija fo = (FirmaOpcija) opcija;

			if (!zgrada.getFirme().contains(fo.getFirma())) {
				throw new BadRequestException("Firma nije nadlezna za tu zgradu te ne moze biti dodeljena kao opcija!");
			}

			fo.setTekst(fo.getTekst() + " - " + fo.getFirma().getNaziv());
			fo.setPitanje(pitanje);
			pitanje.getOpcije().add(fo);
			this.opcijaRepository.save(fo);
			this.anketaRepository.save(pitanje);

			return fo;
		}
	}

	public Opcija izmeniOpciju(Opcija opcija, String email, Long pitanjeId, Long opcijaId) {

		Stanar stanar = this.stanarRepository.findStanarByEmail(email)
				.orElseThrow(() -> new NotFoundException("Nepostojeci Stanar!"));

		Pitanje pitanje = this.anketaRepository.findAnketaById(pitanjeId)
				.orElseThrow(() -> new NotFoundException("Nepostojece Pitanje!"));

		Opcija op = this.opcijaRepository.findOpcijaById(opcijaId)
				.orElseThrow(() -> new NotFoundException("Nepostojeca opcija!"));

		Zgrada zgrada = this.validacijaOpcija(pitanje, op, stanar, email,
				"Nije moguce izmeniti opciju za pitanje za neodgovarajucu zgradu!",
				"Ne mozete menjati opciju za pitanje nakon pocetka skupstine!");

		if (pitanje.getVrstaPitanja() == VrstaPitanja.OBICNO_PITANJE) {

			if (opcija instanceof StanarOpcija || opcija instanceof FirmaOpcija) {
				throw new BadRequestException("Neodgovarajuci tip opcije!");
			}

			op.setTekst(opcija.getTekst());
			this.opcijaRepository.save(op);

			return op;

		} else if (pitanje.getVrstaPitanja() == VrstaPitanja.STANAR_PITANJE) {

			if (!(opcija instanceof StanarOpcija)) {
				throw new BadRequestException("Neodgovarajuci tip opcije!");
			}

			StanarOpcija so = (StanarOpcija) opcija;

			if (!zgrada.equals(so.getStanar().getStan().getZgrada())) {
				throw new BadRequestException("Stanar ne zivi u toj zgradi, te ne moze biti izabran kao opcija!");
			}

			op.setTekst(opcija.getTekst() + " " + so.getStanar().getIme() + " " + so.getStanar().getPrezime() + " - "
					+ so.getStanar().getEmail());

			this.opcijaRepository.save(op);

			return op;
		} else {

			if (!(opcija instanceof FirmaOpcija)) {
				throw new BadRequestException("Neodgovarajuci tip opcije!");
			}

			FirmaOpcija fo = (FirmaOpcija) opcija;

			if (!zgrada.getFirme().contains(fo.getFirma())) {
				throw new BadRequestException("Firma nije nadlezna za tu zgradu te ne moze biti dodeljena kao opcija!");
			}

			op.setTekst(opcija.getTekst() + " - " + fo.getFirma().getNaziv());

			this.opcijaRepository.save(op);

			return op;
		}
	}

	public void izbrisiOpciju(String email, Long pitanjeId, Long opcijaId) {

		Stanar stanar = this.stanarRepository.findStanarByEmail(email)
				.orElseThrow(() -> new NotFoundException("Nepostojeci Stanar!"));

		Pitanje pitanje = this.anketaRepository.findAnketaById(pitanjeId)
				.orElseThrow(() -> new NotFoundException("Nepostojece Pitanje!"));

		Opcija op = this.opcijaRepository.findOpcijaById(opcijaId)
				.orElseThrow(() -> new NotFoundException("Nepostojeca opcija!"));
		
		this.validacijaOpcija(pitanje, op, stanar, email,
				"Nije moguce obrisati opciju za pitanje za neodgovarajucu zgradu!",
				"Ne mozete brisati opciju za pitanje nakon pocetka skupstine!");

		pitanje.getOpcije().remove(op);
		this.anketaRepository.save(pitanje);
		this.opcijaRepository.delete(opcijaId);
	}

	public Pitanje izmeniPitanjeIzAnkete(Pitanje p, String email, Long ptdrId, Long pitanjeId) {

		Stanar stanar = this.stanarRepository.findStanarByEmail(email)
				.orElseThrow(() -> new NotFoundException("Nepostojeci Stanar!"));

		PredlogTackeDnevnogReda ptdr = this.predlogTackeDnevnogRedaRepository.findPtdrById(ptdrId)
				.orElseThrow(() -> new NotFoundException("Nepostojeci Predlog tacke dnevnog reda!"));

		Pitanje pitanje = this.anketaRepository.findAnketaById(pitanjeId)
				.orElseThrow(() -> new NotFoundException("Nepostojece pitanje!"));

		Zgrada zgrada = ptdr.getZgrada();

		this.validacijaAnkete(pitanje, ptdr, stanar, zgrada, email,
				"Nije moguce izmeniti pitanje za neodgovarajucu zgradu!",
				"Ne mozete izmeniti pitanje nakon pocetka skupstine!");

		pitanje.setTekst(p.getTekst());
		this.anketaRepository.save(pitanje);

		return pitanje;
	}

	public void izbrisiPitanjeIzAnkete(String email, Long ptdrId, Long pitanjeId) {

		Stanar stanar = this.stanarRepository.findStanarByEmail(email)
				.orElseThrow(() -> new NotFoundException("Nepostojeci Stanar!"));

		PredlogTackeDnevnogReda ptdr = this.predlogTackeDnevnogRedaRepository.findPtdrById(ptdrId)
				.orElseThrow(() -> new NotFoundException("Nepostojeci Predlog tacke dnevnog reda!"));

		Pitanje pitanje = this.anketaRepository.findAnketaById(pitanjeId)
				.orElseThrow(() -> new NotFoundException("Nepostojece pitanje!"));

		Zgrada zgrada = ptdr.getZgrada();

		this.validacijaAnkete(pitanje, ptdr, stanar, zgrada, email,
				"Nije moguce izbrisati pitanje za neodgovarajucu zgradu!",
				"Ne mozete izbrisati pitanje nakon pocetka skupstine!");

		ptdr.getAnketa().remove(pitanje);
		this.predlogTackeDnevnogRedaRepository.save(ptdr);
	}

	public Stan glasaj(String email, Long pitanjeId, Long stanId, Long opcijaId) {

		Stanar stanar = this.stanarRepository.findStanarByEmail(email)
				.orElseThrow(() -> new NotFoundException("Nepostojeci Stanar!"));

		Pitanje pitanje = this.anketaRepository.findAnketaById(pitanjeId)
				.orElseThrow(() -> new NotFoundException("Nepostojece pitanje!"));

		Stan stan = this.stanRepository.findStanById(stanId)
				.orElseThrow(() -> new NotFoundException("Nepostojeci stan!"));

		Opcija opcija = this.validacijaGlasanja(stan, stanar, opcijaId, pitanje, "Stan je vec glasao!",
				"Ne mozete glasati na pitanju koje nije dodeljeno skupstini!",
				"Ne mozete glasati na pitanju jer skupstina nije ni pocela!",
				"Ne mozete glasati na pitanju jer se skupstina zavrsila!", true);

		if (!pitanje.getStanar().getStan().getZgrada().equals(stan.getZgrada())) {
			throw new BadRequestException("Ne mozete glasati u ime stana koji nije u istoj zgradi kao pitanje!");
		}

		opcija.getStanoviKojiSuGlasali().add(stan);
		this.opcijaRepository.save(opcija);

		return stan;
	}

	public void ukloniGlas(String email, Long pitanjeId, Long stanId, Long opcijaId) {

		Stanar stanar = this.stanarRepository.findStanarByEmail(email)
				.orElseThrow(() -> new NotFoundException("Nepostojeci Stanar!"));

		Pitanje pitanje = this.anketaRepository.findAnketaById(pitanjeId)
				.orElseThrow(() -> new NotFoundException("Nepostojece pitanje!"));

		Stan stan = this.stanRepository.findStanById(stanId)
				.orElseThrow(() -> new NotFoundException("Nepostojeci stan!"));

		Opcija opcija = this.validacijaGlasanja(stan, stanar, opcijaId, pitanje, "Stan nije glasao!",
				"Ne mozete ukloniti glas sa pitanja koje nije dodeljeno skupstini!",
				"Ne mozete ukloniti glas sa pitanja jer skupstina nije ni pocela!",
				"Ne mozete ukloniti glas sa pitanja jer se skupstina zavrsila!", false);

		opcija.getStanoviKojiSuGlasali().remove(stan);
		this.opcijaRepository.save(opcija);
	}

	@Override
	@Transactional
	public List<Stan> mojiStanovi(Pageable page, String email) {
		Stanar stanar = this.stanarRepository.findByEmail(email);
		if (stanar == null) {
			throw new NotFoundException("Nepostojeci stanar!");
		}

		List<Stan> stanovi = stanar.getVlasnikStanova();
		PagedListHolder<Stan> holder = new PagedListHolder<>(stanovi);
		holder.setPage(page.getPageNumber());
		holder.setPageSize(page.getPageSize());
		List<Stan> pageList = holder.getPageList();
		return pageList;
	}
	
	public List<Stan> stanoviKojiSuGlasali(Long pitanjeId, String email) {
		
		Stanar stanar = this.stanarRepository.findStanarByEmail(email)
				.orElseThrow(() -> new NotFoundException("Nepostojeci Stanar!"));
		
		Pitanje pitanje = this.anketaRepository.findAnketaById(pitanjeId)
				.orElseThrow(() -> new NotFoundException("Nepostojece pitanje!"));
		
		List<Stan> stanovi = new ArrayList<Stan>();
		
		for (Stan s : stanar.getVlasnikStanova()) {
			if (s.getZgrada().equals(pitanje.getPredlogTackeDnevnogReda().getZgrada())) {
				for (Opcija o : pitanje.getOpcije()) {
					if (o.getStanoviKojiSuGlasali().contains(s)) {
						stanovi.add(s);
						break;
					}
				}
			}
		}
		
		return stanovi;
	}

	public List<Stan> stanoviKojiNisuGlasali(Long pitanjeId, String email) {
		
		Stanar stanar = this.stanarRepository.findStanarByEmail(email)
				.orElseThrow(() -> new NotFoundException("Nepostojeci Stanar!"));
		
		Pitanje pitanje = this.anketaRepository.findAnketaById(pitanjeId)
				.orElseThrow(() -> new NotFoundException("Nepostojece pitanje!"));
		
		List<Stan> stanovi = new ArrayList<Stan>();
		
		for (Stan s : stanar.getVlasnikStanova()) {
			if (s.getZgrada().equals(pitanje.getPredlogTackeDnevnogReda().getZgrada())) {
				boolean nadjeno = false;
				for (Opcija o : pitanje.getOpcije()) {
					if (o.getStanoviKojiSuGlasali().contains(s)) {
						nadjeno = true;
						break;
					}
				}
				if (nadjeno == false) {
					stanovi.add(s);
				}
			}
		}
		
		return stanovi;
	}

	private void validacijaAnkete(Pitanje pitanje, PredlogTackeDnevnogReda ptdr, Stanar s, Zgrada z, String email,
			String poruka1, String poruka2) {

		if (!ptdr.getAnketa().contains(pitanje)) {
			throw new BadRequestException("Predlog tacke dnevnog reda ne zadrzi dato pitanje!");
		}

		if (s.getStan() != null) {
			if (!z.equals(s.getStan().getZgrada())) {
				throw new BadRequestException(poruka1);
			}
		} else {
			throw new BadRequestException("Stanaru nije dodeljen stan!");
		}

		if (!pitanje.getStanar().getEmail().equals(email)) {
			// znaci dodavanje vrsi predsednik skupstine
			if (!(z.getPredsednikSkupstine() != null && z.getPredsednikSkupstine().equals(s))) {
				throw new BadRequestException("Niste autor ovog pitanja!");
			}
		}

		if (ptdr.getSkupstina() != null && ptdr.getSkupstina().getPocetakSkupstine().before(new Date())) {
			throw new BadRequestException(poruka2);
		}
	}

	private Opcija validacijaGlasanja(Stan s, Stanar stanar, Long opcijaId, Pitanje pitanje, String poruka1, String poruka2,
			String poruka3, String poruka4, boolean glasanje) {

		// provera da li je korisnik vlasnik stana
		if (s.getVlasnik() != null) {
			if (!s.getVlasnik().equals(stanar)) {
				throw new BadRequestException("Nije moguce glasati na pitanje jer niste vlasnik stana!");
			}
		} else {
			throw new BadRequestException("Stan nema vlasnika!");
		}

		Opcija opcija = this.opcijaRepository.findOpcijaById(opcijaId)
				.orElseThrow(() -> new NotFoundException("Nepostojeca opcija!"));

		if (glasanje) {
			if (pitanje.getOpcije().contains(opcija)) {
				// da li je vec glasao
				for (Opcija o : pitanje.getOpcije()) {
					if (o.getStanoviKojiSuGlasali().contains(s)) {
						throw new BadRequestException(poruka1);
					}
				}
			} else {
				throw new BadRequestException("Pitanje ne sadrzi datu opciju!");
			}
		} else {
			if (pitanje.getOpcije().contains(opcija)) {
				// ako nije glasao, ne moze ukloniti glas
				if (!opcija.getStanoviKojiSuGlasali().contains(s)) {
					throw new BadRequestException(poruka1);
				}
			} else {
				throw new BadRequestException("Pitanje ne sadrzi datu opciju!");
			}
		}

		if (pitanje.getPredlogTackeDnevnogReda().getSkupstina() == null)
			throw new BadRequestException(poruka2);
		else if (pitanje.getPredlogTackeDnevnogReda().getSkupstina().getPocetakSkupstine().after(new Date()))
			throw new BadRequestException(poruka3);
		else if (pitanje.getPredlogTackeDnevnogReda().getSkupstina().getKrajSkupstine().before(new Date()))
			throw new BadRequestException(poruka4);

		return opcija;
	}

	private Zgrada validacijaOpcija(Pitanje pitanje, Opcija o, Stanar s, String email, String poruka1, String poruka2) {

		if (!pitanje.getOpcije().contains(o)) {
			throw new BadRequestException("Pitanje ne sadrzi datu opciju!");
		}

		Zgrada zgrada = pitanje.getPredlogTackeDnevnogReda().getZgrada();

		if (s.getStan() != null) {
			if (!zgrada.equals(s.getStan().getZgrada())) {
				throw new BadRequestException(poruka1);
			}
		} else {
			throw new BadRequestException("Stanaru nije dodeljen stan!");
		}

		if (!pitanje.getStanar().getEmail().equals(email)) {
			// znaci dodavanje vrsi predsednik skupstine
			if (!(zgrada.getPredsednikSkupstine() != null && zgrada.getPredsednikSkupstine().equals(s))) {
				throw new BadRequestException("Niste autor ovog pitanja!");
			}
		}

		if (pitanje.getPredlogTackeDnevnogReda().getSkupstina() != null
				&& pitanje.getPredlogTackeDnevnogReda().getSkupstina().getPocetakSkupstine().before(new Date())) {
			throw new BadRequestException(poruka2);
		}
		
		return zgrada;
	}
}
