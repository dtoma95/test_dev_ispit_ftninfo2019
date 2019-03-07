package kts.nwt.repository;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;

import kts.nwt.domain.Firma;

public interface FirmaRepository extends CrudRepository<Firma, Long> {

	
	/**
	 * Metoda za pronalazenje firme iz baze
	 * @param firmaId - Identifikator trazene firme
	 * @return Pronadjena firma
	 */
	public Firma findById(Long firmaId);
	
	/**
	 * Metoda za pronalazenje firme iz baze
	 * @param firmaId - Identifikator trazene firme
	 * @return Pronadjena firma
	 */
	public Optional<Firma> findFirmaById(Long firmaId);
	
	/**
	 * Metoda za pronalazenje firme iz baze
	 * @param email - Email trazene firme
	 * @return Pronadjena firma
	 */
	public Firma findByEmail(String email);

	public Page<Firma> findAll(Pageable page);

}
