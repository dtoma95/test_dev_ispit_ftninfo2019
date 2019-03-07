package kts.nwt.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import kts.nwt.domain.Skupstina;


public interface SkupstinaRepository  extends CrudRepository<Skupstina, Long>{

	/**
	 * Metoda za pronalazenje skupstine iz baze
	 * @param id - Identifikator skupstine
	 * @return Pronadjena skupstina
	 */
	public Skupstina findById(Long id);
	
	/**
	 * Metoda za pronalazenje skupstine iz baze
	 * @param id - Identifikator skupstine
	 * @return Pronadjena skupstina
	 */
	public Optional<Skupstina> findSkupstinaById(Long id);
}
