package kts.nwt.DTO;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class DTODodajPTDR {
	
	@NotNull(message = "Nije unet nikakav tekst za predlog tacke dnevnog reda!")
	@Size(min = 1, message = "Nije unet nikakav tekst za predlog tacke dnevnog reda!")
	private String tekst;
	

	public DTODodajPTDR() {
		super();
	}


	public DTODodajPTDR(String tekst, Long skupstinaId) {
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
