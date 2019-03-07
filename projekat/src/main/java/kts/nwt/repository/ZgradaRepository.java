package kts.nwt.repository;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import kts.nwt.domain.Zgrada;

public interface ZgradaRepository extends CrudRepository<Zgrada, Long> {
	/**
	 * Metoda za pronalazenje zgrade u bazi
	 * @param id - Identifikator trazene zgrade
	 * @return Pronadjenja zgrada
	 */
	public Zgrada findById(Long id);
	
	/**
	 * Metoda za pronalazenje zgrade u bazi
	 * @param id - Identifikator trazene zgrade 
	 * @return Pronadjena zgrada
	 */
	public Optional<Zgrada> findZgradaById(Long id);
	
	/**
	 * Metoda za ponalazenje zgrada u odredjenoj ulici
	 * @param ulica - Ulica u kojoj se trazene zgrade nalaze
	 * @return Pronadjene zgrade
	 */
	public List<Zgrada> findByUlicaIgnoreCase(String ulica);
	
	/**
	 * Metoda za brisanje zgrade iz baze
	 * @param id - Identifikator zgrade za brisanje
	 */
	@Transactional
	public void deleteById(Long id);

	/**
	 * Metoda za pronalazenje svih zgrada u bazi
	 * @param page - Objekat koji sadrzi informacije o broju strane i broju elemenata na strani
	 * @return - Lista svih zgrada u bazi podeljena po stranicama
	 */
	public Page<Zgrada> findAll(Pageable page);
	
	/**
	 * Metoda za pronalazenje svih zgrada u bazi koje se nalaze u trazenom mestu
	 * @param mesto - Mesto ili jedan deo naziva mesta u kojem se zgrade traze
	 * @param pageable - Objekat koji sadrzi informacije o broju strane i broju elemenata na strani
	 * @return - Lista svih zgrada u bazi koje se nalaze u trazenom mestu podeljena po stranicama 
	 */
	@Query(value = "SELECT z FROM Zgrada z WHERE UPPER(z.lokacija) LIKE CONCAT('%',UPPER(:mesto),'%')",
			countQuery = "SELECT COUNT(z) FROM Zgrada z WHERE UPPER(z.lokacija) LIKE CONCAT('%',UPPER(:mesto),'%')")
	public Page<Zgrada> findByLokacijaSearch(@Param("mesto") String mesto, Pageable pageable);

	/**
	 * Metoda za pronalazenje svih zgrada u bazi koje se nalaze u trazenoj ulici i/ili broju
	 * @param ulicaBroj - Ulica i/ili broj zgrade u kojima se zgrade traze
	 * @param pageable - Objekat koji sadrzi informacije o broju strane i broju elemenata na strani
	 * @return - Lista svih zgrada u bazi koje se nalaze u trazenoj ulici i/ili broju podeljena po stranicama 
	 */
	@Query(value = "SELECT z FROM Zgrada z WHERE CONCAT(UPPER(z.ulica), ' ', z.broj)  LIKE CONCAT('%',UPPER(:ulicaBroj),'%')",
			countQuery = "SELECT COUNT(z) FROM Zgrada z WHERE CONCAT(UPPER(z.ulica), '%', z.broj) LIKE CONCAT('%',UPPER(:ulicaBroj),'%')")
	public Page<Zgrada> findByUlicaSearch(@Param("ulicaBroj") String ulicaBroj, Pageable pageable);

	/**
	 * Metoda za pronalazenje svih zgrada u bazi koje se nalaze u trazenoj ulici i/ili broju i trazenom mestu
	 * @param mesto - Mesto ili jedan deo naziva mesta u kojem se zgrade traze
	 * @param ulicaBroj - Ulica i/ili broj zgrade u kojima se zgrade traze
	 * @param pageable - Objekat koji sadrzi informacije o broju strane i broju elemenata na strani
	 * @return  Lista svih zgrada u bazi koje se nalaze u trazenoj ulici i/ili broju i trazenom mestu podeljena po stranicama
	 */
	@Query(value = "SELECT z FROM Zgrada z WHERE UPPER(z.lokacija) LIKE CONCAT('%',UPPER(:mesto),'%') "
			+ "AND CONCAT(UPPER(z.ulica), ' ', z.broj)  LIKE CONCAT('%',UPPER(:ulicaBroj),'%')",
			countQuery = "SELECT COUNT(z) FROM Zgrada z WHERE UPPER(z.lokacija) LIKE CONCAT('%',UPPER(:mesto),'%') "
					+ "AND CONCAT(UPPER(z.ulica), ' ', z.broj)  LIKE CONCAT('%',UPPER(:ulicaBroj),'%')")
	public Page<Zgrada> findByLokacijaAndUlicaSearch(@Param("mesto") String mesto, @Param("ulicaBroj") String ulicaBroj,
			Pageable pageable);
}
