package kts.nwt.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import kts.nwt.domain.Slika;

public interface SlikaRepository extends CrudRepository<Slika, Long> {

	/**
	 * Metoda za pronalazenje slike iz baze
	 * @param id - Identifikator slike
	 * @return Pronadjena slika
	 */
	public Slika findById(Long id);
	
	
	/**
	 * Metoda za pronalazenje slike iz baze
	 * @param id - Identifikator slike
	 * @return Pronadjena slika
	 */
	public Optional<Slika> findSlikaById(Long id);
	
}
