package kts.nwt.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import kts.nwt.DTO.DTODodajObavestenje;
import kts.nwt.DTO.DTOIzmenaObavestenja;
import kts.nwt.DTO.povratni.DTOObavestenjePovratni;
import kts.nwt.domain.Obavestenje;
import kts.nwt.service.ObavestenjeService;

@RestController
@RequestMapping("/api/obavestenje")
public class ObavestenjeController {
	
	@Autowired
	private ObavestenjeService obavestenjeService;
	/**
	 * Metoda za dodavanje obavestenja
	 * endpoint: /obavestenje/dodaj
	 * @param dtoObavestenje - DTO objekat koji sadrzi tekst dodatogo obavestenja
	 * @return DTO objekat koji sadrzi informacije o dodatom obavestenju
	 */
	@PreAuthorize("hasAnyAuthority('STANAR, PREDSEDNIK_SKUPSTINE')")
	@RequestMapping(
			value = "/dodaj",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> novoObavestenje(@Validated @RequestBody DTODodajObavestenje dtoObavestenje, BindingResult bindingResult, Authentication authentication){

		if(bindingResult.hasErrors()) {
			return new ResponseEntity<String>(bindingResult.getFieldError().getDefaultMessage(), HttpStatus.BAD_REQUEST);
		}
		
		Obavestenje obavestenje = new Obavestenje();
		obavestenje.setTekst(dtoObavestenje.getTekst());
		Obavestenje o = this.obavestenjeService.novoObavestenje(obavestenje, authentication.getName());
			
		
		return new ResponseEntity<DTOObavestenjePovratni>(DTOObavestenjePovratni.konvertuj(o), HttpStatus.OK);
	
	}	
	
	
	
	/**
	 * Metoda za izmenu obavestenja
	 * endpoint: /obavestenje/{obavestenjeId}
	 * @param obavestenjeId - Identifikator obavestenja za izmenu
	 * @param dtoIzmenaObavestenja - DTO objekat koji sadrzi izmenjen tekst obavestenja
	 * @return DTO objekat koji sadrzi informacije o izmenjenom obavestenju
	 */
	@PreAuthorize("hasAnyAuthority('STANAR, PREDSEDNIK_SKUPSTINE')")
	@RequestMapping(
			value = "/{obavestenjeId}",
			method = RequestMethod.PUT,
			consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> izmenaObavestenja(@PathVariable("obavestenjeId") Long obavestenjeId, 
			@Validated @RequestBody DTOIzmenaObavestenja dtoIzmenaObavestenja, BindingResult bindingResult, Authentication authentication){
		
		if(bindingResult.hasErrors()) {
			return new ResponseEntity<String>(bindingResult.getFieldError().getDefaultMessage(), HttpStatus.BAD_REQUEST);
		}
		
		Obavestenje obavestenje = new Obavestenje();
		obavestenje.setTekst(dtoIzmenaObavestenja.getNoviTekst());
		Obavestenje o = this.obavestenjeService.izmenaObavestenja(obavestenje, obavestenjeId, authentication.getName());
		
		return new ResponseEntity<DTOObavestenjePovratni>(DTOObavestenjePovratni.konvertuj(o), HttpStatus.OK);
	}	
	
	
	/**
	 * Metoda za brisanje obavestenja
	 * endpoint: /obavestenje/{obavestenjeId}
	 * @param obavestenjeId - Identifikator obavestenja za izmenu
	 * @return Poruka o uspesnom brisanju obavestenja
	 */
	@PreAuthorize("hasAnyAuthority('STANAR, PREDSEDNIK_SKUPSTINE')")
	@RequestMapping(
			value = "/{obavestenjeId}",
			method = RequestMethod.DELETE,
			produces = MediaType.TEXT_PLAIN_VALUE)
	public ResponseEntity<?> brisanjeObavestenja(@PathVariable("obavestenjeId") Long obavestenjeId, Authentication authentication){
			
		this.obavestenjeService.brisanjeObavestenja(obavestenjeId, authentication.getName());
			
		return new ResponseEntity<String>("Uspesno brisanje obavestenja!", HttpStatus.OK);	
	}
	
	
	
	/**
	 * Metoda koja nalazi zeljeno obavestenje
	 * endpoint: /obavestenje/{id}
	 * @param obavestenjeId - Identifikator trazenog obavestenja
	 * @return DTO objekat koji sadrzi atribute pronadjenog obavestenja
	 */
	@PreAuthorize("hasAnyAuthority('STANAR', 'PREDSEDNIK_SKUPSTINE','ADMIN')")
	@RequestMapping(
			value="/{id}",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> pregledObavestenja( @PathVariable("id") Long obavestenjeId, Authentication authentication) {
		
		Obavestenje obavestenje = this.obavestenjeService.pregledObavestenja(obavestenjeId, authentication.getName());
		DTOObavestenjePovratni obavestenjeDTO = DTOObavestenjePovratni.konvertuj(obavestenje);
		
		return new ResponseEntity<DTOObavestenjePovratni>(obavestenjeDTO, HttpStatus.OK);
	}
	
	
	/**
	 * Metoda koja vraca odgovarajucu stranu obavestenja
	 * endpoint: /obavestenje/izlistajObavestenja
	 * @param page - Objekat koji sadrzi informacije o broju strane i broju elemenata na strani
	 * @return Lista DTO objekata koji sadrze informacije o obavestenjima
	 */
	@PreAuthorize("hasAnyAuthority('STANAR', 'PREDSEDNIK_SKUPSTINE','ADMIN')")
	@RequestMapping(
			value="/izlistajObavestenja",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> izlistajObavestenja( Pageable page, Authentication authentication) {
		
		List<Obavestenje> listaObavestenja = this.obavestenjeService.izlistajObavestenja(page, authentication.getName());
		List<DTOObavestenjePovratni> listaObavestenjaDTO = new ArrayList<DTOObavestenjePovratni>();
		for (Obavestenje obavestenje : listaObavestenja) {
			listaObavestenjaDTO.add(DTOObavestenjePovratni.konvertuj(obavestenje));
		}
		
		return new ResponseEntity<List<DTOObavestenjePovratni>>(listaObavestenjaDTO, HttpStatus.OK);
	}

}
