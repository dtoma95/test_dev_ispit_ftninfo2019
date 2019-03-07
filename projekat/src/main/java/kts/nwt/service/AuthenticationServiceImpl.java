package kts.nwt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import kts.nwt.DTO.DTOIzmenaLozinke;
import kts.nwt.DTO.DTOLogovanje;
import kts.nwt.domain.Korisnik;
import kts.nwt.domain.Stanar;
import kts.nwt.exceptions.BadRequestException;
import kts.nwt.repository.KorisnikRepository;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {

	@Autowired
    private KorisnikRepository korisnikRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
    
    @Override
    public boolean ulogujKorisnika(DTOLogovanje logovanje) {

        Korisnik korisnik = this.korisnikRepository.findByEmail(logovanje.getEmail());

        //da li korisnik ima dodeljen stan	
        if (korisnik instanceof Stanar) {
        	if (((Stanar)korisnik).getStan() == null) {
        		return false;
        	}
        }
        
        return true;
    }

	@Override
	public boolean izmeniLozinku(DTOIzmenaLozinke lozinka, String name) {
		boolean velikoSlovo = false;
		boolean broj = false;
		for (char c : lozinka.getNovaLozinka().toCharArray()){
			if (Character.isDigit(c)){
				broj = true;
			}
			if (Character.isUpperCase(c)){
				velikoSlovo = true;
			}
		}
		if (!velikoSlovo){
			throw new BadRequestException("Lozinka mora da sadrzi veliko slovo!");
		}
		if (!broj){
			throw new BadRequestException("Lozinka mora da sadrzi broj!");
		}
		if (lozinka.getNovaLozinka().length() < 6){
			throw new BadRequestException("Lozinka mora da bude minimalno duga 6 karaktera!");
		}
		Korisnik korisnik = this.korisnikRepository.findByEmail(name);
		if (lozinka.getNovaLozinka().equals(lozinka.getPotvrdaNoveLozinke())){
			korisnik.setLozinka(passwordEncoder.encode(lozinka.getNovaLozinka()));
			this.korisnikRepository.save(korisnik);
			return true;
		}
		else
		{
			throw new BadRequestException("Nova lozinka i potvrda nove lozinke"
					+ " se ne poklapaju!");
		}
	}
	
}
