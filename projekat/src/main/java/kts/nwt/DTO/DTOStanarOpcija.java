package kts.nwt.DTO;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import kts.nwt.validation.EmailValidation;

public class DTOStanarOpcija extends DTOOpcija {

	@NotNull(message = "Nije unesen tekst!")
	@Size(min = 1, message = "Nije unesen tekst!")
	private String tekst;
	
	@EmailValidation
	private String email;
	
	public DTOStanarOpcija() {
		
	}

	public DTOStanarOpcija(String tekst, String email) {
		super();
		this.tekst = tekst;
		this.email = email;
	}

	public String getTekst() {
		return tekst;
	}

	public void setTekst(String tekst) {
		this.tekst = tekst;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
}
