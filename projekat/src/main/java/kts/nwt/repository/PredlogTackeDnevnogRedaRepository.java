package kts.nwt.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import kts.nwt.domain.PredlogTackeDnevnogReda;

public interface PredlogTackeDnevnogRedaRepository  extends CrudRepository<PredlogTackeDnevnogReda, Long> {

	/**
	 * Metoda za pronalazenje predloga tacke dnevnog reda u bazi
	 * @param predlogTackeDnevnogRedaId - Identifikator predloga tacke dnevnog reda
	 * @return Pronadjeni predlog tacke dnevnog reda
	 */
	PredlogTackeDnevnogReda findById(Long predlogTackeDnevnogRedaId);
	
	/**
	 * Metoda za pronalazenje predloga tacke dnevnog reda u bazi
	 * @param predlogTackeDnevnogRedaId - Identifikator predloga tacke dnevnog reda
	 * @return Pronadjeni predlog tacke dnevnog reda
	 */
	public Optional<PredlogTackeDnevnogReda> findPtdrById(Long predlogTackeDnevnogRedaId);

	/**
	 * Metoda za brisanje predloga tacke dnevnog reda
	 * @param ptdrId - Identifikator predloga tacke dnevnog reda
	 */
	void deleteById(Long ptdrId);

}
