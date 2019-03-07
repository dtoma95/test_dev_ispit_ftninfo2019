package kts.nwt.service;

import kts.nwt.domain.PredlogTackeDnevnogReda;

public interface PredlogTackeDnevnogRedaService {
	/**
	 * Metoda vrsi dodavanje predloga tacke dnevnog reda
	 * @param predlogTackeDnevnogReda - Predlog tacke dnevnog reda sa unapred postavljenim podacima
	 * @param email - Email ulogovanog korisnika
	 * @return Predlog tacke dnevnog reda sa svim podacima
	 */
	PredlogTackeDnevnogReda noviPredlogTackeDnevnogReda(PredlogTackeDnevnogReda predlogTackeDnevnogReda, String email);
	
	/**
	 * Metoda vrsi izmenu predloga tacke dnevnog reda
	 * @param predlogTackeDnevnogReda - Predlog tacke dnevnog reda sa izmenjenim podacima
	 * @param ptdrId - Identifikator predloga tacke dnevnog reda nad kojim vrsimo izmenu
	 * @param email - Email ulogovanog korisnika
	 * @return Izmenjen predlog tacke dnevnog reda
	 */
	PredlogTackeDnevnogReda izmenaPredlogaTackeDnevnogReda(PredlogTackeDnevnogReda predlogTackeDnevnogReda, Long ptdrId, String email);
	
	/**
	 * Metoda vrsi brisanje predloga tacke dnevnog reda
	 * @param ptdrId - Identifikator predloga tacke dnevnog reda
	 * @param email - Email ulogovanog korisnika
	 */
	void brisanjePredlogaTackeDnevnogReda(Long ptdrId, String email);
	
	/**
	 * Metoda koja nalazi zeljeni predlog tacke dnevnog reda
	 * @param ptdrId - Identifikator predloga tacke dnevnog reda
	 * @param email - Email ulogovanog korisnika
	 * @return Predlog tacke dnevnog reda sa svim podacima
	 */
	PredlogTackeDnevnogReda pregledPredlogaTackeDnevrnogReda(Long ptdrId, String email);
	
	/**
	 * Metoda dodaje odluku u predlog tacke dnevnog reda
	 * @param odluka - Tekst donete odluke
	 * @param ptdrId - Identifikator predloga tacke dnevnog reda
	 * @param email - Email ulogovanog korisnika
	 * @return Predlog tacke dnevnog reda sa donetom odlukom
	 */
	PredlogTackeDnevnogReda odlukaPredlogaTackeDnevnogReda(String odluka, Long ptdrId, String email);
}
