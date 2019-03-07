package kts.nwt.DTO;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class DTOIzmenaPTDR {
	
	@NotNull(message = "Nije unet tekst predloga tacke dnevnog reda!")
	@Size(min = 1, message = "Predlog tacke dnevnog reda nije odgovarajuceg formata")
    private String noviTekst;

	public DTOIzmenaPTDR() {
		super();
	}

	public DTOIzmenaPTDR(String noviTekst) {
		super();
		this.noviTekst = noviTekst;
	}

	public String getNoviTekst() {
		return noviTekst;
	}

	public void setNoviTekst(String noviTekst) {
		this.noviTekst = noviTekst;
	}
	
	
	
}
