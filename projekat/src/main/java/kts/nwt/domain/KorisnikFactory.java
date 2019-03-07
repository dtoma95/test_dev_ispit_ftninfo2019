package kts.nwt.domain;

import java.util.Collection;

import kts.nwt.security.SecurityKorisnik;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;

public class KorisnikFactory {

	public static SecurityKorisnik create(Korisnik korisnik) {
        Collection<? extends GrantedAuthority> authorities;
        try {
            authorities = AuthorityUtils.commaSeparatedStringToAuthorityList(korisnik.getAuthorities());
        } catch (Exception e) {
            authorities = null;
        }
        
        if (korisnik instanceof Stanar) {
        	Stanar s = (Stanar)korisnik;
        	
        	if (s.getStan() == null) {
        		return new SecurityKorisnik(
                        s.getId(),
                        s.getEmail(),
                        s.getLozinka(),
                        0L,
                        authorities);
        	} else {
        		return new SecurityKorisnik(
                        s.getId(),
                        s.getEmail(),
                        s.getLozinka(),
                        s.getStan().getZgrada().getId(),
                        authorities);
        	}
        }
        
        return new SecurityKorisnik(
                korisnik.getId(),
                korisnik.getEmail(),
                korisnik.getLozinka(),
                0L,
                authorities
        );
    }
}
