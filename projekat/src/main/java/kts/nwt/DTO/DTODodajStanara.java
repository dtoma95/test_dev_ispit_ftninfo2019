package kts.nwt.DTO;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import kts.nwt.validation.EmailValidation;
import kts.nwt.validation.PasswordValidation;

public class DTODodajStanara {

	@EmailValidation
	private String email;
	
	@PasswordValidation
	private String lozinka;
	
	@NotNull(message = "Nije uneto ime!")
	@Size(min = 1, message = "Ime nije odgovarajuceg formata")
	private String ime;
	
	@NotNull(message = "Nije uneto prezime!")
	@Size(min = 1, message = "Prezime nije odgovarajuceg formata")
	private String prezime;
	
	public DTODodajStanara() {}

	public DTODodajStanara(String email, String lozinka, String ime,
			String prezime) {
		super();
		this.email = email;
		this.lozinka = lozinka;
		this.ime = ime;
		this.prezime = prezime;
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

	public String getIme() {
		return ime;
	}

	public void setIme(String ime) {
		this.ime = ime;
	}

	public String getPrezime() {
		return prezime;
	}

	public void setPrezime(String prezime) {
		this.prezime = prezime;
	}
	
}
