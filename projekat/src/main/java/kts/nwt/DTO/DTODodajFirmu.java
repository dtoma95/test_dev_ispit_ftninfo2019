package kts.nwt.DTO;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import kts.nwt.validation.EmailValidation;
import kts.nwt.validation.PasswordValidation;

public class DTODodajFirmu {

	@EmailValidation
	private String email;
	
	@PasswordValidation
	private String lozinka;
	
	@NotNull(message = "Nije unet naziv!")
	@Size(min = 1, message = "Naziv nije odgovarajuceg formata")
	private String naziv;
	
	@NotNull(message = "Nije uneta adresa!")
	@Size(min = 1, message = "Adresa nije odgovarajuceg formata")
	private String adresa;
	
	
	@NotNull(message = "Nije unet broj telefona!")
	@Size(min = 1, message = "Broj telefona nije odgovarajuceg formata")
	private String brojTelefona;


	public DTODodajFirmu() {
		super();
	}


	public DTODodajFirmu(String email, String lozinka, String naziv, String adresa, String brojTelefona) {
		super();
		this.email = email;
		this.lozinka = lozinka;
		this.naziv = naziv;
		this.adresa = adresa;
		this.brojTelefona = brojTelefona;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getLozinka() {
		return lozinka;
	}


	public void setLozinka(String lozinka) {
		this.lozinka = lozinka;
	}


	public String getNaziv() {
		return naziv;
	}


	public void setNaziv(String naziv) {
		this.naziv = naziv;
	}


	public String getAdresa() {
		return adresa;
	}


	public void setAdresa(String adresa) {
		this.adresa = adresa;
	}


	public String getBrojTelefona() {
		return brojTelefona;
	}


	public void setBrojTelefona(String brojTelefona) {
		this.brojTelefona = brojTelefona;
	}

	
}
