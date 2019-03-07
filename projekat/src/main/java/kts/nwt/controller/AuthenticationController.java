package kts.nwt.controller;

import javax.validation.Valid;

import kts.nwt.DTO.DTOIzmenaLozinke;
import kts.nwt.DTO.DTOLogovanje;
import kts.nwt.DTO.DTOToken;
import kts.nwt.exceptions.BadRequestException;
import kts.nwt.security.TokenUtils;
import kts.nwt.service.AuthenticationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.mobile.device.Device;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class AuthenticationController {

	@Value("${token.header}")
    private String tokenHeader;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    private AuthenticationService authenticationService;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private TokenUtils tokenUtils;
	
    /**
     * Metoda za logovanje korisnika
     * endpoint: /ulogujSe
     * @param logovanje - DTO objekat sa informacijama o logovanju,
     * a to su email i lozinka
     * @return Poruka o uspesnosti logovanja
     */
	@RequestMapping(value = "/ulogujSe", 
			method = RequestMethod.POST, 
			consumes = MediaType.APPLICATION_JSON_VALUE, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> loginUser(@RequestBody @Valid DTOLogovanje logovanje, BindingResult bindingResult,
			Device device) {

		if (bindingResult.hasErrors()) {
			return new ResponseEntity<String>(bindingResult.getFieldError()
					.getDefaultMessage(), HttpStatus.FORBIDDEN);
		}

		Authentication auth = SecurityContextHolder.getContext()
				.getAuthentication();

		//potencijalno kasnije potrebno
		if (!(auth instanceof AnonymousAuthenticationToken)) {

			return new ResponseEntity<Object>("#/pocetna",
					HttpStatus.MOVED_PERMANENTLY);
		}

		try {
			Authentication authentication = this.authenticationManager
					.authenticate(new UsernamePasswordAuthenticationToken(logovanje
							.getEmail(), logovanje.getLozinka()));

			SecurityContextHolder.getContext()
					.setAuthentication(authentication);

			//nisam siugran da li mi u servisu uopste treba neka provera
			if (this.authenticationService.ulogujKorisnika(logovanje)) {
				DTOToken token = new DTOToken();
				UserDetails userDetails = this.userDetailsService
						.loadUserByUsername(logovanje.getEmail());
				String tokenValue = this.tokenUtils.generateToken(userDetails,
						device);
				token.setToken(tokenValue);
				return new ResponseEntity<DTOToken>(token, HttpStatus.OK);
			}
			
			throw new BadRequestException("Stanaru nije dodeljen stan!"); 

		} catch (BadCredentialsException e) {
			throw new BadRequestException("Pogresan email ili lozinka!"); 
		} catch (AuthenticationException e) {
			return new ResponseEntity<String>(
					"Nešto je pošlo prilično naopako!", HttpStatus.BAD_REQUEST);
		}

	}
	
	/**
	 * Metoda za logout korisnika
	 * endpoint: /izlogujSe
	 * @return Poruka o uspesnosti logouta
	 */
	@RequestMapping(value = "/izlogujSe",
            method = RequestMethod.GET,
            produces = MediaType.TEXT_PLAIN_VALUE)
    public ResponseEntity<?> logoutUser() {

        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (!(auth instanceof AnonymousAuthenticationToken)){
            SecurityContextHolder.clearContext();
            return new ResponseEntity<String>("Uspesno ste se izlogovali!", HttpStatus.OK);
        } else {
        	throw new BadRequestException("Korisnik nije autentifikovan!");
        }

    }

	/**
	 * Metoda za promenu lozinke korisnika
	 * endpoint: /promenaLozinke
	 * @return Poruka o uspesnosti logouta
	 */
	@RequestMapping(value = "/promenaLozinke", 
			method = RequestMethod.PUT, 
			consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.TEXT_PLAIN_VALUE)
	public ResponseEntity<String> changeLogin(@Validated @RequestBody DTOIzmenaLozinke lozinka, BindingResult bindingResult,
			Authentication authentiaction) {

		if (bindingResult.hasErrors()) {
			return new ResponseEntity<String>(bindingResult.getFieldError()
					.getDefaultMessage(), HttpStatus.BAD_REQUEST);
		}

		
		try {
			Authentication auth = this.authenticationManager
					.authenticate(new UsernamePasswordAuthenticationToken(authentiaction
							.getName(), lozinka.getStaraLozinka()));
			if (!(auth instanceof AnonymousAuthenticationToken)) {
				boolean izmena = this.authenticationService.izmeniLozinku(
						lozinka,authentiaction.getName());	
				if (izmena){
					SecurityContextHolder.clearContext();
		            return new ResponseEntity<String>("Uspesno ste promenili lozinku!", HttpStatus.OK);
				}
				
			}

			return new ResponseEntity<String>(
					"Nešto je pošlo prilično naopako!", HttpStatus.BAD_REQUEST);
			
			
		} catch (BadCredentialsException e) {
			throw new BadRequestException("Pogresna lozinka!"); 
		} catch (AuthenticationException e) {
			return new ResponseEntity<String>(
					"Nešto je pošlo prilično naopako!", HttpStatus.BAD_REQUEST);
		}

	}
	
	
	
	
}
