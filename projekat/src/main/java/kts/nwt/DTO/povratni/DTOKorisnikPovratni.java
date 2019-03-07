package kts.nwt.DTO.povratni;

import kts.nwt.domain.Firma;
import kts.nwt.domain.Institucija;
import kts.nwt.domain.Korisnik;
import kts.nwt.domain.Stanar;

public class DTOKorisnikPovratni {
	private Long id;
	private String naziv;
	private String email;
	private String uloga;
	
	public DTOKorisnikPovratni() {}
	
	public static DTOKorisnikPovratni konvertuj(Korisnik k){
		DTOKorisnikPovratni retval = new DTOKorisnikPovratni();
		retval.setId(k.getId());
		retval.setEmail(k.getEmail());
		retval.setUloga(k.getAuthorities());
		if(k instanceof Stanar){
			retval.setNaziv(((Stanar)k).getIme() + " " + ((Stanar)k).getPrezime());
		}
		else if(k instanceof Firma){
			retval.setNaziv(((Firma)k).getNaziv());
		}
		else if(k instanceof Institucija){
			retval.setNaziv(((Institucija)k).getNaziv());
		}
		return retval;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNaziv() {
		return naziv;
	}

	public void setNaziv(String naziv) {
		this.naziv = naziv;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUloga() {
		return uloga;
	}

	public void setUloga(String uloga) {
		this.uloga = uloga;
	}
	
}
