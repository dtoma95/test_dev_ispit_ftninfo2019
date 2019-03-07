package kts.nwt.controller;

import org.springframework.beans.factory.annotation.Autowired;
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

import kts.nwt.DTO.DTODodajPTDR;
import kts.nwt.DTO.DTOIzmenaPTDR;
import kts.nwt.DTO.povratni.DTOPtdrPovratni;
import kts.nwt.domain.PredlogTackeDnevnogReda;
import kts.nwt.service.PredlogTackeDnevnogRedaService;

@RestController
@RequestMapping("/api/ptdr")
public class PredlogTackeDnevnogRedaController {

	@Autowired
	private PredlogTackeDnevnogRedaService predlogTackeDnevnogRedaService;
	
	
	/**
	 * Metoda za dodavanje predloga tacke dnevnog reda
	 * endpoint: /ptdr/dodaj
	 * @param dtoPredlogTackeDnevnogReda - DTO objekat koji sadrzi tekst predloga tacke dnevnog reda
	 * @return Dodati predlog tacke dnevnog reda
	 */
	@PreAuthorize("hasAnyAuthority('STANAR, PREDSEDNIK_SKUPSTINE')")
	@RequestMapping(value = "/dodaj", 
					method = RequestMethod.POST, 
					consumes = MediaType.APPLICATION_JSON_VALUE, 
					produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> noviPredlogTackeDnevnogReda( @Validated @RequestBody DTODodajPTDR dtoPredlogTackeDnevnogReda,
			BindingResult bindingResult, Authentication authentication) {

		if (bindingResult.hasErrors()) {
			return new ResponseEntity<String>(bindingResult.getFieldError().getDefaultMessage(), HttpStatus.BAD_REQUEST);
		}
		
		PredlogTackeDnevnogReda ptdrp = new PredlogTackeDnevnogReda();
		ptdrp.setTekst(dtoPredlogTackeDnevnogReda.getTekst());

		PredlogTackeDnevnogReda ptdr = this.predlogTackeDnevnogRedaService
				.noviPredlogTackeDnevnogReda(ptdrp, authentication.getName());

		return new ResponseEntity<PredlogTackeDnevnogReda>(ptdr, HttpStatus.OK);

	}

	
	
	/**
	 * Metoda za izmenu predloga tacke dnevnog reda
	 * endpoint: /ptdr/{ptdrId}
	 * @param ptdrId - Identifikator predloga tacke dnevnog reda za izmenu
	 * @param dtoPredlogTackeDnevnogReda - DTO objekat koji sadrzi izmenjen tekst predloga
	 * tacke dnevnog reda
	 * @return Izmenjen predlog tacke dnevnog reda
	 */
	@PreAuthorize("hasAnyAuthority('STANAR, PREDSEDNIK_SKUPSTINE')")
	@RequestMapping(value = "/{ptdrId}", 
					method = RequestMethod.PUT, 
					consumes = MediaType.APPLICATION_JSON_VALUE, 
					produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> izmenaPredlogaTackeDnevnogReda(@PathVariable("ptdrId") Long ptdrId, 
			@Validated @RequestBody DTOIzmenaPTDR dtoPredlogTackeDnevnogReda, BindingResult bindingResult, Authentication authentication) {
		
		if (bindingResult.hasErrors()) {
			return new ResponseEntity<String>(bindingResult.getFieldError().getDefaultMessage(),HttpStatus.BAD_REQUEST);
		}
		
		PredlogTackeDnevnogReda ptdrp = new PredlogTackeDnevnogReda();
		ptdrp.setTekst(dtoPredlogTackeDnevnogReda.getNoviTekst());

		PredlogTackeDnevnogReda ptdr = this.predlogTackeDnevnogRedaService
				.izmenaPredlogaTackeDnevnogReda(ptdrp, ptdrId, authentication.getName());

		return new ResponseEntity<PredlogTackeDnevnogReda>(ptdr, HttpStatus.OK);
	}

	
	/**
	 * Metoda za brisanje predloga tacke dnevnog reda
	 * endpoint: /ptdr/{ptdrId}
	 * @param ptdrId - Identifikator predloga tacke dnevnog reda za brisanje
	 * @return Poruka o uspesnom brisanju predloga tacke dnevnog reda
	 */
	@PreAuthorize("hasAnyAuthority('STANAR, PREDSEDNIK_SKUPSTINE')")
	@RequestMapping(value = "/{ptdrId}", 
					method = RequestMethod.DELETE, 
					produces = MediaType.TEXT_PLAIN_VALUE)
	public ResponseEntity<?> brisanjePredlogaTackeDnevnogReda(@PathVariable("ptdrId") Long ptdrId,
			Authentication authentication) {

		this.predlogTackeDnevnogRedaService.brisanjePredlogaTackeDnevnogReda(ptdrId, authentication.getName());

		return new ResponseEntity<String>("Uspesno brisanje predloga tacke dnevnog reda!", HttpStatus.OK);

	}
	
	/**
	 * Metoda dodaje odluku u predlog tacke dnevnog reda
	 * endpoint: /ptdr/{ptdrId}/odluka
	 * @param ptdrId - Identifikator predloga tacke dnevnog reda za koji se donosi odluka
	 * @param dtoPtdr - DTO objekat koji sadrzi tekst odluke predloga tacke dnevnog reda
	 * @return DTO objekat koji sadrzi predlog tacke dnevnog reda za koji je doneta odluka
	 */
	@PreAuthorize("hasAnyAuthority('PREDSEDNIK_SKUPSTINE')")
	@RequestMapping(value = "/{ptdrId}/odluka", 
					method = RequestMethod.PUT, 
					consumes = MediaType.APPLICATION_JSON_VALUE, 
					produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> odlukaPredlogaTackeDnevnogReda(@PathVariable("ptdrId") Long ptdrId, 
			@Validated @RequestBody DTOIzmenaPTDR dtoPtdr, BindingResult bindingResult, Authentication authentication) {
		
		if (bindingResult.hasErrors()) {
			return new ResponseEntity<String>(bindingResult.getFieldError().getDefaultMessage(),HttpStatus.BAD_REQUEST);
		}

		PredlogTackeDnevnogReda ptdr = this.predlogTackeDnevnogRedaService
				.odlukaPredlogaTackeDnevnogReda(dtoPtdr.getNoviTekst(), ptdrId, authentication.getName());

		return new ResponseEntity<DTOPtdrPovratni>(DTOPtdrPovratni.konvertuj(ptdr), HttpStatus.OK);
	}

	/**
	 * Metoda koja nalazi zeljeni predlog tacke dnevnog reda
	 * endpoint: /ptdr/{id}
	 * @param ptdrId - Identifikator trazenog predloga tacke dnevnog reda 
	 * @return DTO objekat koji sadrzi nadjeni predlog tacke dnevnog reda
	 */
	@PreAuthorize("hasAnyAuthority('STANAR', 'PREDSEDNIK_SKUPSTINE', 'ADMIN', 'INSTITUCIJE', 'FIRME' )")
	@RequestMapping(
			value="/{id}",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> pregledPredlogaTackeDnevnogReda( @PathVariable("id") Long ptdrId, Authentication authentication) {
		
		PredlogTackeDnevnogReda ptdr = this.predlogTackeDnevnogRedaService.pregledPredlogaTackeDnevrnogReda
				(ptdrId, authentication.getName()); 
		DTOPtdrPovratni ptdrDTO = DTOPtdrPovratni.konvertuj(ptdr);
		
		return new ResponseEntity<DTOPtdrPovratni>(ptdrDTO, HttpStatus.OK);
	}
}
