package kts.nwt.DTO;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class DTODodajObavestenje {
	
	@NotNull(message = "Nije unet nikakav tekst za obavestenje!")
	@Size(min = 1, message = "Nije unet nikakav tekst za obavestenje!")
	private String tekst;

	public DTODodajObavestenje() {
		
	}

	public DTODodajObavestenje(String tekst) {
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
