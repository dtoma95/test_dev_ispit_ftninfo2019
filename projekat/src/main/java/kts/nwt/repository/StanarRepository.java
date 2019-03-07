package kts.nwt.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import kts.nwt.domain.Stanar;

public interface StanarRepository extends CrudRepository<Stanar, Long> {
	
	/**
	 * Metoda za pronalazenje stanara u bazi
	 * @param id - Identifikator trazenog stanara
	 * @return Pronadjen stanar
	 */
	public Stanar findById(Long id);
	
	/**
	 * Metoda za pronalazenje stanara u bazi
	 * @param email - Email trazenog stanara
	 * @return Pronadjeni stanar
	 */
	public Stanar findByEmail(String email);
	
	/**
	 * Metoda za pronalazenje stanara u bazi
	 * @param email - Email trazenog stanara
	 * @return Pronadjeni stanar
	 */
	public Optional<Stanar> findStanarByEmail(String email);
}
