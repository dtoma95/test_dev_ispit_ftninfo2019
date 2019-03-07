package kts.nwt.repository;

import kts.nwt.domain.Institucija;

import org.springframework.data.repository.CrudRepository;

public interface InstitucijaRepository extends CrudRepository<Institucija, Long> {
	
	
	/**
	 * Metoda za pronalazenje institucije iz baze
	 * @param id - Identifikator trazene firme
	 * @return Pronadjena institucija
	 */
	public Institucija findById(Long id);
	
	/**
	 * Metoda za pronalazenje firme iz baze
	 * @param email - Email trazene institucije
	 * @return Pronadjena institucija
	 */
	public Institucija findByEmail(String email);
	
}
