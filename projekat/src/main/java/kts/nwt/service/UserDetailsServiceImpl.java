package kts.nwt.service;

import kts.nwt.domain.Korisnik;
import kts.nwt.domain.KorisnikFactory;
import kts.nwt.repository.KorisnikRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private KorisnikRepository korisnikRepository;
	
	@Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Korisnik korisnik = this.korisnikRepository.findByEmail(email);

        if (korisnik == null) {
            throw new UsernameNotFoundException(String.format("Nije pronadjen korisnik sa tim emailom '%s'.", email));
        } else {
            return KorisnikFactory.create(korisnik);
        }
    }
	
}
