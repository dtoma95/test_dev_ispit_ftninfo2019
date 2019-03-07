package kts.nwt.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.support.PagedListHolder;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import kts.nwt.DTO.DTODodajFirmu;
import kts.nwt.DTO.DTODodajInstituciju;
import kts.nwt.DTO.DTODodajStanara;
import kts.nwt.DTO.DTODodajZgradu;
import kts.nwt.DTO.povratni.DTOKorisnikPovratni;
import kts.nwt.DTO.povratni.DTOStanPovratni;
import kts.nwt.DTO.povratni.DTOZgradaPovratni;
import kts.nwt.domain.Firma;
import kts.nwt.domain.Institucija;
import kts.nwt.domain.Stan;
import kts.nwt.domain.Stanar;
import kts.nwt.domain.Zgrada;
import kts.nwt.service.AdministratorService;


@RestController
@RequestMapping("/api/admin")
public class AdministratorController {

	@Autowired
	private AdministratorService administratorService;
	
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	/**
	 * Metoda za dodavanje nove zgrade
	 * endpoint: /zgrada/dodaj
	 * @param dtoZgrada - DTO objekat koji sadrzi sve informacije o zgradi, a to su lokacija, ulica, broj i broj stanova
	 * @return Povratni DTO sa informacijama o dodatoj zgradi
	 */
	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(
			value = "/zgrada/dodaj",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> novaZgrada(@Validated @RequestBody DTODodajZgradu dtoZgrada, BindingResult bindingResult){
		
		if(bindingResult.hasErrors()) {
			return new ResponseEntity<String>(bindingResult.getFieldError().getDefaultMessage(), HttpStatus.BAD_REQUEST);
		}
		
		Zgrada z = new Zgrada();
		z.setUlica(dtoZgrada.getUlica());
		z.setBroj(dtoZgrada.getBroj());
		z.setLokacija(dtoZgrada.getLokacija());
		for (int i = 0; i < dtoZgrada.getBrojStanova(); i++) {
			Stan stan = new Stan(z, i+1, null);
			z.getStanovi().add(stan);
		}
		
		Zgrada zgrada = administratorService.novaZgrada(z);
		DTOZgradaPovratni zgradaDTO = DTOZgradaPovratni.konvertuj(zgrada);
		
		return new ResponseEntity<DTOZgradaPovratni>(zgradaDTO, HttpStatus.OK) ;
	}	
	
	/**
	 * Metoda za dobavljanje svih zgrada iz sistema uz mogucnost pretrage
	 * endpoint: /zgrade
	 * @param page - Objekat koji sadrzi informacije o broju strane i broju elemnata na strani
	 * @param ulicaBroj - Ulica i/ili broj u kojima se trazene zgrade nalaze
	 * @param mesto - Mesto u kojem se trazene zgrade nalaze
	 * @return Lista DTO objekata od kojih svaki sadrzi po jednu zgradu iz baze
	 */
	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(
			value = "/zgrade",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> zgrade(Pageable page,
			@RequestParam(value="ulicaBroj", required=false) String ulicaBroj,
			@RequestParam(value="mesto", required=false) String mesto){
		
		Page<Zgrada> zgrade = this.administratorService.zgrade(page, ulicaBroj, mesto);
		List<DTOZgradaPovratni> zgradeDTO = new ArrayList<DTOZgradaPovratni>();
		for (Zgrada zgrada : zgrade) {
			zgradeDTO.add(DTOZgradaPovratni.konvertuj(zgrada));
		}
		
		HttpHeaders header = new HttpHeaders();
		header.add("Ukupno-Strana", Integer.toString(zgrade.getTotalPages()));
		
		return new ResponseEntity<List<DTOZgradaPovratni>>(zgradeDTO, header, HttpStatus.OK);
	}
	
	/**
	 * Metoda za brisanje zgrade
	 * endpoint: /zgrada/{zgradaId}
	 * @param zgradaId - Identifikator zgrade koja treba da se obrise
	 * @return Poruka o uspesnom brisanju zgrade
	 */
	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(
			value = "/zgrada/{zgradaId}",
			method = RequestMethod.DELETE,
			produces = MediaType.TEXT_PLAIN_VALUE)
	public ResponseEntity<?> obrisiZgradu(@PathVariable("zgradaId") Long zgradaId){
		
		this.administratorService.obrisiZgradu(zgradaId);
		
		return new ResponseEntity<String>("Uspesno obrisana zgrada!", HttpStatus.OK);
	}
	
	/**
	 * Metoda za dodavanje novog stana u zgradu
	 * endpoint: /zgrada/{zgradaId}/stan/dodaj
	 * @param zgradaId - Identifikator zgrade u koju se dodaje stan
	 * @param brojStana - Broj stana koji se dodaje
	 * @return Povratni DTO sa informacijama o dodatom stanu
	 */
	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(
			value = "/zgrada/{zgradaId}/stan/dodaj",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> noviStan(@PathVariable("zgradaId") Long zgradaId,
			@RequestBody int brojStana, BindingResult bindingResult){
		
		if(bindingResult.hasErrors()) {
			return new ResponseEntity<String>(bindingResult.getFieldError().getDefaultMessage(), HttpStatus.BAD_REQUEST);
		}
		
		Stan stan = new Stan();
		stan.setBroj(brojStana);
		
		Stan s = this.administratorService.noviStan(stan, zgradaId);
		DTOStanPovratni stanDTO = DTOStanPovratni.konvertuj(s);
		
		return new ResponseEntity<DTOStanPovratni>(stanDTO, HttpStatus.OK);
	}
	
	
	/**
	 * Metoda koja vraca sve stanove iz zgrade
	 * endpoint: /zgrada/{id}/stanovi
	 * @param zgradaId - Identifikator zeljene zgrade 
	 * @param page - Objekat koji sadrzi informacije o broju strane i broju elemenata na strani
	 * @return Lista DTO objekata od kojih svaki sadrzi po jedan stan iz zgrade
	 */
	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(
			value = "/zgrada/{id}/stanovi",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> stanovi(@PathVariable("id") Long zgradaId, Pageable page){
		
		PagedListHolder<Stan> holder = this.administratorService.izlistajStanoveZgrade(zgradaId, page);
		List<Stan> stanovi = holder.getPageList();
		List<DTOStanPovratni> stanoviDTO = new ArrayList<DTOStanPovratni>();
		for (Stan stan : stanovi) {
			stanoviDTO.add(DTOStanPovratni.konvertuj(stan));
		}
		
		HttpHeaders header = new HttpHeaders();
		header.add("Ukupno-Strana", Integer.toString(holder.getPageCount()));
		
		return new ResponseEntity<List<DTOStanPovratni>>(stanoviDTO, header, HttpStatus.OK);
	}

	/**
	 * Metoda za brisanje stana
	 * endpoint: /stan/{id}
	 * @param id - Identifikator stana koji se brise
	 * @return Poruka o uspesnom brisanju stana
	 */
	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(
			value = "/stan/{id}",
			method = RequestMethod.DELETE,
			produces = MediaType.TEXT_PLAIN_VALUE)
	public ResponseEntity<?> obrisiStan(@PathVariable("id") Long id){
		
		this.administratorService.obrisiStan(id);
		
		return new ResponseEntity<String>("Uspesno obrisan stan!", HttpStatus.OK);
	}
	
	
	/**
	 * Metoda za dodavanje novog stanara
	 * endpoint: /stanar/dodaj
	 * @param dtoStanar - DTO objekat sa informacijama o stanaru koji se dodaje, a to su email, lozinka, ime i prezime
	 * @return Povratni DTO sa informacijama o dodatom stanaru
	 */
	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(
			value = "/stanar/dodaj",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> noviStanar(@Validated @RequestBody DTODodajStanara dtoStanar, BindingResult bindingResult){
		
		if(bindingResult.hasErrors()) {
			return new ResponseEntity<String>(bindingResult.getFieldError().getDefaultMessage(), HttpStatus.BAD_REQUEST);
		}
		
		Stanar stanar = new Stanar();
		stanar.setEmail(dtoStanar.getEmail());
		stanar.setLozinka(passwordEncoder.encode(dtoStanar.getLozinka()));
		stanar.setIme(dtoStanar.getIme());
		stanar.setPrezime(dtoStanar.getPrezime());
		stanar.setAuthorities("STANAR");
		
		Stanar s = administratorService.noviStanar(stanar);
		DTOKorisnikPovratni stanarDTO = DTOKorisnikPovratni.konvertuj(s);
		
		return new ResponseEntity<DTOKorisnikPovratni>(stanarDTO, HttpStatus.OK) ;
	}
	
	/**
	 * Metoda koja vraca stanara sa trazenim id-em
	 * endpoint: /stanar/{id}
	 * @param id - Identifikator stanara
	 * @return DTO objekat sa informacijama o stanaru sa trazenim id-em
	 */
	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(
			value = "/stanar/{id}",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> stanar(@PathVariable("id") Long id){
		
		Stanar stanar = this.administratorService.stanar(id);
		DTOKorisnikPovratni stanarDTO = DTOKorisnikPovratni.konvertuj(stanar);
		
		return new ResponseEntity<DTOKorisnikPovratni>(stanarDTO, HttpStatus.OK);
	}
	
	/**
	 * Metoda koja vraca sve stanare sa mogucnosti pretrage po imenu, prezimenu ili email-u
	 * endpoint: /stanari
	 * @param page - Objekat koji sadrzi informacije o broju strane i broju elemenata na strani
	 * @param filter - Ime, prezime ili email po kojima se stanari traze
	 * @return Lista DTO objekata od kojih svaki sadrzi informacije o jednom stanaru
	 */
	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(
			value = "/stanari",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> stanari(Pageable page,
			@RequestParam(value="filter", required=false) String filter){
		
		PagedListHolder<Stanar> holder = this.administratorService.stanari(page, filter);
		List<Stanar> stanari = holder.getPageList();
		List<DTOKorisnikPovratni> stanariDTO = new ArrayList<DTOKorisnikPovratni>();
		for (Stanar stanar : stanari) {
			stanariDTO.add(DTOKorisnikPovratni.konvertuj(stanar));
		}
		
		HttpHeaders header = new HttpHeaders();
		header.add("Ukupno-Strana", Integer.toString(holder.getPageCount()));
		
		return new ResponseEntity<List<DTOKorisnikPovratni>>(stanariDTO, header, HttpStatus.OK);
	}
	
	/**
	 * Metoda koja vraca sve stanove nekog stanara kojih je on vlasnik i u kom stanuje
	 * endpoint: /stanar/{id}/stanovi
	 * @param stanarId - Identifikator stanara
	 * @return Mapa DTO objekata u kojoj se nalazi stan u kome stanar stanuje i 
	 * listu stanova ciji je stanar vlasnik
	 */
	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(
			value = "/stanar/{id}/stanovi",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> izlistajStanoveStanara(@PathVariable("id") Long stanarId){
        Map<String, List<Stan>> stanovi = this.administratorService.izlistajStanoveStanara(stanarId);
		
		Map<String, List<DTOStanPovratni>> stanoviDTO = new HashMap<String, List<DTOStanPovratni>>();
		stanoviDTO.put("stanuje", new ArrayList<DTOStanPovratni>());
		stanoviDTO.put("vlasnik", new ArrayList<DTOStanPovratni>());
		
		if (!stanovi.get("stanuje").isEmpty()) {
			//maksimalno moze stanovati u jednom stanu
			stanoviDTO.get("stanuje").add(DTOStanPovratni.konvertuj(stanovi.get("stanuje").get(0)));
		}
		
		for (Stan stan : stanovi.get("vlasnik")) {
			stanoviDTO.get("vlasnik").add(DTOStanPovratni.konvertuj(stan));
		}
		
		return new ResponseEntity<Map<String, List<DTOStanPovratni>>>(stanoviDTO, HttpStatus.OK);
	}
	
	/**
	 * Metoda koja vraca sve stanare iz stana
	 * endpoint: /stan/{id}/stanari
	 * @param stanId - Identifikator zeljenog stana
	 * @return Lista DTO objekata od kojih svaki sadrzi po jednog stanara iz stana
	 */
	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(
			value = "/stan/{id}/stanari",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> izlistajStanareStana(@PathVariable("id") Long stanId){
		
		List<Stanar> stanari = this.administratorService.izlistajStanareStana(stanId);
		List<DTOKorisnikPovratni> stanariDTO = new ArrayList<DTOKorisnikPovratni>();
		for (Stanar stanar : stanari) {
			stanariDTO.add(DTOKorisnikPovratni.konvertuj(stanar));
		}
		
		return new ResponseEntity<List<DTOKorisnikPovratni>>(stanariDTO, HttpStatus.OK);
	}
	
	/**
	 * Metoda za brisanje stanara
	 * endpoint: /stanar/{id}
	 * @param id - Identifikator stanara koji se brise 
	 * @return Poruka o uspesnom brisanju stanara
	 */
	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(
			value = "/stanar/{id}",
			method = RequestMethod.DELETE,
			produces = MediaType.TEXT_PLAIN_VALUE)
	public ResponseEntity<?> obrisiStanara(@PathVariable("id") Long id){
		
		this.administratorService.obrisiStanara(id);
		
		return new ResponseEntity<String>("Uspesno obrisan stanar!", HttpStatus.OK);
	}
	
	/**
	 * Metoda za dodavanje institucije
	 * endpoint: /institucija/dodaj
	 * @param DTODI - DTO objekat sa podacima o instituciji, a to su email, lozinka, naziv, lokacija i broj telefona
	 * @return Povratni DTO sa informacijama o dodatoj instituciji
	 */
	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(
			value = "/institucija/dodaj",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> novaInstitucija(@Validated @RequestBody DTODodajInstituciju DTODI, BindingResult bindingResult){
		
		if(bindingResult.hasErrors()) {
			return new ResponseEntity<String>(bindingResult.getFieldError().getDefaultMessage(), HttpStatus.BAD_REQUEST);
		}
		
		Institucija institucija = new Institucija();
		institucija.setEmail(DTODI.getEmail());
		institucija.setLozinka(passwordEncoder.encode(DTODI.getLozinka()));
		institucija.setNaziv(DTODI.getNaziv());
		institucija.setLokacija(DTODI.getLokacija());
		institucija.setBrojTelefona(DTODI.getBrojTelefona());
		institucija.setAuthorities("INSTITUCIJA");
		
		Institucija i = this.administratorService.novaInstituciju(institucija);
		DTOKorisnikPovratni stanarDTO = DTOKorisnikPovratni.konvertuj(i);
		
		return new ResponseEntity<DTOKorisnikPovratni>(stanarDTO, HttpStatus.OK) ;
	}
	
	/**
	 * Metoda koja vraca sve institucije sa mogucnosti pretrage po nazivu ili email-u
	 * endpoint: /institucije
	 * @param page - Objekat koji sadrzi informacije o broju strane i broju elemenata na strani
	 * @param filter - Naziv ili email po kojima se institucije traze
	 * @return Lista DTO objekata od kojih svaki sadrzi informacije o jednoj instituciji
	 */
	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(
			value = "/institucije",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> institucije(Pageable page,
			@RequestParam(value="filter", required=false) String filter){
			
		PagedListHolder<Institucija> holder = this.administratorService.institucije(page, filter);
		List<Institucija> institucije = holder.getPageList();
		List<DTOKorisnikPovratni> institucijeDTO = new ArrayList<DTOKorisnikPovratni>();
		for (Institucija institucija : institucije) {
			institucijeDTO.add(DTOKorisnikPovratni.konvertuj(institucija));
		}
		
		HttpHeaders header = new HttpHeaders();
		header.add("Ukupno-Strana", Integer.toString(holder.getPageCount()));
		
		return new ResponseEntity<List<DTOKorisnikPovratni>>(institucijeDTO, header, HttpStatus.OK);
	}
	
	/**
	 * Metoda kojom se stanar useljava u neki stan
	 * endpoint: /stan/{stanId}/dodeli/{stanarId}
	 * @param stanId - Identifikator stana
	 * @param stanarId - Identifikator stanara
	 * @return DTO objekat koji sa informacijama o stanaru koji je useljen
	 */	
	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(
			value = "/stan/{stanId}/dodeli/{stanarId}",
			method = RequestMethod.PUT,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> useliStanara(@PathVariable("stanId") Long stanId,
			@PathVariable("stanarId") Long stanarId){

		Stanar stanar = this.administratorService.dodeliStanara(stanarId, stanId);
		DTOKorisnikPovratni stanarDTO = DTOKorisnikPovratni.konvertuj(stanar);
		
		return new ResponseEntity<DTOKorisnikPovratni>(stanarDTO, HttpStatus.OK);
	}
	
	/**
	 * Metoda kojom se stanar iseljava iz nekog stana
	 * endpoint: /stan/{stanId}/ukloni/{stanarId}
	 * @param stanId - Identifikator stana
	 * @param stanarId - Identifikator stanara
	 * @return DTO objekat koji sa informacijama o stanaru koji je iseljen
	 */	
	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(
			value = "/stan/{stanId}/ukloni/{stanarId}",
			method = RequestMethod.PUT,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> iseliStanara(@PathVariable("stanId") Long stanId,
			@PathVariable("stanarId") Long stanarId){

		Stanar stanar = this.administratorService.iseliStanara(stanarId, stanId);
		DTOKorisnikPovratni stanarDTO = DTOKorisnikPovratni.konvertuj(stanar);
		
		return new ResponseEntity<DTOKorisnikPovratni>(stanarDTO, HttpStatus.OK);
	}
	
	/**
	 * Metoda za postavljanje predsednika
	 * endpoint: /stanar/{stanarId}/postaviZaPredsednika
	 * @param stanarId - Identifikator stanara koji se postavlja za predsednika
	 * @return DTO objekat sa informacijama o zgradi kojoj je postavljen predsednik
	 */
	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(
			value = "/stanar/{stanarId}/postaviZaPredsednika",
			method = RequestMethod.PUT,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> postaviPredsednika(@PathVariable("stanarId") Long stanarId){
	
		Zgrada zgrada = this.administratorService.postaviPredsednika(stanarId);
		DTOZgradaPovratni zgradaDTO = DTOZgradaPovratni.konvertuj(zgrada);

		return new ResponseEntity<DTOZgradaPovratni>(zgradaDTO, HttpStatus.OK);
	}
	
	
	/**
	 * Metoda koja postavlja vlasnika stana u stanu
	 * endpoint: /stan/{stanId}/postaviVlasnika/{stanarId}
	 * @param stanarId - Identifikator stanara 
	 * @param stanId - Identifikator stana
	 * @return DTO objekat koji sadrzi informacije o stanu u kome je vlasnik postavljen
	 */
	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(
			value = "/stan/{stanId}/postaviVlasnika/{stanarId}",
			method = RequestMethod.PUT,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> postaviVlasnika(@PathVariable("stanarId") Long stanarId,
			@PathVariable("stanId") Long stanId){
	
		Stan stan = this.administratorService.postaviVlasnika(stanarId, stanId);
		DTOStanPovratni stanDTO = DTOStanPovratni.konvertuj(stan);

		return new ResponseEntity<DTOStanPovratni>(stanDTO, HttpStatus.OK);
	}
	
	/**
	 * Metoda koja uklanja vlasnika iz stana
	 * endpoint: /stan/{stanId}/ukloniVlasnika
	 * @param stanId - Identifikator stana
	 * @return DTO objekat koji sadrzi informacije o stanu iz kog je vlasnik uklonjen
	 */
	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(
			value = "/stan/{stanId}/ukloniVlasnika",
			method = RequestMethod.PUT,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> ukloniVlasnika(@PathVariable("stanId") Long stanId){
	
		Stan stan = this.administratorService.ukloniVlasnika(stanId);
		DTOStanPovratni stanDTO = DTOStanPovratni.konvertuj(stan);

		return new ResponseEntity<DTOStanPovratni>(stanDTO, HttpStatus.OK);
	}	
	
	/**
	 * Metoda za dodavanje firme
	 * endpoint: /firma/dodaj
	 * @param DTODF - DTO objekat sa informacijama o firmi koja se dodaje, a to su email, lozinka, naziv, adresa i broj telefona
	 * @return DTO objekat koji sadrzi informacije o dodatoj firmi
	 */
	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(
			value = "/firma/dodaj",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> novaFirma(@Validated @RequestBody DTODodajFirmu DTODF, BindingResult bindingResult){
		
		if(bindingResult.hasErrors()) {
			return new ResponseEntity<String>(bindingResult.getFieldError().getDefaultMessage(), HttpStatus.BAD_REQUEST);
		}
		
		Firma firma = new Firma();
		firma.setEmail(DTODF.getEmail());
		firma.setLozinka(passwordEncoder.encode(DTODF.getLozinka()));
		firma.setNaziv(DTODF.getNaziv());
		firma.setAdresa(DTODF.getAdresa());
		firma.setBrojTelefona(DTODF.getBrojTelefona());
		firma.setAuthorities("FIRMA");
		
		Firma f = this.administratorService.novaFirma(firma);
		DTOKorisnikPovratni stanarDTO = DTOKorisnikPovratni.konvertuj(f);
		
		return new ResponseEntity<DTOKorisnikPovratni>(stanarDTO, HttpStatus.OK) ;
	}
	
	/**
	 * Metoda za dodelu firme zgradi
	 * endpoint: /zgrada/{zgradaId}/dodeliFirmu/{firmaId}
	 * @param zgradaId - Identifikator zgrade kojoj se dodeljuje firma
	 * @param firmaId - Identifikator firme koja se dodeljuje zgradi
	 * @return DTO objekat sa informacijama o zgradi kojoj je dodeljena firma
	 */
	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(
			value = "/zgrada/{zgradaId}/dodeliFirmu/{firmaId}",
			method = RequestMethod.PUT,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> dodeliFirmuZgradi(@PathVariable("zgradaId") Long zgradaId, @PathVariable("firmaId") Long firmaId){

		Zgrada zgrada = this.administratorService.dodeliFirmu(firmaId, zgradaId);
		DTOZgradaPovratni zgradaDTO = DTOZgradaPovratni.konvertuj(zgrada);

		return new ResponseEntity<DTOZgradaPovratni>(zgradaDTO, HttpStatus.OK);
	}
	
	/**
	 * Metoda koja vraca sve firme iz sistema sa mogucnosti pretrage po nazivu ili email-u
	 * endpoint: /firme
	 * @param page - Objekat koji sadrzi informacije o broju strane i broju elemenata na strani
	 * @param filter - Naziv ili email po kojima se institucije traze
	 * @return Lista DTO objekata od kojih svaki sadrzi informacije o jednoj firmi
	 */
	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(
			value = "/firme",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> firme(Pageable page,
			@RequestParam(value="filter", required=false) String filter){
			
		
		PagedListHolder<Firma> holder = this.administratorService.firme(page, filter);
		List<Firma> firme = holder.getPageList();
		List<DTOKorisnikPovratni> firmeDTO = new ArrayList<DTOKorisnikPovratni>();
		for (Firma firma : firme) {
			firmeDTO.add(DTOKorisnikPovratni.konvertuj(firma));
		}
		
		HttpHeaders header = new HttpHeaders();
		header.add("Ukupno-Strana", Integer.toString(holder.getPageCount()));
		
		return new ResponseEntity<List<DTOKorisnikPovratni>>(firmeDTO, header, HttpStatus.OK);
	}
	
	/**
	 * Metoda za uklanjanje firme iz zgrade
	 * endpoint: /zgrada/{zgradaId}/brisi/{firmaId}
	 * @param zgradaId - Identifikator zgrade iz koje se uklanja firma
	 * @param firmaId - Identifikator firme koja se uklanja zgrade
	 * @return Poruka o uspesnom brisanju firme
	 */
	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(
			value = "/zgrada/{zgradaId}/brisi/{firmaId}",
			method = RequestMethod.DELETE,
			produces = MediaType.TEXT_PLAIN_VALUE)
	public ResponseEntity<?> obrisiFirmuIzZgrade(@PathVariable("zgradaId") Long zgradaId, @PathVariable("firmaId") Long firmaId){
		
		this.administratorService.obrisiFirmu(firmaId,zgradaId);
		
		return new ResponseEntity<String>("Uspesno obrisana firma!", HttpStatus.OK);
	}
	
}
