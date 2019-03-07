package kts.nwt.DTO;

import javax.validation.constraints.NotNull;

public class DTOObrisiSlikuIzKvara {

	@NotNull(message = "Nije unet kvar!")
	private Long kvarId;
	
	@NotNull(message = "Nije uneta slika!")
	private Long slikaId;
	
	public DTOObrisiSlikuIzKvara () {
		
	}

	public DTOObrisiSlikuIzKvara(Long kvarId, Long slikaId) {
		super();
		this.kvarId = kvarId;
		this.slikaId = slikaId;
	}

	public Long getKvarId() {
		return kvarId;
	}

	public void setKvarId(Long kvarId) {
		this.kvarId = kvarId;
	}

	public Long getSlikaId() {
		return slikaId;
	}

	public void setSlikaId(Long slikaId) {
		this.slikaId = slikaId;
	}
	
}
