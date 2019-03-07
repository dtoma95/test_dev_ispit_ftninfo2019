package kts.nwt.service;

import java.util.List;

import org.springframework.data.domain.Pageable;

import kts.nwt.domain.Pitanje;
import kts.nwt.domain.Opcija;
import kts.nwt.domain.Stan;

public interface AnketaService {
	
	/**
	 * Metoda vrsi dodavanje pitanja u anketu
	 * @param pitanje - Pitanje sa unapred postavljenim podacima
	 * @param email - Email ulogovanog korisnika
	 * @param ptdrId - Identifikator predloga tacke dnevnog reda u koji se vrsi dodavanje
	 * @return - Pitanje sa svim podacima
	 */
	Pitanje dodajPitanjeUAnketu(Pitanje pitanje, String email, Long ptdrId);
	
	
	/**
	 * Metoda vrsi dodavanje opcije
	 * @param opcija - Opcija sa unapred postavljenim podacima
	 * @param email - Email ulogovanog korisnika
	 * @param pitanjeId - Identifikator pitanja u koju se dodaje opcija
	 * @return - Opcija sa svim podacima
	 */
	Opcija dodajOpciju(Opcija opcija, String email, Long pitanjeId);
	
	/**
	 * Metoda vrsi izmenu opcije
	 * @param opcija - Opcija sa izmenjenim podacima
	 * @param email - Email ulogovanog korisnika
	 * @param pitanjeId - Identifikator pitanja u koju se dodaje izmenjena opcija
	 * @param opcijaId - Identifikator opcije nad kojom se vrsi izmena
	 * @return - Opcija sa izmenjenim podacima
	 */
	Opcija izmeniOpciju(Opcija opcija, String email, Long pitanjeId, Long opcijaId);
	
	/**
	 * Metoda vrsi brisanje opcije iz pitanja
	 * @param email - Email ulogovanog korisnika
	 * @param pitanjeId - Identifikator pitanja iz koje se brise opcija
	 * @param opcijaId - Identifikato opcije koja se brise
	 */
	void izbrisiOpciju(String email, Long pitanjeId, Long opcijaId);
	
	/**
	 * Metoda vrsi izmenu pitanja u anketi
	 * @param pitanje - Pnketa sa izmenjenim podacima
	 * @param email - Email ulogovanog korisnika
	 * @param ptdrId - Predlog tacke dnevnog reda u cijoj anketi se vrsi izmena pitanja
	 * @param pitanjeId - Identifikator pitanja nad kojom se vrsi izmena
	 * @return - Pitanje sa izmenjenim podacima
	 */
	Pitanje izmeniPitanjeIzAnkete(Pitanje pitanje, String email, Long ptdrId, Long pitanjeId);
	
	/**
	 * Metoda vrsi brisanje pitanja iz ankete iz predloga tacke dnevnog reda
	 * @param email - Email ulogovanog korisnika
	 * @param ptdrId - Identifikator predloga tacke dnevnog reda iz cije ankete se brise pitanje
	 * @param pitanjeId - Identifikator pitanja koje se brise
	 */
	void izbrisiPitanjeIzAnkete(String email, Long ptdrId, Long pitanjeId);
	
	/**
	 * Metoda koja vrsi glasanje stana za odabranu opciju
	 * @param email - Email ulogovanog korisnika
	 * @param pitanjeId - Identifikator pitanja na koje se glasa
	 * @param stanId - Identifikator stana koji glasa
	 * @param opcijaId - Identifikator opcije za koju stan glasa
	 * @return - Stan sa novim glasom u anketi
	 */
	Stan glasaj(String email, Long pitanjeId, Long stanId, Long opcijaId);
	
	/**
	 * Metoda koja brise glas stana iz pitanja
	 * @param email - Email ulogovanog korisnika
	 * @param pitanjeId - Identifikator pitanja na koje se glasa
	 * @param stanId - Identifikator stana koji glasa
	 * @param opcijaId - Identifikator opcije za koju je stan prethodno glasao
	 */
	void ukloniGlas(String email, Long pitanjeId, Long stanId, Long opcijaId);
	
	/**
	 * Metoda koja vraca sve stanove stanara koji je pozvao metodu i kojih je on vlasnik
	 * @param page - Objekat koji sadrzi informacije o broju strane i broju elemenata na strani
	 * @param email - Email ulogovanog korisnika
	 * @return - Lista stanova ulogovanog stanara
	 */
	List<Stan> mojiStanovi(Pageable page, String email);
	
	/**
	 * Metoda koja vraca sve stanove stanara kojih je on vlasnik i koji su glasali na anketi
	 * @param pitanjeId - Identifikator pitanja o kome se radi
	 * @param email - Email ulogovanog korisnika
	 * @return - Lista stanova ulogovanog stanara
	 */
	List<Stan> stanoviKojiSuGlasali(Long pitanjeId, String email);
	
	/**
	 * Metoda koja vraca sve stanove stanara kojih je on vlasnik i koji nisu glasali na anketi
	 * @param pitanjeId - Identifikator pitanja o kome se radi
	 * @param email - Email ulogovanog korisnika
	 * @return - Lista stanova ulogovanog stanara
	 */
	List<Stan> stanoviKojiNisuGlasali(Long pitanjeId, String email);

}
