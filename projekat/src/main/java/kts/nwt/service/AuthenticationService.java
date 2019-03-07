package kts.nwt.service;

import kts.nwt.DTO.DTOIzmenaLozinke;
import kts.nwt.DTO.DTOLogovanje;

public interface AuthenticationService {
	/**
	 * Metoda koja vrsi logovanje korisnika
	 * @param logovanje - DTO objekat koji sadrzi email i lozinku korisnika koji zeli da se uloguje
	 * @return - True ukoliko se korisnik uspesno ulogovao, false ukoliko je logovanje neuspesno
	 */
	boolean ulogujKorisnika(DTOLogovanje logovanje);
	boolean izmeniLozinku(DTOIzmenaLozinke lozinka, String name);	
}
