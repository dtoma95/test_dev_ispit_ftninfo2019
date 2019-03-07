package kts.nwt.controller;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.support.PagedListHolder;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import kts.nwt.DTO.povratni.DTOKorisnikPovratni;
import kts.nwt.DTO.povratni.DTOObavestenjePovratni;
import kts.nwt.DTO.povratni.DTOPtdrPovratni;
import kts.nwt.DTO.povratni.DTOSkupstinaPovratni;
import kts.nwt.DTO.povratni.DTOStanPovratni;
import kts.nwt.DTO.povratni.DTOZgradaPovratni;
import kts.nwt.domain.Firma;
import kts.nwt.domain.Obavestenje;
import kts.nwt.domain.PredlogTackeDnevnogReda;
import kts.nwt.domain.Skupstina;
import kts.nwt.domain.Stan;
import kts.nwt.domain.Stanar;
import kts.nwt.domain.Zgrada;
import kts.nwt.service.ZgradaService;

@RestController
@RequestMapping("/api")
public class ZgradaController {
	@Autowired
	private ZgradaService zgradaService;
	
	/**
	 * Metoda koja dobavlja zgradu sa trazenim id-em
	 * endpoint: /zgrada/{id}
	 * @param zgradaId - Identifikator zgrade
	 * @return DTO objekat koji predstavlja zgradu sa trazenim id-em
	 */
	@RequestMapping(
			value = "zgrada/{id}",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> zgrada(@PathVariable("id") Long zgradaId) {
		Zgrada zgrada = this.zgradaService.zgrada(zgradaId);
		DTOZgradaPovratni DTOZgrada = DTOZgradaPovratni.konvertuj(zgrada);
		return new ResponseEntity<DTOZgradaPovratni>(DTOZgrada, HttpStatus.OK);
	}
	/**
	 * Metoda koja dobavlja stan sa trazenim id-em
	 * endpoint: /stan/{id}
	 * @param stanId - Identifikator stana
	 * @return DTO objekat koji prestavlja stan sa trazenim id-em
	 */
	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(
			value = "stan/{id}",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> stan(@PathVariable("id") Long stanId) {
		Stan stan = this.zgradaService.stan(stanId);
		DTOStanPovratni DTOStan = DTOStanPovratni.konvertuj(stan);
		return new ResponseEntity<DTOStanPovratni>(DTOStan, HttpStatus.OK);
	}
	
	/**
	 * Metoda nabavlja sva obavestenja iz zgrade
	 * endpoint: /zgrada/{id}/obavestenja
	 * @param zgradaId - Identifikator zgrade iz koje se traze obavestenja
	 * @param page - Objekat koji sadrzi informacije o broju strane i broju elemenata na strani
	 * @return Lista DTO objekata od kojih svaki od njih sadrzi pronadjeno obavestenje
	 */
	@PreAuthorize("hasAnyAuthority('STANAR', 'PREDSEDNIK_SKUPSTINE', 'ADMIN', 'INSTITUCIJA', 'FIRMA')")
	@RequestMapping(
			value="zgrada/{id}/obavestenja",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> izlistajObavestenjaZgrade( @PathVariable("id") Long zgradaId, 
			Pageable page, Authentication authentication) {
		
		List<Obavestenje> reverseList = 
				this.zgradaService.izlistajObavestenjaZgrade(zgradaId, authentication.getName());
		 
		Collections.reverse(reverseList);
		PagedListHolder<Obavestenje> holder =  new PagedListHolder<>(reverseList);
		
		holder.setPage(page.getPageNumber());
	    holder.setPageSize(page.getPageSize());
	    
	    List<DTOObavestenjePovratni> listaObavestenjaDTO = new ArrayList<DTOObavestenjePovratni>();
		for (Obavestenje obavestenje : holder.getPageList()) {
			listaObavestenjaDTO.add(DTOObavestenjePovratni.konvertuj(obavestenje));
		}
		
		//Postavljanje headera
		HttpHeaders headers = new HttpHeaders();
		headers.add("X-ukupno-strana", Integer.toString(holder.getPageCount()));
		
		return new ResponseEntity<List<DTOObavestenjePovratni>>(listaObavestenjaDTO, headers, HttpStatus.OK);
	}
	
	
	/**
	 * Metoda koja vraca odgovarajucu stranu predloga tacaka dnevnog reda za odgovarajucu zgradu
	 * endpoint: /zgrada/{id}/ptdri
	 * @param zgradaId - Identifikator zeljene zgrade
	 * @param page - Objekat koji sadrzi informacije o broju strane i broju elemenata na strani
	 * @return Lista DTO objekata koji sadrze predloge tacaka dnevnog reda
	 */
	@PreAuthorize("hasAnyAuthority('STANAR', 'PREDSEDNIK_SKUPSTINE', 'ADMIN', 'INSTITUCIJA', 'FIRMA')")
	@RequestMapping(
			value="zgrada/{id}/ptdri",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> izlistajPTDRZgrade( @PathVariable("id") Long zgradaId, 
			Pageable page, Authentication authentication) {
		
		List<PredlogTackeDnevnogReda> listaPTDR = 
				this.zgradaService.izlistajPTDRZgrade(zgradaId, authentication.getName());
		
		Collections.reverse(listaPTDR);
		PagedListHolder<PredlogTackeDnevnogReda> holder = new PagedListHolder<>(listaPTDR);
		holder.setPage(page.getPageNumber());
		holder.setPageSize(page.getPageSize());
		
		List<DTOPtdrPovratni> listaPTDRDTO = new ArrayList<DTOPtdrPovratni>();
		for (PredlogTackeDnevnogReda ptdr : holder.getPageList()) {
			listaPTDRDTO.add(DTOPtdrPovratni.konvertuj(ptdr));
		}
		
		//Postavljanje headera
		HttpHeaders headers = new HttpHeaders();
		headers.add("X-ukupno-strana", Integer.toString(holder.getPageCount()));
		
		return new ResponseEntity<List<DTOPtdrPovratni>>(listaPTDRDTO, headers, HttpStatus.OK);
	}
	
	/**
	 * Metoda koja vraca odgovarajucu stranu predloga tacaka dnevnog reda za odgovarajucu zgradu
	 * endpoint: /zgrada/{id}/predstojeceSkupstine
	 * @param zgradaId - Identifikator zeljene zgrade
	 * @return Lista DTO objekata koji sadrze predloge tacaka dnevnog reda
	 */
	@PreAuthorize("hasAnyAuthority('STANAR', 'PREDSEDNIK_SKUPSTINE')")
	@RequestMapping(
			value="zgrada/{id}/predstojeceSkupstine",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> izlistajPredstojeceSkupstine (@PathVariable("id") Long zgradaId, Authentication authentication) {
		
		List<Skupstina> skupstine = this.zgradaService.izlistajSkupstineKojePredstoje(zgradaId, authentication.getName());
		
		List<DTOSkupstinaPovratni> skupstineKojePredstoje = new ArrayList<DTOSkupstinaPovratni>();
		for (Skupstina s : skupstine) {
			skupstineKojePredstoje.add(DTOSkupstinaPovratni.konvertuj(s));
		}
		
		return new ResponseEntity<List<DTOSkupstinaPovratni>>(skupstineKojePredstoje, HttpStatus.OK);
	}
	
	/**
	 * Metoda koja vraca sve stanare iz zgrade
	 * endpoint: /zgrada/{id}/izlistajStanare
	 * @param zgradaId - Identifikator zeljene zgrade
	 * @param page - Objekat koji sadrzi informacije o broju strane i broju elemenata na strani
	 * @return Lista DTO objekata od kojih svaki sadrzi po jednog stanara iz zgrade
	 */
	@PreAuthorize("hasAnyAuthority('ADMIN', 'STANAR', 'PREDSEDNIK_SKUPSTINE')")
	@RequestMapping(
			value = "zgrada/{id}/izlistajStanare",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> izlistajStanare(@PathVariable("id") Long zgradaId, Pageable page){
		
		List<Stanar> stanari = this.zgradaService.izlistajStanareZgrade(zgradaId, page);
		List<DTOKorisnikPovratni> stanariDTO = new ArrayList<DTOKorisnikPovratni>();
		for (Stanar stanar : stanari) {
			stanariDTO.add(DTOKorisnikPovratni.konvertuj(stanar));
		}
		
		return new ResponseEntity<List<DTOKorisnikPovratni>>(stanariDTO, HttpStatus.OK);
	}
	
	
	/**
	 * Metoda koja vraca sve firme koje su povezane sa zadatom zgradom
	 * endpoint: /zgrada/{id}/izlistajFirme
	 * @param zgradaId - Identifikator zgrade za koju se traze firme
	 * @param page - Objekat koji sadrzi informacije o broju strane i broju elemenata na strani
	 * @return Lista DTO objekata od kojih svaki predstavlja po jednu firmu iz zgrade
	 */
	@PreAuthorize("hasAnyAuthority('ADMIN', 'STANAR', 'PREDSEDNIK_SKUPSTINE')")
	@RequestMapping(
			value = "zgrada/{id}/izlistajFirme",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> izlistajFirmeZgrade(@PathVariable("id") Long zgradaId, Pageable page, Authentication authentication){
		
		List<Firma> firme = this.zgradaService.izlistajFirmeZgrade(zgradaId, page, authentication.getName());
		List<DTOKorisnikPovratni> firmeDTO = new ArrayList<DTOKorisnikPovratni>();
		for (Firma firma : firme) {
			firmeDTO.add(DTOKorisnikPovratni.konvertuj(firma));
		}
		
		return new ResponseEntity<List<DTOKorisnikPovratni>>(firmeDTO, HttpStatus.OK);
	}
	
	/**
	 * Metoda koja vraca sve zgrade u kojima je stanar vlasnik nekog stana i zgradu u kojoj stanar zivi
	 * endpoint: /zgrada/izlistajZgradeStanara
	 * @return Lista DTO objekata od kojih svaki predstavlja po zgradu
	 */
	@PreAuthorize("hasAnyAuthority('STANAR', 'PREDSEDNIK_SKUPSTINE')")
	@RequestMapping(
			value = "zgrada/izlistajZgradeStanara",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> izlistajZgradeKorisnika(Authentication authentication){		
		Map<String, List<Zgrada>> zgrade = this.zgradaService.izlistajZgradeStanara(authentication.getName());
		
		Map<String, List<DTOZgradaPovratni>> zgradePovratni = new HashMap<String, List<DTOZgradaPovratni>>();
		zgradePovratni.put("Stanuje", new ArrayList<DTOZgradaPovratni>());
		zgradePovratni.put("Vlasnik", new ArrayList<DTOZgradaPovratni>());
		
		if (!zgrade.get("Stanuje").isEmpty()) {
			//maksimalno moze stanovati u jednom stanu
			zgradePovratni.get("Stanuje").add(DTOZgradaPovratni.konvertuj(zgrade.get("Stanuje").get(0)));
		}
		
		for (Zgrada z : zgrade.get("Vlasnik")) {
			zgradePovratni.get("Vlasnik").add(DTOZgradaPovratni.konvertuj(z));
		}
		
		return new ResponseEntity<Map<String, List<DTOZgradaPovratni>>>(zgradePovratni, HttpStatus.OK);
	}

}
