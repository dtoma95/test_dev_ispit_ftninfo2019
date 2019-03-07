package kts.nwt.repository;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;

import kts.nwt.domain.Korisnik;
import kts.nwt.domain.Kvar;
import kts.nwt.domain.Stanar;

public interface KvarRepository extends CrudRepository<Kvar, Long> {

	/**
	 * Metoda za pronalazenje kvara iz baze 
	 * @param id - Identifikator kvara
	 * @return Pronadjeni kvar
	 */
	public Kvar findById(Long id);
	
	/**
	 * Metoda za pronalazenje kvara iz baze
	 * @param id - Identifikator kvara
	 * @return Pronadjeni kvar
	 */
	public Optional<Kvar> findKvarById(Long id);
	
	
	/**
	 * Metoda za brisanje kvara iz baze
	 * @param id - Identifikator zeljenog kvara
	 */
	@Transactional
	public void deleteById(Long id);
	
	/**
	 * Metoda za pronalazenje kvarova iz baze na osnovu stanara koji ih je dodao 
	 * @param stanar - Stanar po kojem se pronalaze kvarovi
	 * @return Pronadjeni kvarovi
	 */
	public Iterable<Kvar> findByStanar(Stanar stanar);
	
	/**
	 * Metoda za pronalazenje kvarova iz baze na osnovu korisnika koji im je odgovorno lice
	 * @param ol - Odgovorno lice po kojem se pronalaze kvarovi
	 * @return Pronadjeni kvarovi
	 */
	public Iterable<Kvar> findByOdgovornoLice(Korisnik ol);
}
