package kts.nwt.service;

import java.util.List;

import kts.nwt.domain.Kriterijum;
import kts.nwt.domain.PredlogTackeDnevnogReda;
import kts.nwt.domain.Skupstina;

public interface SkupstinaService {
	
	/**
	 * Metoda vrsi dodavanje skupstine
	 * @param sk - Skupstina sa unapred postavljenim podacima
	 * @param email - Email ulogovanog korisnika
	 * @return Skupstina sa svim podacima
	 */
	Skupstina dodajSkupstinu(Skupstina sk, String email);
	
	/**
	 * Metoda vrsi izmenu skupstine
	 * @param sk - Skupstina sa unapred izmenjenim podacima
	 * @param email - Email ulogovanog korisnika
	 * @return Izmenjena skupstina
	 */
	Skupstina izmeniSkupstinu(Skupstina sk, String email);
	
	/**
	 * Metoda vrsi brisanje skupstine
	 * @param skupstinaId - Identifikator skupstine koja se brise
	 * @param email - Email ulogovanog korisnika
	 */
	void obrisiSkupstinu(Long skupstinaId, String email);
	
	/**
	 * Metoda vrsi dodavanje predloga tacke dnevnog reda u odabranu skupstinu
	 * @param skupstinaId - Identifikator skupstine u koju se dodaje predlog tacke dnevnog reda
	 * @param ptdrId - Identifikator predloga tacke dnevnog reda koji se dodaje u skupstinu
	 * @param email - Email ulogovanog korisnika
	 * @return Uspesno dodat predlog tacke dnevnog reda
	 */
	PredlogTackeDnevnogReda dodajPtdr(Long skupstinaId, Long ptdrId, String email);
	
	/**
	 * Metoda vrsi uklanjanje predloga tacke dnevnog reda iz odabrane skupstine
	 * @param skupstinaId - Identifikator skupstine iz koje se uklanja predlog tacke dnevnog reda
	 * @param ptdrId - Identifikator predloga tacke dnevnog reda koji se uklanja skupstine
	 * @param email - Email ulogovanog korisnika
	 * @return Uspesno uklonjen predlog tacke dnevnog reda iz skupstine
	 */
	PredlogTackeDnevnogReda ukloniPtdr(Long skupstinaId, Long ptdrId, String email);
	/**
	 * Metoda kojom se dobovalja skupstina sa trazenim identifikatorom
	 * @param skupstinaId - Identifikator skupstine
	 * @param email - Email korisnika
	 * @return - Skupstina koja odgovara prosledjenom identifikatoru
	 */
	Skupstina pregledSkupstine(Long skupstinaId, String email);
	/**
	 * Metoda koja vraca odgovarajucu stranu skupstina stanara
	 * @param page - Objekat koji sadrzi informacije o broju strane i broju elemenata na strani
	 * @param kriterijum - Objekat koji sadrzi informacije kojima zelimo da filtriramo sadrzaj (id zgrade i  datume opsega koji posmatramo)
	 * @param email - Email korisnika
	 * @return - Lista skupstina filtrirana u skladu sa prosledjenim parametrima 
	 */
	List<Skupstina> izlistajSkupstine(Kriterijum kriterijum, String email);
	/**
	 * Metoda koja vraca odgovaraju stranu predloga tacaka dnevnog reda za odredjenu skupstinu
	 * @param skupstinaId - Identifikator skupstine
	 * @param page - Objekat koji sadrzi informacije o broju strane i broju elemenata na strani
	 * @param email - Email korisnika
	 * @return - Lista predloga tacaka dnevnog reda skupstine sa prosledjenim identifikatorom
	 */
	List<PredlogTackeDnevnogReda> izlistajPredlogeTacaka(Long skupstinaId, String email);
}
