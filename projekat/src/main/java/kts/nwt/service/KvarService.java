package kts.nwt.service;

import java.util.Date;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import kts.nwt.domain.Komentar;
import kts.nwt.domain.Korisnik;
import kts.nwt.domain.Kvar;
import kts.nwt.domain.Predracun;
import kts.nwt.domain.Slika;

public interface KvarService {
	
	/**
	 * Metoda vrsi dodavanje kvara
	 * @param kvarId - identifikator kvara koji se dobavlja
	 * @return -Kvar sa svim podacima
	 */
	Kvar dobaviKvar(Long kvarId);
	
	/**
	 * Metoda vrsi dodavanje kvara
	 * @param kvar - Kvar sa unapred postavljenim podacima
	 * @param odgovornoLiceId - Identifikator odgovornog lica koje dodaje kvar
	 * @param email - Email ulogovanog korisnika
	 * @return -Kvar sa svim podacima
	 */
	Kvar dodajKvar(Kvar kvar, Long odgovornoLiceId, String email);
	
	/**
	 * Metoda vrsi dodavanje slike
	 * @param kvarId - Identifikator kvara za koji se dodaje slika
	 * @param files - Lista fajlova koje klijent salje ka serveru
	 * @param email - Email ulogovanog korisnika
	 * @return - Kvar za koji je dodata slika
	 */
	Kvar dodajSliku(Long kvarId, MultipartFile[] files, String email);

	/**
	 * Metoda vrsi brisanje slike
	 * @param kvarId - Identifikator kvara za koji se brise slika
	 * @param slikaId - Identifikator slike koja se brise
	 * @param email - Email ulogovanog korisnika 
	 */
	void obrisiSliku(Long kvarId, Long slikaId, String email);

	/**
	 * Metoda vrsi izmenu kvara
	 * @param kvar - Kvar nad kojim se vrsi izmena
	 * @param email - Email ulogovanog korisnika
	 * @return - Kvar sa izmenjenim podacima
	 */
	Kvar izmeniKvar(Kvar kvar, String email);
	
	/**
	 * Metoda vrsi brisanje kvara
	 * @param kvarId - Identifikator kvara koji se brise
	 * @param email - Email ulogovanog korisnika
	 */
	void obrisiKvar(Long kvarId, String email);
	
	/**
	 * Metoda vrsi dodavanje komentara
	 * @param komentar - Komentar sa unapred postavljenim podacima
	 * @param kvarId - Identifikator kvara za koji se postavlja komentar
	 * @param email - Email ulogovanog korisnika
	 * @return - Komentar sa svim podacima
	 */
	Komentar noviKomentar(Komentar komentar, Long kvarId, String email);
	
	
	/**
	 * Metoda vrsi brisanje komentara
	 * @param komentarId - Identifikator komentara koji se brise
	 * @param kvarId - Identifikator kvara iz kojeg brisemo komentar
	 * @param email - Email ulogovanog korisnika
	 */
	void obrisiKomentar(Long komentarId, Long kvarId, String email);
	
	/**
	 * Metoda vrsi izmenu komentara
	 * @param komentar - Komentar sa izmenjenim podacima
	 * @param komentarId - Identifikator komentara nad kojim se vrsi izmena
	 * @param kvarId - Identifikator kvara u kojem se vrsi izmena komentara
	 * @param email - Email ulogovanog korisnika
	 * @return
	 */
	Komentar izmeniKomentar(Komentar komentar, Long komentarId, Long kvarId, String email);
	
	
	
	/**
	 * Metoda vrsi zamenu odgovornog lica
	 * @param kvarId - Identifikator kvara nad kojim se menja odgovorno lice
	 * @param odgovornoLiceId - Identifikator novog odgovornog lica
	 * @param email - Email ulogovanog korisnika
	 * @return Kvar sa izmenjenim odgovornim licem
	 */
	Kvar zameniOdgovornoLice(Long kvarId, Long odgovornoLiceId, String email);
	
	/**
	 * Metoda postavlja vreme popravke kvara
	 * @param kvarId - Identifikator popravljenog kvara
	 * @param vreme - Vreme popravke kvara
	 * @param email - Email ulogovanog korisnika
	 * @return Popravljeni kvar
	 */
	Kvar postaviVremePopravke(Long kvarId, Date vreme, String email);
	
	/**
	 * Metoda oznacava da je kvar resen
	 * @param kvarId - Identifikator popravljenog kvara
	 * @param email - Email ulogovanog korisnika
	 * @return Popravljeni kvar
	 */
	Kvar zavrsiKvar(Long kvarId, String email);
	
	/**
	 * Metoda dodaje predracun
	 * @param predracun - Predracun sa postavljenim podacima
	 * @param kvarId - Identifikator kvara za koji je postavljen predracun
	 * @param email - Email ulogovanog korisnika
	 */
	void unesiPredracun(Predracun predracun, Long kvarId, String email);
	
	/**
	 * Metoda pronalazi sve stanare zgrade, sve firme koje su dodeljene zgradi
	 * i sve institucije u sistemu
	 * @param zgradaId - Identifikator zgrade
	 * @param search - Kriterijum po kojem se pretrazuju korisnici
	 * @return - Lista svih korisnika (stanari, firme i institucije) vezanih za zgradu
	 */
	List<Korisnik> moguciOdgovorni(Long zgradaId, String search);
	
	/**
	 * Metoda dobavlja objekat slike na osnovu id-a iz repozitorijuma
	 * @param slikaId - Identifikator slike
	 * @return - objekat Slike
	 */
	Slika dobaviSliku(Long slikaId);
	
	/**
	 * Metoda pronalazi sve stanare zgrade, sve firme koje su dodeljene zgradi
	 * i sve institucije u sistemu
	 * @param zgradaId - Identifikator zgrade
	 * @param page - Objekat koji sadrzi informacije o broju strane i broju elemenata na strani
	 * @return - Lista svih komentara u kvaru
	 */
	List<Komentar> izlistajKomentare(Long kvarId);
	
	/**
	 * Metoda pronalazi sve kvarove koji su dodati od strane odgovarajuceg stanara
	 * @param email - Jedinstvena email adresa ulgovoanog stanara
	 * @param page - Objekat koji sadrzi informacije o broju strane i broju elemenata na strani
	 * @return - Lista svih kvarova vezanih za stanara
	 */
	List<Kvar> izlistajKvaroveAutora(String email, boolean gotovo);
	
	/**
	 * Metoda pronalazi sve kvarove u kojima je odgovorno lice odgovarajuci korisnik
	 * @param email - Jedinstvena email adresa ulgovoanog odgovornog lica
	 * @param page - Objekat koji sadrzi informacije o broju strane i broju elemenata na strani
	 * @return - Lista svih kvarova vezanih za odgovorno lice
	 */
	List<Kvar> izlistajKvaroveOdgovornogLica(String email, boolean gotovo);
	
	/**
	 * Metoda pronalazi sve kvarove koji su dodati u odgovarajucu zgradu
	 * @param zgradaId - Identifikator zgrade
	 * @return - Lista svih kvarova vezanih za zgradu
	 */
	List<Kvar> izlistajKvaroveZgrade(Long zgradaId, boolean gotovo);
}
