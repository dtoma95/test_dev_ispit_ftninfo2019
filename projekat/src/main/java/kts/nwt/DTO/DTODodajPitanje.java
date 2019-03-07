package kts.nwt.DTO;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import kts.nwt.domain.VrstaPitanja;

public class DTODodajPitanje {

	@NotNull(message = "Nije unesen tekst!")
	@Size(min = 1, message = "Nije unesen tekst!")
	private String tekst;
	
	@NotNull(message = "Nije izabrana vrsta ankete!")
	private VrstaPitanja vrstaPitanja;
	
	@NotNull(message = "Nisu unete opcije!")
	@Valid
	private List<DTOOpcija> opcije;
	
	public DTODodajPitanje() {
		opcije = new ArrayList<DTOOpcija>();
	}

	public DTODodajPitanje(String tekst, VrstaPitanja vrstaPitanja) {
		super();
		this.tekst = tekst;
		this.vrstaPitanja = vrstaPitanja;
	}

	public String getTekst() {
		return tekst;
	}

	public void setTekst(String tekst) {
		this.tekst = tekst;
	}

	public VrstaPitanja getVrstaPitanja() {
		return vrstaPitanja;
	}

	public void setVrstaPitanja(VrstaPitanja vrstaPitanja) {
		this.vrstaPitanja = vrstaPitanja;
	}

	public List<DTOOpcija> getOpcije() {
		return opcije;
	}

	public void setOpcije(List<DTOOpcija> opcije) {
		this.opcije = opcije;
	}
}
