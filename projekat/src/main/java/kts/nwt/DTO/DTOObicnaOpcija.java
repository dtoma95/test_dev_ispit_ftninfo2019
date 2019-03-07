package kts.nwt.DTO;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class DTOObicnaOpcija extends DTOOpcija {

	@NotNull(message = "Nije unesen tekst!")
	@Size(min = 1, message = "Nije unesen tekst!")
	private String tekst;
	
	public DTOObicnaOpcija() {
		
	}

	public DTOObicnaOpcija(String tekst) {
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
