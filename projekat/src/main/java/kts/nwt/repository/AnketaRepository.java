package kts.nwt.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import kts.nwt.domain.Pitanje;

@Repository
public interface AnketaRepository extends CrudRepository<Pitanje, Long> {
	/**
	 * metoda za pronalazenje ankete u bazi
	 * @param anketaId - Identifikator trazene ankete
	 * @return Pronadjena anketa
	 */
	public Pitanje findById(Long anketaId);
	
	/**
	 * metoda za pronalazenje ankete u bazi 
	 * @param anketaId - Identifikator trazene ankete
	 * @return Pronadjena anketa
	 */
	public Optional<Pitanje> findAnketaById(Long anketaId);
	
	/**
	 * Metoda za vracanje svih anketa iz baze
	 */
	public List<Pitanje> findAll();

}
