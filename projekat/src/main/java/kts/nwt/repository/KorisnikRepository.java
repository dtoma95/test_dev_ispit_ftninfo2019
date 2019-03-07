package kts.nwt.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import kts.nwt.domain.Korisnik;

public interface KorisnikRepository extends CrudRepository<Korisnik, Long> {
	
	/**
	 * Metoda za dobavljanje svih korisnika iz baze
	 */
	public List<Korisnik> findAll();
	
	/**
	 * Metoda za pronalazenje korisnika iz baze 
	 * @param id - Identifikator korisnika
	 * @return Pronadjeni korisnik
	 */
	public Korisnik findById(Long id);
	
	/**
	 * Metoda za pronalazenje korisnika iz baze
	 * @param email - email trazenog korisnika
	 * @return Pronadjeni korisnik
	 */
	public Korisnik findByEmail(String email);
	
	
	/**
	 * Metoda za pronalazenje korisnika iz baze
	 * @param id - Identifikator trazenog korisnika
	 * @return Pronadjeni korisnik
	 */
	public Optional<Korisnik> findKorisnikById(Long id);
	
	
	/**
	 * Metoda za pronalazenje korisnika iz baze
	 * @param email - Email trazenog korisnika
	 * @return Pronadjeni korisnik
	 */
	public Optional<Korisnik> findKorisnikByEmail(String email);
	
	
	/**
	 * Metoda za brisanje korisnika iz baze
	 */
	public void delete(Korisnik korisnik);
	
    /**
     * Metoda za brisanje korisnika iz baze
     */
	public void delete(Long id);
}
