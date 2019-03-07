package kts.nwt.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import kts.nwt.domain.Stan;

public interface StanRepository extends CrudRepository<Stan, Long> {
	/**
	 * Metoda za pronalazenje stana u bazi
	 * @param id - Identifikator trazenog stana
	 * @return Pronadjeni stan
	 */
	public Stan findById(Long id);
	
	/**
	 * Metoda za pronalazenje stana u bazi
	 * @param id - Identifikator trazenog stana
	 * @return Pronadjeni stan
	 */
	public Optional<Stan> findStanById(Long id);
}
