package kts.nwt.DTO;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class DTOFirmaOpcija extends DTOOpcija {

	@NotNull(message = "Nije unesen tekst!")
	@Size(min = 1, message = "Nije unesen tekst!")
	private String tekst;
	
	@NotNull
	private Long firmaId;
	
	public DTOFirmaOpcija() {
		
	}

	public DTOFirmaOpcija(String tekst, Long firmaId) {
		super();
		this.tekst = tekst;
		this.firmaId = firmaId;
	}

	public String getTekst() {
		return tekst;
	}

	public void setTekst(String tekst) {
		this.tekst = tekst;
	}

	public Long getFirmaId() {
		return firmaId;
	}

	public void setFirmaId(Long firmaId) {
		this.firmaId = firmaId;
	}
	
}
