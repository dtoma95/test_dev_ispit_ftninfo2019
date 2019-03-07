package kts.nwt.controller;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.support.PagedListHolder;
import org.springframework.data.domain.Pageable;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import kts.nwt.DTO.DTOSkupstina;
import kts.nwt.DTO.povratni.DTOPtdrPovratni;
import kts.nwt.DTO.povratni.DTOSkupstinaPovratni;
import kts.nwt.domain.Kriterijum;
import kts.nwt.domain.PredlogTackeDnevnogReda;
import kts.nwt.domain.Skupstina;
import kts.nwt.service.SkupstinaService;

@RestController
@RequestMapping("/api")
public class SkupstinaController {

	@Autowired
	SkupstinaService skupstinaService;
	
	
	/**
	 * Metoda za dodavanje skupstine
	 * endpoint: /skupstina/dodaj
	 * @param skdto - DTO objekat koji sadrzi informacije o skupstini za dodavanje, 
	 * a to su identifikator zgrade, identifikator skupstine, pocetak i kraj skupstine
	 * @return DTO objekat koji sadrzi dodatu skupstinu
	 */
	@PreAuthorize("hasAnyAuthority('PREDSEDNIK_SKUPSTINE')")
	@RequestMapping(
			value="/skupstina/dodaj",
			method = RequestMethod.POST,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> dodajSkupstinu( @Validated @RequestBody DTOSkupstina skdto, Authentication authentication) {
		
		Skupstina sk = this.skupstinaService.dodajSkupstinu(DTOSkupstina.toSkupstina(skdto), authentication.getName());
		
		return new ResponseEntity<DTOSkupstinaPovratni>(DTOSkupstinaPovratni.konvertuj(sk), HttpStatus.OK);
	}
	
	
	/**
	 * Metoda za izmenu skupstine
	 * endpoint: /skupstina/{skupstinaId}
	 * @param skupstinaId - Identifikator skupstine za izmenu
	 * @param skdto - DTO objekat koji sadrzi atribute koji se menjaju u skupstini
	 * @return DTO objekat koji sadrzi izmenjenu skupstinu
	 */
	@PreAuthorize("hasAnyAuthority('PREDSEDNIK_SKUPSTINE')")
	@RequestMapping(
			value="/skupstina/{skupstinaId}",
			method = RequestMethod.PUT,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> izmeniSkupstinu( @PathVariable("skupstinaId") Long skupstinaId,
			@Validated @RequestBody DTOSkupstina skdto, Authentication authentication) {
		
		skdto.setSkupstinaId(skupstinaId);
		
		Skupstina sk = this.skupstinaService.izmeniSkupstinu(DTOSkupstina.toSkupstina(skdto),
				authentication.getName());
		
		return new ResponseEntity<DTOSkupstinaPovratni>(DTOSkupstinaPovratni.konvertuj(sk), HttpStatus.OK);
	}
	
	
	/**
	 * Metoda za brisanje skupstine
	 * endpoint: /skupstina/{skupstinaId}
	 * @param skupstinaId - Identifikator skupstine za brisanje
	 * @return Poruka o uspesnom brisanju skupstine
	 */
	@PreAuthorize("hasAnyAuthority('PREDSEDNIK_SKUPSTINE')")
	@RequestMapping(
			value="/skupstina/{skupstinaId}",
			method = RequestMethod.DELETE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> obrisiSkupstinu( @PathVariable("skupstinaId") Long skupstinaId, Authentication authentication) {
		
		this.skupstinaService.obrisiSkupstinu(skupstinaId , authentication.getName());
		
		return new ResponseEntity<String>("Skupstina je uspesno obrisana!", HttpStatus.OK);
	}	
	
	
	//IZMENA POVRATNE VREDNOSTI
	/**
	 * Metoda za dodavanje predloga tacke dnevnog reda u skupstinu
	 * endpoint: /skupstina/{skupstinaId}/ptdr/{ptdrId}/dodaj
	 * @param skupstinaId - Identifikator skupstine kojoj se dodaje predlog tacke dnevnog reda
	 * @param ptdrId - Identifikator predloga tacke dnevnog reda koji se dodaje u skupstinu
	 * @return DTO objekat koji sadrzi predlog tacke dnevnog reda koji je dodat u skupstinu
	 */
	@PreAuthorize("hasAnyAuthority('PREDSEDNIK_SKUPSTINE')")
	@RequestMapping(
			value="/skupstina/{skupstinaId}/ptdr/{ptdrId}/dodaj",
			method = RequestMethod.PUT,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> dodajPtdr( @PathVariable("skupstinaId") Long skupstinaId,
			@PathVariable("ptdrId") Long ptdrId, Authentication authentication) {
		
		PredlogTackeDnevnogReda ptdr = this.skupstinaService.dodajPtdr(skupstinaId, ptdrId, authentication.getName());
		
		return new ResponseEntity<DTOPtdrPovratni>(DTOPtdrPovratni.konvertuj(ptdr), HttpStatus.OK);
	}	
	
	
	/**
	 * Metoda za uklanjanje predloga tacke dnevnog reda iz skupstine
	 * endpoint: /skupstina/{skupstinaId}/ptdr/{ptdrId}/ukloni
	 * @param skupstinaId - Identifikator skupstine iz koje se uklanja predlog tacke dnevnog reda
	 * @param ptdrId - Identifikator predloga tacke dnevnog reda koji se uklanja iz skupstine
	 * @return DTO objekat koji sadrzi uklonjeni predlog tacke dnevnog reda
	 */
	@PreAuthorize("hasAnyAuthority('PREDSEDNIK_SKUPSTINE')")
	@RequestMapping(
			value="/skupstina/{skupstinaId}/ptdr/{ptdrId}/ukloni",
			method = RequestMethod.PUT,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?>  ukloniPtdr( @PathVariable("skupstinaId") Long skupstinaId,
			@PathVariable("ptdrId") Long ptdrId, Authentication authentication) {
		
		PredlogTackeDnevnogReda ptdr = this.skupstinaService.ukloniPtdr(skupstinaId, ptdrId, authentication.getName());
		
		return new ResponseEntity<DTOPtdrPovratni>(DTOPtdrPovratni.konvertuj(ptdr), HttpStatus.OK);
	}	

	
	/**
	 * Metoda kojom se dobovalja skupstina sa trazenim identifikatorom
	 * endpoint: /skupstina/{id}
	 * @param skupstinaId - Identifikator trazene skupstine
	 * @return DTO objekat koji sadrzi pronadjenu skupstinu
	 */
	@PreAuthorize("hasAnyAuthority('STANAR', 'PREDSEDNIK_SKUPSTINE', 'ADMIN', 'FIRMA', 'INSTITUCIJA')")
	@RequestMapping(
			value="/skupstina/{id}",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> pregledSkupstine( @PathVariable("id") Long skupstinaId, Authentication authentication) {
		
		Skupstina skupstina = this.skupstinaService.pregledSkupstine(skupstinaId, authentication.getName());
		DTOSkupstinaPovratni skupstinaDTO = DTOSkupstinaPovratni.konvertuj(skupstina);
		
		return new ResponseEntity<DTOSkupstinaPovratni>(skupstinaDTO, HttpStatus.OK);
	}
	
	// ISO.DATE ima format "YYYY-MM-DD"
	/**
	 * Metoda koja vraca odgovarajucu stranu skupstina stanara
	 * endpoint: /zgrada/{id}/skupstine
	 * @param page - Objekat koji sadrzi informacije o broju strane i broju elemenata na strani
	 * @param zgradaId - Identifikator zgrade u kojoj se vrsi pretraga 
	 * @param OD - Pocetni datum pretrage
	 * @param DO - Krajnji datum pretrage
	 * @return Lista DTO objekata koji sadrze pronadjene skupstine
	 */
	@PreAuthorize("hasAnyAuthority('STANAR', 'PREDSEDNIK_SKUPSTINE', 'ADMIN', 'FIRMA', 'INSTITUCIJA')")
	@RequestMapping(
			value="/zgrada/{id}/skupstine",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> izlistajSkupstine(Pageable page, 
			@PathVariable("id") Long zgradaId,
			@RequestParam(value="od", required=false) @DateTimeFormat(iso=ISO.DATE) Date OD,
			@RequestParam(value="do", required=false) @DateTimeFormat(iso=ISO.DATE) Date DO,
			@RequestParam(value="krit", required=false) Integer krit,
			Authentication authentication) {
		
		if(krit == null)
			krit = null;
		else if(krit.equals(1))
			OD = new Date();
		else if (krit.equals(2))
			DO = new Date();
		else if (krit.equals(3)){
			OD = new Date();
			DO = OD;
		}
		
		Kriterijum kriterijum = new Kriterijum(zgradaId, OD, DO);
		List<Skupstina> skupstine = 
				this.skupstinaService.izlistajSkupstine(kriterijum, authentication.getName());
		
		Collections.reverse(skupstine);
		PagedListHolder<Skupstina> holder = new PagedListHolder<>(skupstine);
		holder.setPage(page.getPageNumber());
		holder.setPageSize(page.getPageSize());
		
		List<DTOSkupstinaPovratni> skupstineDTO = new ArrayList<DTOSkupstinaPovratni>();
		for (Skupstina skupstina : holder.getPageList()){
			skupstineDTO.add(DTOSkupstinaPovratni.konvertuj(skupstina));
		}
		
		//Postavljanje headera
		HttpHeaders headers = new HttpHeaders();
		headers.add("X-ukupno-strana", Integer.toString(holder.getPageCount()));
		
		return new ResponseEntity<List<DTOSkupstinaPovratni>>(skupstineDTO, headers, HttpStatus.OK);
	}
	
	/**
	 * Metoda koja vraca odgovaraju stranu predloga tacaka dnevnog reda za odredjenu skupstinu
	 * endpoint: /skupstina/{id}/ptdri
	 * @param skupstinaId - Identifikator skupstine iz koje se traze predlozi tacke dnevnog reda
	 * @param page - Objekat koji sadrzi informacije o broju strane i broju elemenata na strani
	 * @return Lista DTO objekata od kojih svaki sadrzi pronadjeni predlog tacke dnevnog reda
	 */
	@PreAuthorize("hasAnyAuthority('STANAR', 'PREDSEDNIK_SKUPSTINE', 'ADMIN', 'FIRMA', 'INSTITUCIJA')")
	@RequestMapping(
			value="/skupstina/{id}/ptdri",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> izlistajPredlogeTacaka( @PathVariable("id") Long skupstinaId, 
			Pageable page, Authentication authentication) {
		
		List<PredlogTackeDnevnogReda> ptdr =
				this.skupstinaService.izlistajPredlogeTacaka(skupstinaId, authentication.getName());
		
		PagedListHolder<PredlogTackeDnevnogReda> holder = new PagedListHolder<>(ptdr);
		holder.setPage(page.getPageNumber());
		holder.setPageSize(page.getPageSize());
		
		List<DTOPtdrPovratni> ptdrDTO  = new ArrayList<DTOPtdrPovratni>();
		for (PredlogTackeDnevnogReda p : holder.getPageList()){
			ptdrDTO.add(DTOPtdrPovratni.konvertuj(p));
		}
		
		//Postavljanje headera
		HttpHeaders headers = new HttpHeaders();
		headers.add("X-ukupno-strana", Integer.toString(holder.getPageCount()));
		
		return new ResponseEntity<List<DTOPtdrPovratni>>(ptdrDTO, headers, HttpStatus.OK);
	}
	
}
