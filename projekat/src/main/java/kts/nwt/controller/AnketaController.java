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
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import kts.nwt.DTO.DTODodajPitanje;
import kts.nwt.DTO.DTOFirmaOpcija;
import kts.nwt.DTO.DTOGlas;
import kts.nwt.DTO.DTOIzmeniPitanje;
import kts.nwt.DTO.DTOObicnaOpcija;
import kts.nwt.DTO.DTOOpcija;
import kts.nwt.DTO.DTOStanarOpcija;
import kts.nwt.DTO.povratni.DTOPitanjePovratni;
import kts.nwt.DTO.povratni.DTOOpcijaPovratni;
import kts.nwt.DTO.povratni.DTOStanPovratni;
import kts.nwt.domain.Pitanje;
import kts.nwt.domain.Firma;
import kts.nwt.domain.FirmaOpcija;
import kts.nwt.domain.Opcija;
import kts.nwt.domain.Stan;
import kts.nwt.domain.Stanar;
import kts.nwt.domain.StanarOpcija;
import kts.nwt.domain.VrstaPitanja;
import kts.nwt.exceptions.BadRequestException;
import kts.nwt.service.AnketaService;
import kts.nwt.service.FirmaService;
import kts.nwt.service.StanarService;

@RestController
@RequestMapping("/api")
public class AnketaController {

	@Autowired
	private AnketaService anketaService;
	
	@Autowired
	private StanarService stanarService;
	
	@Autowired
	private FirmaService firmaService;
	
	/**
	 * Metoda za dodavanje pitanja u anketu
	 * endpoint: /ptdr/{ptdrId}/anketa/dodajPitanje
	 * @param ptdrId - Identifikator predloga tacke dnevnog reda u ciju anketu se dodaje pitanje
	 * @param dtoPitanje - DTO objekat koji sadrzi informacije o pitanju koje se dodaje,
	 * a to su tekst, vrsta pitanja i opcije
	 * @return DTO objekat sa informacijama o dodatom pitanju
	 */
	@PreAuthorize("hasAnyAuthority('STANAR, PREDSEDNIK_SKUPSTINE')")
	@RequestMapping(
			value="/ptdr/{ptdrId}/anketa/dodajPitanje",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> dodajPitanje(@PathVariable("ptdrId") Long ptdrId, @Validated @RequestBody DTODodajPitanje dtoPitanje,
			BindingResult bindingResult, Authentication authentication) {	
		
		if(bindingResult.hasErrors()) {
			return new ResponseEntity<String>(bindingResult.getFieldError().getDefaultMessage(), HttpStatus.BAD_REQUEST);
		}
		
		Pitanje pitanje = new Pitanje();
		pitanje.setTekst(dtoPitanje.getTekst());
		pitanje.setVrstaPitanja(dtoPitanje.getVrstaPitanja());
		
		if (pitanje.getVrstaPitanja() == VrstaPitanja.OBICNO_PITANJE) {
			
			for (int i = 0; i < dtoPitanje.getOpcije().size(); i++) {
				if (!(dtoPitanje.getOpcije().get(i) instanceof DTOObicnaOpcija)) {
					throw new BadRequestException("Opcija nije odgovarajuceg tipa!");
				}
				
				DTOObicnaOpcija obicnaOpcija = (DTOObicnaOpcija)dtoPitanje.getOpcije().get(i);
				
				Opcija op = new Opcija();
				op.setPitanje(pitanje);
				op.setTekst(obicnaOpcija.getTekst());
				
				pitanje.getOpcije().add(op);
			}		
		} else if (pitanje.getVrstaPitanja() == VrstaPitanja.STANAR_PITANJE) {
			
			for (int i = 0; i<dtoPitanje.getOpcije().size(); i++) {
				if (!(dtoPitanje.getOpcije().get(i) instanceof DTOStanarOpcija)) {
					throw new BadRequestException("Opcija nije odgovarajuceg tipa!");
				}
				
				DTOStanarOpcija op = (DTOStanarOpcija)dtoPitanje.getOpcije().get(i);
				
				Stanar s = this.stanarService.findOne(op.getEmail());
				
				if (s.getStan() == null) {
					throw new BadRequestException("Stanaru nije dodeljen stan!");
				}
				
				StanarOpcija so = new StanarOpcija();
				so.setPitanje(pitanje);
				so.setTekst(op.getTekst());
				so.setStanar(s);
				
				pitanje.getOpcije().add(so);
			}
		} else if (pitanje.getVrstaPitanja() == VrstaPitanja.FIRMA_PITANJE) {
			
			for (int i = 0; i < dtoPitanje.getOpcije().size(); i++) {
				if (!(dtoPitanje.getOpcije().get(i) instanceof DTOFirmaOpcija)) {
					throw new BadRequestException("Opcija nije odgovarajuceg tipa!");
				}
				
				DTOFirmaOpcija op = (DTOFirmaOpcija)dtoPitanje.getOpcije().get(i);
				
				Firma f = this.firmaService.findOne(op.getFirmaId());
				
				FirmaOpcija fo = new FirmaOpcija();
				fo.setPitanje(pitanje);
				fo.setTekst(op.getTekst());
				fo.setFirma(f);
				
				pitanje.getOpcije().add(fo);
			}
			
		} else {
			throw new BadRequestException("Neodgovarajuca vrsta ankete!");
		}
		
		Pitanje a = this.anketaService.dodajPitanjeUAnketu(pitanje, authentication.getName(), ptdrId);
			
		return new ResponseEntity<DTOPitanjePovratni>(DTOPitanjePovratni.konvertuj(a), HttpStatus.OK);	
	}
	
	
	/**
	 * Metoda za dodavanje opcija pitanju
	 * endpoint: /anketa/{pitanjeId}/opcija/dodaj
	 * @param pitanjeId - Identifikator pitanja kojoj se dodeljuje opcija
	 * @param dtoOpcija - DTO objekat sa informacijama o opciji
	 * @return DTO objekat sa informacijama o opciji koja je dodata u pitanje
	 */
	@PreAuthorize("hasAnyAuthority('STANAR, PREDSEDNIK_SKUPSTINE')")
	@RequestMapping(
			value="/anketa/{pitanjeId}/opcija/dodaj",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> dodajOpcijuUPitanje(@PathVariable("pitanjeId") Long pitanjeId, @Validated @RequestBody DTOOpcija dtoOpcija, 
			BindingResult bindingResult, Authentication authentication) {	
		
		if(bindingResult.hasErrors()) {
			return new ResponseEntity<String>(bindingResult.getFieldError().getDefaultMessage(), HttpStatus.BAD_REQUEST);
		}
		
		if (dtoOpcija instanceof DTOObicnaOpcija) {		
			Opcija opcija = new Opcija();
			opcija.setTekst(((DTOObicnaOpcija) dtoOpcija).getTekst());
			
			Opcija o = this.anketaService.dodajOpciju(opcija, authentication.getName(), pitanjeId);
			
			return new ResponseEntity<DTOOpcijaPovratni>(DTOOpcijaPovratni.konvertuj(o), HttpStatus.OK);
			
		} else if (dtoOpcija instanceof DTOStanarOpcija) {			
			Stanar s = this.stanarService.findOne(((DTOStanarOpcija) dtoOpcija).getEmail());
			
			if (s.getStan() == null) {
				throw new BadRequestException("Stanaru nije dodeljen stan!");
			}
			
			StanarOpcija opcija = new StanarOpcija();
			opcija.setTekst(((DTOStanarOpcija) dtoOpcija).getTekst());
			opcija.setStanar(s);
	
			Opcija o = this.anketaService.dodajOpciju(opcija, authentication.getName(), pitanjeId);
			
			return new ResponseEntity<DTOOpcijaPovratni>(DTOOpcijaPovratni.konvertuj(o), HttpStatus.OK);
		} else {
			Firma f = this.firmaService.findOne(((DTOFirmaOpcija) dtoOpcija).getFirmaId());
			
			FirmaOpcija opcija = new FirmaOpcija();
			opcija.setTekst(((DTOFirmaOpcija) dtoOpcija).getTekst());
			opcija.setFirma(f);
			
			Opcija o = this.anketaService.dodajOpciju(opcija, authentication.getName(), pitanjeId);
			
			return new ResponseEntity<DTOOpcijaPovratni>(DTOOpcijaPovratni.konvertuj(o), HttpStatus.OK);
		}
	}
	
	/**
	 * Metoda za izmenu opcije u pitanju
	 * endpoint: /anketa/{pitanjeId}/opcija/{opcijaId}
	 * @param pitanjeId - Identifikator pitanja u kojoj se menja opcija
	 * @param opcijaId - Identifikator opcije u kojoj se vrsi izmena
	 * @param dtoOpcija DTO objekat sa informacijama o opciji
	 * @return DTO objekat sa izmenjenim informacijama o opciji
	 */
	@PreAuthorize("hasAnyAuthority('STANAR, PREDSEDNIK_SKUPSTINE')")
	@RequestMapping(
			value="/anketa/{pitanjeId}/opcija/{opcijaId}",
			method = RequestMethod.PUT,
			consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> izmeniOpcijuPitanja(@PathVariable("pitanjeId") Long pitanjeId, @PathVariable("opcijaId") Long opcijaId, 
			@Validated @RequestBody DTOOpcija dtoOpcija, BindingResult bindingResult, Authentication authentication) {	
		
		if(bindingResult.hasErrors()) {
			return new ResponseEntity<String>(bindingResult.getFieldError().getDefaultMessage(), HttpStatus.BAD_REQUEST);
		}
		
		if (dtoOpcija instanceof DTOObicnaOpcija) {		
			Opcija opcija = new Opcija();
			opcija.setTekst(((DTOObicnaOpcija) dtoOpcija).getTekst());
			
			Opcija o = this.anketaService.izmeniOpciju(opcija, authentication.getName(), pitanjeId, opcijaId);
			
			return new ResponseEntity<DTOOpcijaPovratni>(DTOOpcijaPovratni.konvertuj(o), HttpStatus.OK);
			
		} else if (dtoOpcija instanceof DTOStanarOpcija) {			
			Stanar s = this.stanarService.findOne(((DTOStanarOpcija) dtoOpcija).getEmail());
			
			if (s.getStan() == null) {
				throw new BadRequestException("Stanaru nije dodeljen stan!");
			}
			
			StanarOpcija opcija = new StanarOpcija();
			opcija.setTekst(((DTOStanarOpcija) dtoOpcija).getTekst());
			opcija.setStanar(s);
	
			Opcija o = this.anketaService.izmeniOpciju(opcija, authentication.getName(), pitanjeId, opcijaId);
			
			return new ResponseEntity<DTOOpcijaPovratni>(DTOOpcijaPovratni.konvertuj(o), HttpStatus.OK);
		} else {
			Firma f = this.firmaService.findOne(((DTOFirmaOpcija) dtoOpcija).getFirmaId());
			
			FirmaOpcija opcija = new FirmaOpcija();
			opcija.setTekst(((DTOFirmaOpcija) dtoOpcija).getTekst());
			opcija.setFirma(f);
			
			Opcija o = this.anketaService.izmeniOpciju(opcija, authentication.getName(), pitanjeId, opcijaId);
			
			return new ResponseEntity<DTOOpcijaPovratni>(DTOOpcijaPovratni.konvertuj(o), HttpStatus.OK);
		}
	}
	
	
	/**
	 * Metoda za brisanje opcije iz pitanja
	 * endpoint: /anketa/{pitanjeId}/opcija/{opcijaId}
	 * @param pitanjeId - Identifikator pitanja iz koje se brise opcija
	 * @param opcijaId - Identifikator opcije koja se brise iz ankete
	 * @return Poruka o uspesnom brisanju opcije
	 */
	@PreAuthorize("hasAnyAuthority('STANAR, PREDSEDNIK_SKUPSTINE')")
	@RequestMapping(
			value="/anketa/{pitanjeId}/opcija/{opcijaId}",
			method = RequestMethod.DELETE,
			produces = MediaType.TEXT_PLAIN_VALUE)
	public ResponseEntity<?> izbrisiOpcijuPitanja(@PathVariable("pitanjeId") Long pitanjeId, 
			@PathVariable("opcijaId") Long opcijaId, Authentication authentication) {	
		
		this.anketaService.izbrisiOpciju(authentication.getName(), pitanjeId, opcijaId);
			
		return new ResponseEntity<String>("Uspesno brisanje opcije iz ankete!", HttpStatus.OK);	
	}
	
	
	/**
	 * Metoda za izmenu pitanja u anketi 
	 * endpoint: /ptdr/{ptdrId}/anketa/{pitanjeId}
	 * @param ptdrId - Identifikator predloga tacke dnevnog reda u cijoj anketi se menja pitanje
	 * @param pitanjeId - Identifikator pitanja koje se menja
	 * @param dtoPitanje - DTO objekat koji sadrzi novi tekst pitanja
	 * @return DTO objekat sa izmenjenim pitanjem
	 */
	@PreAuthorize("hasAnyAuthority('STANAR, PREDSEDNIK_SKUPSTINE')")
	@RequestMapping(
			value="/ptdr/{ptdrId}/anketa/{pitanjeId}",
			method = RequestMethod.PUT,
			consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> izmeniPitanjeUAnketi(@PathVariable("ptdrId") Long ptdrId, @PathVariable("pitanjeId") Long pitanjeId, 
			@Validated @RequestBody DTOIzmeniPitanje dtoPitanje, BindingResult bindingResult, Authentication authentication) {	
		
		if(bindingResult.hasErrors()) {
			return new ResponseEntity<String>(bindingResult.getFieldError().getDefaultMessage(), HttpStatus.BAD_REQUEST);
		}
		
		Pitanje pitanje = new Pitanje();
		pitanje.setTekst(dtoPitanje.getTekst());
		
		Pitanje p = this.anketaService.izmeniPitanjeIzAnkete(pitanje, authentication.getName(), ptdrId, pitanjeId);
			
		return new ResponseEntity<DTOPitanjePovratni>(DTOPitanjePovratni.konvertuj(p), HttpStatus.OK);	
	}
	
	
	/**
	 * Metoda za brisanje pitanja iz ankete
	 * endpoint: /ptdr/{ptdrId}/anketa/{pitanjeId}
	 * @param ptdrId - Identifikator tacke dnevnog reda iz cije ankete se brisePitanje
	 * @param pitanjeId - Identifikator pitanja koja se brise iz ankete iz predloga tacke dnevnog reda
	 * @return Poruka o uspesnom brisanju pitanja
	 */
	@PreAuthorize("hasAnyAuthority('STANAR, PREDSEDNIK_SKUPSTINE')")
	@RequestMapping(
			value="/ptdr/{ptdrId}/anketa/{pitanjeId}",
			method = RequestMethod.DELETE,
			produces = MediaType.TEXT_PLAIN_VALUE)
	public ResponseEntity<?> izbrisiAnketu(@PathVariable("ptdrId") Long ptdrId, @PathVariable("pitanjeId") Long pitanjeId, Authentication authentication) {	
		
		this.anketaService.izbrisiPitanjeIzAnkete(authentication.getName(), ptdrId, pitanjeId);
			
		return new ResponseEntity<String>("Uspesno brisanje ankete!", HttpStatus.OK);	
	}
	
	/**
	 * Metoda koja sluzi za glasanje korisnika u anketi
	 * endpoint: /anketa/{pitanjeId}/glasaj
	 * @param pitanjeId - Identifikator pitanja na koje se glasa
	 * @param dtoGlas - DTO objekat koji sadrzi informacije o glasanju,
	 * a to su identifikator stana iz kog se glasa i identifikator opcije za koju se glasa
	 * @return DTO objekat sa informacijama o stanu koji je glasao
	 */
	@PreAuthorize("hasAnyAuthority('STANAR, PREDSEDNIK_SKUPSTINE')")
	@RequestMapping(
			value="/anketa/{pitanjeId}/glasaj",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> glasajNaPitanje(@PathVariable("pitanjeId") Long pitanjeId, @Validated @RequestBody DTOGlas dtoGlas,
			BindingResult bindingResult, Authentication authentication) {	
		
		if(bindingResult.hasErrors()) {
			return new ResponseEntity<String>(bindingResult.getFieldError().getDefaultMessage(), HttpStatus.BAD_REQUEST);
		}
		
		Stan stan = this.anketaService.glasaj(authentication.getName(), pitanjeId, dtoGlas.getStanId(), dtoGlas.getOpcijaId());
		
		return new ResponseEntity<DTOStanPovratni>(DTOStanPovratni.konvertuj(stan), HttpStatus.OK);
	}
	
	
	/**
	 * Metoda za uklanjanje glasa sa pitanja
	 * endpoint: /anketa/{pitanjeId}/ukloniGlas
	 * @param pitanjeId - Identifikator pitanja sa kojeg se uklanja glas
	 * @param dtoGlas - DTO objekat koji sadrzi informacije o glasanju,
	 * a to su identifikator stana iz kog se glasa i identifikator opcije za koju se glasa
	 * @return Poruka o uspesnom uklanjanju glasa sa pitanja
	 */
	@PreAuthorize("hasAnyAuthority('STANAR, PREDSEDNIK_SKUPSTINE')")
	@RequestMapping(
			value="/anketa/{pitanjeId}/ukloniGlas",
			method = RequestMethod.PUT,
			consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> ukloniGlasSaPitanja(@PathVariable("pitanjeId") Long pitanjeId, @Validated @RequestBody DTOGlas dtoGlas,
			BindingResult bindingResult, Authentication authentication) {	
		
		if(bindingResult.hasErrors()) {
			return new ResponseEntity<String>(bindingResult.getFieldError().getDefaultMessage(), HttpStatus.BAD_REQUEST);
		}
		
		this.anketaService.ukloniGlas(authentication.getName(), pitanjeId, dtoGlas.getStanId(), dtoGlas.getOpcijaId());
		
		return new ResponseEntity<String>("Uspesno uklanjanje glasa!", HttpStatus.OK);
	}
	
	
	/**
	 * Metoda koja korisniku vraca sve stanove kojima je on vlasnik
	 * endpoint: /vlasnikStanova
	 * @param page - Objekat koji sadrzi informacije o broju strane i broju elemenata na strani
	 * @return Lista DTO objekata od kojih svaki predstavlja po jedan stan ciji je korisnik vlasnik
	 */
	@PreAuthorize("hasAnyAuthority('STANAR, PREDSEDNIK_SKUPSTINE')")
	@RequestMapping(
			value="/vlasnikStanova",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> mojiStanovi(Pageable page, Authentication authentication) {	
		
		List<Stan> stanovi = this.anketaService.mojiStanovi(page, authentication.getName());
		List<DTOStanPovratni> stanoviDTO = new ArrayList<DTOStanPovratni>();
		for (Stan stan : stanovi) {
			stanoviDTO.add(DTOStanPovratni.konvertuj(stan));
		}
		
		return new ResponseEntity<List<DTOStanPovratni>>(stanoviDTO, HttpStatus.OK);
	}
	
	/**
	 * Metoda koja korisniku vraca sve stanove kojima je on vlasnik
	 * endpoint: /{pitanjeId}/stanoviKojiSuGlasaliIzZgrade
	 * @param page - Objekat koji sadrzi informacije o broju strane i broju elemenata na strani
	 * @return Lista DTO objekata od kojih svaki predstavlja po jedan stan ciji je korisnik vlasnik
	 */
	@PreAuthorize("hasAnyAuthority('STANAR, PREDSEDNIK_SKUPSTINE')")
	@RequestMapping(
			value="/{pitanjeId}/stanoviKojiSuGlasaliIzZgrade",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> stanoviKojiSuGlasali(@PathVariable("pitanjeId") Long pitanjeId, Authentication authentication) {	
		
		List<Stan> stanovi = this.anketaService.stanoviKojiSuGlasali(pitanjeId, authentication.getName());
		List<DTOStanPovratni> stanoviDTO = new ArrayList<DTOStanPovratni>();
		for (Stan stan : stanovi) {
			stanoviDTO.add(DTOStanPovratni.konvertuj(stan));
		}
		
		return new ResponseEntity<List<DTOStanPovratni>>(stanoviDTO, HttpStatus.OK);
	}
	/**
	 * Metoda koja korisniku vraca sve stanove kojima je on vlasnik
	 * endpoint: /{pitanjeId}/stanoviKojiNisuGlasaliIzZgrade
	 * @param page - Objekat koji sadrzi informacije o broju strane i broju elemenata na strani
	 * @return Lista DTO objekata od kojih svaki predstavlja po jedan stan ciji je korisnik vlasnik
	 */
	@PreAuthorize("hasAnyAuthority('STANAR, PREDSEDNIK_SKUPSTINE')")
	@RequestMapping(
			value="/{pitanjeId}/stanoviKojiNisuGlasaliIzZgrade",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> stanoviKojiNisuGlasali(@PathVariable("pitanjeId") Long pitanjeId, Authentication authentication) {	
		
		List<Stan> stanovi = this.anketaService.stanoviKojiNisuGlasali(pitanjeId, authentication.getName());
		List<DTOStanPovratni> stanoviDTO = new ArrayList<DTOStanPovratni>();
		for (Stan stan : stanovi) {
			stanoviDTO.add(DTOStanPovratni.konvertuj(stan));
		}
		
		return new ResponseEntity<List<DTOStanPovratni>>(stanoviDTO, HttpStatus.OK);
	}
	
	
}
