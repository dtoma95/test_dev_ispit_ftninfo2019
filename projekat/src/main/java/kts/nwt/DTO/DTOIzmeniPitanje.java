package kts.nwt.DTO;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class DTOIzmeniPitanje {

	@NotNull(message = "Nije unesen tekst!")
	@Size(min = 1, message = "Tekst nije odgovarajuceg formata")
	private String tekst;
	
	public DTOIzmeniPitanje() {
		
	}

	public DTOIzmeniPitanje(String tekst) {
		super();
		this.tekst = tekst;
	}

	public String getTekst() {
		return tekst;
	}

	public void setTekst(String tekst) {
		this.tekst = tekst;
	}
}
