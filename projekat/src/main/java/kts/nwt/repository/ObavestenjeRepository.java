package kts.nwt.repository;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;

import kts.nwt.domain.Obavestenje;

public interface ObavestenjeRepository extends CrudRepository<Obavestenje, Long>{

	/**
	 * Metoda za pronalazenje obavestenja iz baze
	 * @param obavestenjeId - Identifikator obavestenja
	 * @return Pronadjeno obavestenje
	 */
	public Obavestenje findById(Long obavestenjeId);
	
	/**
	 * Metoda za pronalazenje obavestenja iz baze
	 * @param id - Identifikator obavestenja
	 * @return Pronadjeno obavestenje
	 */
	public Optional<Obavestenje> findObavestenjeById(Long id);

	/**
	 * MEtoda za brisanje obavestenja iz baze
	 * @param id - Identifikator obavestenja
	 */
	@Transactional
	public void deleteById(Long id);
}
