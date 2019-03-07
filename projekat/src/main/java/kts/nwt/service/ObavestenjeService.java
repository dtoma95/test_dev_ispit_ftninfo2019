package kts.nwt.service;

import java.util.List;

import org.springframework.data.domain.Pageable;

import kts.nwt.domain.Obavestenje;

public interface ObavestenjeService {
	
	/**
	 * Metoda vrsi dodavanje obavestenja 
	 * @param obavestenje - Obavestenje sa unapred postavljenim podacima
	 * @param email - Email ulogovanog korisnika
	 * @return Obavestenje sa svim podacima
	 */
	Obavestenje novoObavestenje(Obavestenje obavestenje, String email);
	
	
	/**
	 * Metoda vrsi izmenu obavestenja
	 * @param obavestenje - Obavestenje sa unapred izmenjenim podacima
	 * @param obavestenjeId - Identifikator obavestenja nad kojim se vrsi izmena
	 * @param email - Email ulogovanog korisnika
	 * @return Izmenjeno obavestenje
	 */
	Obavestenje izmenaObavestenja(Obavestenje obavestenje, Long obavestenjeId, String email);
	
	/**
	 * Metoda vrsi brisanje obavestenja
	 * @param obavestenjeId - Identifikator obavestenja koje se brise
	 * @param email - Email ulogovanog korisnika
	 */
	void brisanjeObavestenja(Long obavestenjeId, String email);
	
	/**
	 * Metoda koja nalazi zeljeno obavestenje
	 * @param obavestenjeId - Identifikator obavestenja koje se trazi
	 * @param email - Email ulogovanog korisnika
	 * @return - Obavestenje sa svim podacima
	 */
	Obavestenje pregledObavestenja(Long obavestenjeId, String email);
	
	/**
	 * Metoda koja vraca odgovarajucu stranu obavestenja
	 * @param page - Objekat koji sadrzi informacije o broju strane i broju elemenata na strani
	 * @param email - Email ulogovanog korisnika
	 * @return - Lista trazenih obavestenja
	 */
	List<Obavestenje> izlistajObavestenja(Pageable page, String email);
}
