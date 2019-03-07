package kts.nwt.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import kts.nwt.domain.Opcija;

@Repository
public interface OpcijaRepository extends CrudRepository<Opcija, Long> {

	/**
	 * Metoda za pronalazenje opcije u bazi
	 * @param id - Identifikator opcije
	 * @return Pronadjena opcija
	 */
	public Optional<Opcija> findOpcijaById(Long id);
	
	/**
	 * Metoda za dobavljanje svih opcija iz baze
	 */
	public List<Opcija> findAll();
}
