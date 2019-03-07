package kts.nwt.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.support.PagedListHolder;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import kts.nwt.domain.Firma;
import kts.nwt.domain.Institucija;
import kts.nwt.domain.Stan;
import kts.nwt.domain.Stanar;
import kts.nwt.domain.Zgrada;

public interface AdministratorService {
	/**
	 * Metoda vrsi dodavanje zgrade
	 * 
	 * @param zgrada - Zgrada sa unapred postavljenim podacima
	 * @return - Novonapravljena zgrada
	 */
	Zgrada novaZgrada(Zgrada zgrada);
		
	/**
	 * Metoda koja vraca odgovarajucu stranu zgrada
	 * @param page - Objekat koji sadrzi informacije o broju strane i broju elemenata na strani
	 * @param ulicaBroj - Ulica i/ili broj u kojima se trazene zgrade nalaze
	 * @param mesto - Mesto u kojem se trazene zgrade nalaze
	 * @return - Stranica zgrada
	 */
	Page<Zgrada> zgrade(Pageable page, String ulicaBroj, String mesto);
	
	/**
	 * Metoda vrsi brisanje zgrade
	 * @param id - Identifikator zgrade koja treba da se obrise
	 */
	void obrisiZgradu(Long id);
	
	/**
	 * Metoda vrsi dodavanje stana
	 * @param stan - Stan sa unapred postavljenim podacima
	 * @param zgradaId - Identifikator zgrade u koju se dodaje novi stan
	 * @return - Novonapravljeni stan
	 */
	Stan noviStan(Stan stan, Long zgradaId);
	
	/**
	 * Metoda koja vraca odogvarajucu stranu stanova zgrade
	 * @param zgradaId - Identifikator zgrade
	 * @param page - Objekat koji sadrzi informacije o broju strane i broju elemenata na strani
	 * @return - Lista stanova zgrade
	 */
	PagedListHolder<Stan> izlistajStanoveZgrade(Long zgrada, Pageable page);
	
	/**
	 * Metoda vrsi brisanje stana
	 * @param id - Identifikator stana koji treba da se obrise
	 */
	void obrisiStan(Long id);
	
	/**
	 * Metoda vrsi dodavanje stanara 
	 * @param stanar - Stanar sa unapred postavljenim podacima
	 * @return - Novonapravljeni stanar
	 */
	Stanar noviStanar(Stanar stanar);
	
	/**
	 * Metoda vraca stanar sa trazenim id-em
	 * @param stanarId - Identifikator stanara
	 * @return Stanar sa trazenim id-em
	 */
	Stanar stanar(Long stanarId);
	
	/**
	 * Metoda vraca sve stanare sa mogucnoscu filtriranja po imenu, prezimenu ili email-u
	 * @param page - Objekat koji sadrzi informacije o broju strane i broju elemenata na strani
	 * @param filter - Ime, prezime ili email po kom se vrsi pretraga
	 * @return Trazena stranica sa listom stanara
	 */
	PagedListHolder<Stanar> stanari(Pageable page, String filter);
	
	/**
	 * Metoda vraca stan u kome stanar stanuje i stanove ciji je on vlasnik
	 * @param stanarId - Identifikator stanara
	 * @return Mapa koja sadrzi stan u kome stanar stanuje i listu svih stanova ciji je on vlasnik
	 */
	Map<String, List<Stan>> izlistajStanoveStanara(Long stanarId);
	
	/**
	 * Metoda vraca stanare trazenog stana
	 * @param stanId - Identifikator stana
	 * @return Lista stanara stana
	 */
	List<Stanar> izlistajStanareStana(Long stanId);
	
	/**
	 * Metoda vrsi brisanje stanara
	 * @param id - Identifikator stanara koji treba da se obrise
	 */
	void obrisiStanara(Long id);
	
	/**
	 *  Metoda vrsi dodavanje institucije 
	 * @param institucija - Institucija sa unapred postavljenim podacima
	 * @return - Novonapravljena institucija
	 */
	Institucija novaInstituciju(Institucija institucija);
	
	/**
	 * Metoda vraca sve institucije sa mogucnoscu filtriranja po nazivu ili email-u
	 * @param page - Objekat koji sadrzi informacije o broju strane i broju elemenata na strani
	 * @param filter - Naziv ili email po kom se vrsi pretraga
	 * @return Trazena stranica sa listom institucija
	 */
	PagedListHolder<Institucija> institucije(Pageable page, String filter);
	
	/**
	 *  Metoda vrsi dodelu stanara stanu
	 * @param stanarId - Identifikator stanara kojeg dodajemo u stan
	 * @param stanId - Identifikator stana u koji dodajemo stanara
	 * @return - Uspesno dodeljeni stanar
	 */
	Stanar dodeliStanara(Long stanarId, Long stanId);
	
	/**
	 * Metoda kojom se stanar uklanja iz liste stanara nekog stana
	 * @param stanarId - Identifikator stanara
	 * @param stanId - Identifikator stana
	 * @return Stanar koji je iseljen
	 */
	Stanar iseliStanara(Long stanarId, Long stanId);
	
	/**
	 * Metoda koja postavlja predsednika skupstine u zgradi
	 * @param stanarId - Identifikator stanara koji postaje predsednik
	 * @return - Zgrada sa novim predsednikom
	 */
	Zgrada postaviPredsednika(Long stanarId);
	
	/**
	 * Metoda koja postavlja vlasnika stana
	 * @param stanarId - Identifikator stanara koji postaje vlasnik
	 * @param stanId - Identifikator stana za koji se postavlja vlasnik
	 * @return - Stan sa novim vlasnikom
	 */
	Stan postaviVlasnika(Long stanarId, Long stanId);
	
	/**
	 * Metova koja uklanja vlasnika stana
	 * @param stanId - Identifikator stana
	 * @return Stan u kome je uklonjen vlasnik
	 */
	Stan ukloniVlasnika(Long stanId);
	
	/**
	 * Metoda vrsi dodavanje firme
	 * @param firma - Firma sa unapred postavljenim podacima
	 * @return - Novonapravljena firma
	 */
	Firma novaFirma(Firma firma);
	
	/**
	 * Metoda dodeljuje firmu zgradi
	 * @param firmaId - Identifikator firme koju dodeljujemo
	 * @param zgradaId - Identifikator zgrade kojoj dodeljujemo firmu
	 * @return - Zgrada sa novom dodeljenom firmom
	 */
	Zgrada dodeliFirmu(Long firmaId, Long zgradaId);
	
	/**
	 * Metoda vraca sve firme sa mogucnoscu filtriranja po nazivu ili email-u
	 * @param page - Objekat koji sadrzi informacije o broju strane i broju elemenata na strani
	 * @param filter - Naziv ili email po kom se vrsi pretraga
	 * @return Trazena stranica sa listom firmi
	 */
	PagedListHolder<Firma> firme(Pageable page, String filter);
	
	/**
	 * Metoda koja uklanja firmu iz zgrade
	 * @param firmaId - Identifikator firme koju uklanjamo
	 * @param zgradaId - Identifikator zgrade iz koje uklanjamo firmu
	 */
	void obrisiFirmu(Long firmaId, Long zgradaId);
}
