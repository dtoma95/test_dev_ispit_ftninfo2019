package kts.nwt.DTO;

import javax.validation.constraints.NotNull;

public class DTOGlas {

	@NotNull(message = "Nije unet stan!")
	private Long stanId;
	
	@NotNull(message = "Nije uneta opcija!")
	private Long opcijaId;
	
	public DTOGlas() {
		
	}

	public DTOGlas(Long stanId, Long opcijaId) {
		super();
		this.stanId = stanId;
		this.opcijaId = opcijaId;
	}

	public Long getStanId() {
		return stanId;
	}

	public void setStanId(Long stanId) {
		this.stanId = stanId;
	}

	public Long getOpcijaId() {
		return opcijaId;
	}

	public void setOpcijaId(Long opcijaId) {
		this.opcijaId = opcijaId;
	}
}
