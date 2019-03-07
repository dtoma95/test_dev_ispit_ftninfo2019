package kts.nwt.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import kts.nwt.domain.Komentar;

public interface KomentarRepository extends CrudRepository<Komentar, Long> {
	/**
	 * Metoda za pronalazenje komentara iz baze
	 * @param id - Identifikator komentara
	 * @return Pronadjeni komentar
	 */
	public Optional<Komentar> findKomentarById(Long id);

}
