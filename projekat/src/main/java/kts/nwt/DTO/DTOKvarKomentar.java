package kts.nwt.DTO;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class DTOKvarKomentar {
	
	@NotNull(message = "Niste uneli tekst komentara!")
	@Size(min = 1, message = "Niste uneli tekst komentara!")
	private String tekst;
	
	public DTOKvarKomentar() {
		
	}

	public String getTekst() {
		return tekst;
	}

	public void setTekst(String tekst) {
		this.tekst = tekst;
	}
	
}
