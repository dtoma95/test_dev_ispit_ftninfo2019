package kts.nwt.controller;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.support.PagedListHolder;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import kts.nwt.DTO.DTOKvar;
import kts.nwt.DTO.DTOKvarKomentar;
import kts.nwt.DTO.DTOPopravkaKvara;
import kts.nwt.DTO.povratni.DTOKomentarPovratni;
import kts.nwt.DTO.povratni.DTOKorisnikPovratni;
import kts.nwt.DTO.povratni.DTOKvarPovratni;
import kts.nwt.domain.Komentar;
import kts.nwt.domain.Korisnik;
import kts.nwt.domain.Kvar;
import kts.nwt.domain.Predracun;
import kts.nwt.domain.Slika;
import kts.nwt.service.KvarService;

@RestController
@RequestMapping("/api")
public class KvarController {

	@Autowired
	KvarService kvarService;
	
	
	
	/**
	 * Metoda za dodavanje kvara
	 * endpoint: /kvar/dodaj
	 * @param kvardto - DTO objekat sa informacijama o kvaru,
	 * a to su lokacija, opis i identifikator odgovornog lica
	 * @return DTO objekat sa informacijama o dodatom kvaru
	 */
	@PreAuthorize("hasAnyAuthority('STANAR, PREDSEDNIK_SKUPSTINE, ADMIN')")
	@RequestMapping(
			value="/kvar/dodaj",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> dodajKvar(@Validated @RequestBody DTOKvar kvardto, BindingResult bindingResult, Authentication authentication) {
		
		if(bindingResult.hasErrors()) {
			return new ResponseEntity<String>(bindingResult.getFieldError().getDefaultMessage(), HttpStatus.BAD_REQUEST);
		}
		
		Kvar kvar = new Kvar();
		kvar.setLokacija(kvardto.getLokacija());
		kvar.setOpis(kvardto.getOpis());
		
		kvar = this.kvarService.dodajKvar(kvar, kvardto.getOdgovornoLiceId(), authentication.getName());
		
		return new ResponseEntity<DTOKvarPovratni>(DTOKvarPovratni.konvertuj(kvar), HttpStatus.OK);
				
	}
	
	/**
	 * Metoda za dodavanje slike vezane za kvar
	 * endpoint: /kvar/{kvarId}/slika/dodaj
	 * @param kvarId - Identifikator kvara kojem se dodaje slika
	 * @param files - Lista fajlova koje klijent salje ka serveru
	 * @return DTO objekat sa informacijama o kvaru kome je dodata slika
	 */
	@PreAuthorize("hasAnyAuthority('STANAR, PREDSEDNIK_SKUPSTINE')")
	@RequestMapping(
			value="/kvar/{kvarId}/slika/dodaj",
			method = RequestMethod.POST,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> dodajSlikeKvaru(@PathVariable("kvarId") Long kvarId, @RequestParam("files") MultipartFile[] files, Authentication authentication) {
		
			Kvar k = this.kvarService.dodajSliku(kvarId, files, authentication.getName());
			
			return new ResponseEntity<Slika>(k.getSlike().get(k.getSlike().size()-1), HttpStatus.OK);
	}
	
	/**
	 * Metoda za brisanje slike
	 * endpoint: /kvar/{kvarId}/slika/{slikaId}
	 * @param kvarId - Identifikator kvara sa kojeg se uklanja slika
	 * @param slikaId - Identifikator slike koja se uklanja
	 * @return Poruka o uspesnom brisanju slike
	 */
	@PreAuthorize("hasAnyAuthority('STANAR, PREDSEDNIK_SKUPSTINE')")
	@RequestMapping(
			value="/kvar/{kvarId}/slika/{slikaId}",
			method = RequestMethod.DELETE,
			produces = MediaType.TEXT_PLAIN_VALUE)
	public ResponseEntity<?> obrisiSliku(@Validated @PathVariable("kvarId") Long kvarId, @Validated @PathVariable("slikaId") Long slikaId, Authentication authentication) {	
		
		this.kvarService.obrisiSliku(kvarId, slikaId, authentication.getName());
			
		return new ResponseEntity<String>("Uspesno brisanje slike iz kvara!", HttpStatus.OK);	
	}
	
	/**
	 * Metoda za izmenu kvara
	 * endpoint: /kvar/{kvarId}/izmeni
	 * @param kvarId - Identifikator kvara koji se menja
	 * @param kvardto - DTO objekat sa informacijama koje se menjaju,
	 * a to su opis, lokacija i identifikator odgovornog lica
	 * @return DTO objekat sa izmenjenim informacijama o kvaru
	 */
	@PreAuthorize("hasAnyAuthority('STANAR, PREDSEDNIK_SKUPSTINE')")
	@RequestMapping(
			value="/kvar/{kvarId}/izmeni",
			method = RequestMethod.PUT,
			consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> izmeniKvar(@Validated @PathVariable("kvarId") Long kvarId, @Validated @RequestBody DTOKvar kvardto, BindingResult bindingResult, Authentication authentication) {	
		
		if(bindingResult.hasErrors()) {
			return new ResponseEntity<String>(bindingResult.getFieldError().getDefaultMessage(), HttpStatus.BAD_REQUEST);
		}
		
		Kvar kvar = new Kvar();
		kvar.setId(kvarId);
		kvar.setOpis(kvardto.getOpis());
		kvar.setLokacija(kvardto.getLokacija());
		
		Kvar k = this.kvarService.izmeniKvar(kvar, authentication.getName());
			
		return new ResponseEntity<DTOKvarPovratni>(DTOKvarPovratni.konvertuj(k), HttpStatus.OK);
		
	}
	
	/**
	 * Metoda za dobavljanje kvara
	 * endpoint: /kvar/{kvarId}
	 * @param kvarId - Identifikator kvara koji se brise
	 * @return Poruka o uspesnom brisanju kvara
	 */
	@PreAuthorize("hasAnyAuthority('STANAR, PREDSEDNIK_SKUPSTINE, INSTITUCIJA, FIRMA')")
	@RequestMapping(
			value="/kvar/{kvarId}",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> dobaviKvar(@PathVariable("kvarId") Long kvarId, Authentication authentication) {	
		
		DTOKvarPovratni retval = DTOKvarPovratni.konvertuj(this.kvarService.dobaviKvar(kvarId));
		
		return new ResponseEntity<DTOKvarPovratni>(retval, HttpStatus.OK);
		
	}
	
	/**
	 * Metoda za brisanje kvara
	 * endpoint: /kvar/{kvarId}
	 * @param kvarId - Identifikator kvara koji se brise
	 * @return Poruka o uspesnom brisanju kvara
	 */
	@PreAuthorize("hasAnyAuthority('STANAR, PREDSEDNIK_SKUPSTINE')")
	@RequestMapping(
			value="/kvar/{kvarId}",
			method = RequestMethod.DELETE,
			produces = MediaType.TEXT_PLAIN_VALUE)
	public ResponseEntity<?> obrisiKvar(@PathVariable("kvarId") Long kvarId, Authentication authentication) {	
		
		this.kvarService.obrisiKvar(kvarId, authentication.getName());
			
		return new ResponseEntity<String>("Uspesno brisanje kvara!", HttpStatus.OK);
		
	}
	
	/**
	 * Metoda za dodavanje komentara
	 * endpoint: /kvar/{kvarId}/komentar/dodaj
	 * @param kk - DTO objekat sa tekstom komentara
	 * @param kvarId - Identifikator kvara koji se komentarise
	 * @return DTO objekat sa informacijama o komentaru koji je dodat
	 */
	@PreAuthorize("hasAnyAuthority('STANAR, PREDSEDNIK_SKUPSTINE, INSTITUCIJA, FIRMA')")
	@RequestMapping(
			value = "/kvar/{kvarId}/komentar/dodaj",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> noviKomentar(@Validated @RequestBody DTOKvarKomentar kk, @PathVariable("kvarId") Long kvarId, BindingResult bindingResult, Authentication authentication){
				
		if(bindingResult.hasErrors()) {
			return new ResponseEntity<String>(bindingResult.getFieldError().getDefaultMessage(), HttpStatus.BAD_REQUEST);
		}
		
		Komentar komentar = new Komentar();
		komentar.setTekst(kk.getTekst());
		Komentar k = this.kvarService.noviKomentar(komentar, kvarId, authentication.getName());
		
		return new ResponseEntity<DTOKomentarPovratni>(DTOKomentarPovratni.konvertuj(k), HttpStatus.OK);
	}
	
	/**
	 * Metoda za izmenu komentara
	 * endpoint: /kvar/{kvarId}/komentar/{komentarId}
	 * @param kvarId - Identifikator kvara koji se komentarise
	 * @param komentarId - Identifikator komentara koji se menja
	 * @param kk - DTO objekat sa novim tekstom komentara
	 * @return DTO objekat sa informacijama o komentaru koji je dodat
	 */
	@PreAuthorize("hasAnyAuthority('STANAR, PREDSEDNIK_SKUPSTINE, INSTITUCIJA, FIRMA')")
	@RequestMapping(
			value = "/kvar/{kvarId}/komentar/{komentarId}",
			method = RequestMethod.PUT,
			consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> izmeniKomentar(@PathVariable("kvarId") Long kvarId, @PathVariable("komentarId") Long komentarId, 
			@Validated @RequestBody DTOKvarKomentar kk, BindingResult bindingResult, Authentication authentication){
		
		
		if(bindingResult.hasErrors()) {
			return new ResponseEntity<String>(bindingResult.getFieldError().getDefaultMessage(), HttpStatus.BAD_REQUEST);
		}
		
		Komentar komentar = new Komentar();
		komentar.setTekst(kk.getTekst());
		Komentar k = this.kvarService.izmeniKomentar(komentar,
				kvarId, komentarId, authentication.getName());
		
		return new ResponseEntity<DTOKomentarPovratni>(DTOKomentarPovratni.konvertuj(k), HttpStatus.OK);
	}
	
	/**
	 * Metoda za brisanje komentara
	 * endpoint: /kvar/{kvarId}/komentar/{komentarId}
	 * @param kvarId - Identifikator kvara sa kojeg se brise komentar
	 * @param komentarId - Identifikator komentara za brisanje
	 * @return Poruka o uspesnom brisanju komentara
	 */
	@PreAuthorize("hasAnyAuthority('STANAR, PREDSEDNIK_SKUPSTINE, INSTITUCIJA, FIRMA')")
	@RequestMapping(
			value = "/kvar/{kvarId}/komentar/{komentarId}",
			method = RequestMethod.DELETE,
			produces = MediaType.TEXT_PLAIN_VALUE)
	public ResponseEntity<?> obrisiKomentar(@PathVariable("kvarId") Long kvarId, @PathVariable("komentarId") Long komentarId, Authentication authentication){
		
		this.kvarService.obrisiKomentar(komentarId, kvarId, authentication.getName());
		
		return new ResponseEntity<String>("Komentar je uspesno obrisan.", HttpStatus.OK);
	}
	
	
	/**
	 * Metoda za prosledjivanje kvara drugom odgovornom licu
	 * endpoint: /kvar/{kvarId}/prosledi/{odgovornoLiceId}
	 * @param kvarId - Identifikator kvara koji se prosledjuje
	 * @param odgovornoLiceId - Identifikator odgovornog lica kome se prosledjuje kvar
	 * @return DTO objekat sa informacija o kvaru koji je prosledjen
	 */
	@PreAuthorize("hasAnyAuthority('STANAR, PREDSEDNIK_SKUPSTINE, INSTITUCIJA, FIRMA')")
	@RequestMapping(
			value = "/kvar/{kvarId}/prosledi/{odgovornoLiceId}",
			method = RequestMethod.PUT,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> proslediKvar(@PathVariable("kvarId") Long kvarId,
			@PathVariable("odgovornoLiceId") Long odgovornoLiceId, Authentication authentication){
		
		Kvar kvar = this.kvarService.zameniOdgovornoLice(kvarId, odgovornoLiceId, authentication.getName());
				
		return new ResponseEntity<DTOKvarPovratni>(DTOKvarPovratni.konvertuj(kvar), HttpStatus.OK);
	}
	
	
	/**
	 * Metoda za zakazivanje vremena popravke kvara
	 * endpoint: /kvar/{kvarId}/zakaziVreme
	 * @param kvarId - Identifikator kvara koji se popravlja
	 * @param datum - Datum popravke kvara
	 * @return DTO objekat koji predstavlja informacije o kvaru cija je popravka zakazana
	 */
	@PreAuthorize("hasAnyAuthority('STANAR, PREDSEDNIK_SKUPSTINE, INSTITUCIJA, FIRMA')")
	@RequestMapping(
			value = "/kvar/{kvarId}/zakaziVreme",
			method = RequestMethod.PUT,
			consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> zakaziVreme(@PathVariable("kvarId") Long kvarId, @Validated @RequestBody DTOPopravkaKvara pk,
			BindingResult bindingResult, Authentication authentication){
		
		if(bindingResult.hasErrors()) {
			return new ResponseEntity<String>(bindingResult.getFieldError().getDefaultMessage(), HttpStatus.BAD_REQUEST);
		}
		
		Kvar kvar = this.kvarService.postaviVremePopravke(kvarId,
				pk.getVremePopravke(), authentication.getName());
		
		return new ResponseEntity<DTOKvarPovratni>(DTOKvarPovratni.konvertuj(kvar), HttpStatus.OK);
	}
	
	/**
	 * Metoda za zavrsavanje popravljenog kvara 
	 * endpoint: /kvar/{kvarId}/zavrsi
	 * @param kvarId - Identifikator kvara koji je zavrsen
	 * @return DTO objekat koji sadrzi informacije o kvaru koji je zavrsen
	 */
	@PreAuthorize("hasAnyAuthority('STANAR, PREDSEDNIK_SKUPSTINE')")
	@RequestMapping(
			value="/kvar/{kvarId}/zavrsi",
			method = RequestMethod.PUT,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> zavrsiKvar(@PathVariable("kvarId") Long kvarId, Authentication authentication) {	
		
		Kvar kvar = this.kvarService.zavrsiKvar(kvarId, authentication.getName());
			
		return new ResponseEntity<DTOKvarPovratni>(DTOKvarPovratni.konvertuj(kvar), HttpStatus.OK);
		
	}	
	
	/**
	 * Metoda za dodavanje predracuna
	 * endpoint: /kvar/{kvarId}/posaljiPredracun
	 * @param kvarId - Identifikator kvara za koji se dodaje predracun
	 * @param predracun - Predracun sa postavljenim podacima
	 * @return Predracun sa svim podacima
	 */
	@PreAuthorize("hasAnyAuthority('INSTITUCIJA, FIRMA')")
	@RequestMapping(
			value = "/kvar/{kvarId}/posaljiPredracun",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> postaviPredracun(@PathVariable("kvarId") Long kvarId, @Validated @RequestBody Predracun predracun,
			BindingResult bindingResult, Authentication authentication) {
		
		if(bindingResult.hasErrors()) {
			return new ResponseEntity<String>(bindingResult.getFieldError().getDefaultMessage(), HttpStatus.BAD_REQUEST);
		}
		
		this.kvarService.unesiPredracun(predracun, kvarId, authentication.getName());
		
		return new ResponseEntity<Predracun>(predracun, HttpStatus.OK);
	}
	
	/**
	 * Metoda klientu dobavlja odgovarajucu sliku iz repozitorijuma
	 * endpoint: /slika/{slikaId}
	 * @param slikaId - Identifikator trazene slike
	 * @return Objekat pronadjene slike
	 */
	@PreAuthorize("hasAnyAuthority('STANAR, PREDSEDNIK_SKUPSTINE, INSTITUCIJA, FIRMA')")
	@RequestMapping(
			value = "/slika/{slikaId}",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> dobaviSliku(@PathVariable("slikaId") Long slikaId){
		
		Slika s = this.kvarService.dobaviSliku(slikaId);
		
		return new ResponseEntity<Slika>(s, HttpStatus.OK);
	}
	
	/**
	 * Metoda pronalazi sve stanare zgrade , sve firme koje su dodeljene zgradi i
	 * sve institucije u sistemu 
	 * endpoint: /zgrada/{zgradaId}/moguciOdgovorni
	 * @param zgradaId - Identifikator trazene zgrade
	 * @return Lista svih korisnika (stanari, firme i institucije) vezanih za zgradu
	 */
	@PreAuthorize("hasAnyAuthority('STANAR, PREDSEDNIK_SKUPSTINE, INSTITUCIJA, FIRMA')")
	@RequestMapping(
			value = "/zgrada/{zgradaId}/moguciOdgovorni",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> moguciOdgovorni(@PathVariable("zgradaId") Long zgradaId,
			@RequestParam(value="search", required=false) String search,
			Pageable page){
		
		if(search == null)
			search = "";
		
		PagedListHolder<Korisnik> holder = 
				new PagedListHolder<>(this.kvarService.moguciOdgovorni(zgradaId, search));
	    holder.setPage(page.getPageNumber());
	    holder.setPageSize(page.getPageSize());
		
	    List<DTOKorisnikPovratni> retval = new ArrayList<>();
		for (Korisnik k : holder.getPageList()) {
			retval.add(DTOKorisnikPovratni.konvertuj(k));
		}
		
		//Postavljanje headera
		HttpHeaders headers = new HttpHeaders();
		headers.add("X-ukupno-strana", Integer.toString(holder.getPageCount()));
		
		return new ResponseEntity<List<DTOKorisnikPovratni>>(retval, headers, HttpStatus.OK);
	}
	
	/**
	 * Metoda pronalazi sve komentari koji su napisani na neki kvar
	 * endpoint: /kvar/{kvarId}/komentari
	 * @param kvarId - Identifikator kvara za koji se dobavljaju komentari
	 * @param page - Objekat koji sadrzi informacije o broju strane i broju elemenata na strani
	 * @return Lista svih komentara za odgovarajuci kvar konvertovanih u DTOKomentarPovratni objekte
	 */
	@PreAuthorize("hasAnyAuthority('STANAR, PREDSEDNIK_SKUPSTINE, INSTITUCIJA, FIRMA')")
	@RequestMapping(
			value = "/kvar/{kvarId}/komentari",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> izlistajKomentare(@PathVariable("kvarId") Long kvarId,
			Pageable page){
		
		
		PagedListHolder<Komentar> holder = 
				new PagedListHolder<>(this.kvarService.izlistajKomentare(kvarId));
	    holder.setPage(page.getPageNumber());
	    holder.setPageSize(page.getPageSize());
		
		List<DTOKomentarPovratni> retval = new ArrayList<>();
		for (Komentar k : holder.getPageList()) {
			retval.add(DTOKomentarPovratni.konvertuj(k));
		}
		
		//Postavljanje headera
		HttpHeaders headers = new HttpHeaders();
		headers.add("X-ukupno-strana", Integer.toString(holder.getPageCount()));
				
		
		return new ResponseEntity<List<DTOKomentarPovratni>>(retval, headers, HttpStatus.OK);
	}
	
	/**
	 * Metoda pronalazi sve kvarove koje je dodao ulogovani stanar
	 * endpoint: /kvarovi/stanar
	 * @param page - Objekat koji sadrzi informacije o broju strane i broju elemenata na strani
	 * @return Lista svih kvarova konvertovanih u DTOKvarPovratni objekte
	 */
	@PreAuthorize("hasAnyAuthority('STANAR, PREDSEDNIK_SKUPSTINE')")
	@RequestMapping(
			value = "/kvarovi/stanar",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> izlistajKvaroveAutora(
			@RequestParam(value="gotovo", required=true) boolean gotovo,
			Pageable page, Authentication authentication){
		
		List<Kvar> reverseList = 
				this.kvarService.izlistajKvaroveAutora(authentication.getName(), gotovo);
		Collections.reverse(reverseList);
		PagedListHolder<Kvar> holder = 
				new PagedListHolder<>(reverseList);
	    holder.setPage(page.getPageNumber());
	    holder.setPageSize(page.getPageSize());
	    
		List<DTOKvarPovratni> retval = new ArrayList<>();
		for (Kvar k : holder.getPageList()) {
			retval.add(DTOKvarPovratni.konvertuj(k));
		}
		
		//Postavljanje headera
		HttpHeaders headers = new HttpHeaders();
		headers.add("X-ukupno-strana", Integer.toString(holder.getPageCount()));
		
		return new ResponseEntity<List<DTOKvarPovratni>>(retval, headers, HttpStatus.OK);
	}
	
	/**
	 * Metoda pronalazi sve kvarove koji su dodati u neku zgradu
	 * endpoint: /zgrada/{zgradaId}/kvarovi
	 * @param zgradaId - Identifikator zgrade iz kojeg se dobavljaju kvarovi
	 * @param page - Objekat koji sadrzi informacije o broju strane i broju elemenata na strani
	 * @return Lista svih kvarova konvertovanih u DTOKvarPovratni objekte
	 */
	@PreAuthorize("hasAnyAuthority('STANAR, PREDSEDNIK_SKUPSTINE, INSTITUCIJA, FIRMA, ADMIN')")
	@RequestMapping(
			value = "/zgrada/{zgradaId}/kvarovi",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> izlistajKvaroveZgrade(@PathVariable("zgradaId") Long zgradaId,
			@RequestParam(value="gotovo", required=true) boolean gotovo,
			Pageable page, Authentication authentication){
		
		List<Kvar> reverseList = this.kvarService.izlistajKvaroveZgrade(zgradaId, gotovo);
		Collections.reverse(reverseList);
		PagedListHolder<Kvar> holder = 
				new PagedListHolder<>(reverseList);
	    holder.setPage(page.getPageNumber());
	    holder.setPageSize(page.getPageSize());
	    
		List<DTOKvarPovratni> retval = new ArrayList<>();
		for (Kvar k : holder.getPageList()) {
			retval.add(DTOKvarPovratni.konvertuj(k));
		}
		
		//Postavljanje headera
		HttpHeaders headers = new HttpHeaders();
		headers.add("X-ukupno-strana", Integer.toString(holder.getPageCount()));
		
		return new ResponseEntity<List<DTOKvarPovratni>>(retval, headers, HttpStatus.OK);
	}
	
	/**
	 * Metoda pronalazi sve kvarove za koje je ulogovani stanar odgovorno lice
	 * endpoint: /kvarovi/odgovoran
	 * @param kvarId - Identifikator kvara za koji se dobavljaju komentari
	 * @param page - Objekat koji sadrzi informacije o broju strane i broju elemenata na strani
	 * @return Lista svih kvarova konvertovanih u DTOKvarPovratni objekte
	 */
	@PreAuthorize("hasAnyAuthority('STANAR, PREDSEDNIK_SKUPSTINE, INSTITUCIJA, FIRMA')")
	@RequestMapping(
			value = "/kvarovi/odgovoran",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> izlistajKvaroveOdgovornogLica(
			@RequestParam(value="gotovo", required=true) boolean gotovo,
			Pageable page, Authentication authentication){
		
		List<Kvar> reverseList = this.kvarService.izlistajKvaroveOdgovornogLica(
				authentication.getName(), gotovo);
		Collections.reverse(reverseList);
		
		PagedListHolder<Kvar> holder = 
				new PagedListHolder<>(reverseList);
	    holder.setPage(page.getPageNumber());
	    holder.setPageSize(page.getPageSize());
		
	    List<DTOKvarPovratni> retval = new ArrayList<>();
		for (Kvar k : holder.getPageList()) {
			retval.add(DTOKvarPovratni.konvertuj(k));
		}
		
		//Postavljanje headera
		HttpHeaders headers = new HttpHeaders();
		headers.add("X-ukupno-strana", Integer.toString(holder.getPageCount()));
		
		return new ResponseEntity<List<DTOKvarPovratni>>(retval, headers, HttpStatus.OK);
	}
}
