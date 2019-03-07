package kts.nwt.DTO;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import kts.nwt.domain.Kvar;

public class DTOKvar {
	
	private Long id;
	
	@NotNull(message = "Nije unet opis za kvar!")
    @Size(min = 1, message = "Opis nije u odgovarajucem formatu!")
	private String opis;
	
	@NotNull(message = "Nije uneta lokacija kvar!")
	@Size(min = 1, message = "Lokacija nije u odgovarajucem formatu!")
	private String lokacija;
	
	private Long odgovornoLiceId;
	
	public DTOKvar() {
		
	}
	
	public static DTOKvar kvarToDTO(Kvar k){
		DTOKvar retval = new DTOKvar();
		retval.setId(k.getId());
		retval.setLokacija(k.getLokacija());
		retval.setOdgovornoLiceId(k.getOdgovornoLice().getId());
		retval.setOpis(k.getOpis());
		return retval;
	}
	
	public DTOKvar(String opis, String lokacija,
			Long odgovornoLiceId) {
		super();
		this.opis = opis;
		this.lokacija = lokacija;
		this.odgovornoLiceId = odgovornoLiceId;
	}

	public String getOpis() {
		return opis;
	}

	public void setOpis(String opis) {
		this.opis = opis;
	}

	public String getLokacija() {
		return lokacija;
	}

	public void setLokacija(String lokacija) {
		this.lokacija = lokacija;
	}

	public Long getOdgovornoLiceId() {
		return odgovornoLiceId;
	}

	public void setOdgovornoLiceId(Long odgovornoLiceId) {
		this.odgovornoLiceId = odgovornoLiceId;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
}
