package kts.nwt.DTO;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class DTOIzmenaObavestenja {
	
	@NotNull(message = "Nije unet tekst obavestenja!")
	@Size(min = 1, message = "Obavestenje nije odgovarajuceg formata")
    private String noviTekst;

	public DTOIzmenaObavestenja() {
		super();
	}

	public DTOIzmenaObavestenja(String noviTekst) {
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
