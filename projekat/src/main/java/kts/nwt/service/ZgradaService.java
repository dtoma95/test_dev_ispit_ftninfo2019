package kts.nwt.service;

import java.util.List;
import java.util.Map;

import org.springframework.data.domain.Pageable;

import kts.nwt.domain.Firma;
import kts.nwt.domain.Obavestenje;
import kts.nwt.domain.PredlogTackeDnevnogReda;
import kts.nwt.domain.Skupstina;
import kts.nwt.domain.Stan;
import kts.nwt.domain.Stanar;
import kts.nwt.domain.Zgrada;

public interface ZgradaService {
	/**
	 * Metoda koja dobavlja zgradu sa trazenim id-em
	 * @param zgradaId - Identifikator zgrade
	 * @return Zgrada sa trazenim id-em
	 */
	Zgrada zgrada(Long zgradaId);
	
	/**
	 * Metoda koja dobavlja stan sa trazenim id-em
	 * @param stanId - Identifikator stana
	 * @return Stan sa trazenim id-em
	 */
	Stan stan(Long stanId);
	
	/**
	 * Metoda nabavlja sva obavestenja iz zgrade
	 * @param zgradaId - Identifikator zgrade iz koje se traze obavestenja
	 * @param email - Email ulogovanog korisnika
	 * @return Lista obavestenja filtrirana u skladu sa prosledjenim parametrima
	 */
    List<Obavestenje> izlistajObavestenjaZgrade(Long zgradaId, String email);
    
    /**
     * Metoda koja vraca odgovarajucu stranu predloga tacaka dnevnog reda za odgovarajucu zgradu
     * @param zgradaId - Identifikator zeljene zgrade
     * @param page - Objekat koji sadrzi informacije o broju strane i broju elemenata na strani
     * @param email - Email ulogovanog korisnika
     * @return Lista predloga tacaka dnevnog reda zgrade sa prosledjenim identifikatorom
     */
    List<PredlogTackeDnevnogReda> izlistajPTDRZgrade(Long zgradaId, String email);
    
    /**
     * Metoda koja vraca skupstine koje predstoje u buducem periodu
     * @param zgradaId - Identifikator zeljene zgrade
     * @param email - Email ulogovanog korisnika
     * @return Lista predloga skupstina koje tek predstoje
     */
    List<Skupstina> izlistajSkupstineKojePredstoje(Long zgradaId, String email);
    
    /**
	 * Metoda koja vraca odogvarajucu stranu stanara zgrade
	 * @param zgradaId - Identifikator zgrade
	 * @param page - Objekat koji sadrzi informacije o broju strane i broju elemenata na strani
	 * @return - Lista stanara zgrade
	 */
	List<Stanar> izlistajStanareZgrade(Long zgradaId, Pageable page);
    
	/**
	 * Metoda koja vraca odogvarajucu stranu firmi zgrade
	 * @param zgradaId - Identifikator zgrade
	 * @param page - Objekat koji sadrzi informacije o broju strane i broju elemenata na strani
	 * @return - Lista firmi zgrade
	 */
	List<Firma> izlistajFirmeZgrade(Long zgradaId, Pageable page, String email);
	
	/**
	 * Metoda koja vraca zgrade u kojima stanar je vlasnik nekog stana ili u kojima zivi
	 * @param email - korisnicko ime stanara 
	 * @return - Lista zgradi
	 */
	Map<String, List<Zgrada>> izlistajZgradeStanara(String email);
}
