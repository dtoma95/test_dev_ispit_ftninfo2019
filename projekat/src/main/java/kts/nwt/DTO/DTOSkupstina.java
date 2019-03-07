package kts.nwt.DTO;

import java.util.Date;

import kts.nwt.domain.Skupstina;


public class DTOSkupstina {

	private long zgradaId;
	
	private long skupstinaId;
	
	private Date pocetakSkupstine;
	
	private Date krajSkupstine;

	public static Skupstina toSkupstina(DTOSkupstina dto){
		Skupstina novi = new Skupstina();
		novi.setId(dto.getSkupstinaId());
		novi.setKrajSkupstine(dto.krajSkupstine);
		novi.setPocetakSkupstine(dto.pocetakSkupstine);
		return novi;
	}
	
	public DTOSkupstina() {
		super();
	}

	public long getZgradaId() {
		return zgradaId;
	}

	public void setZgradaId(long zgradaId) {
		this.zgradaId = zgradaId;
	}

	public long getSkupstinaId() {
		return skupstinaId;
	}

	public void setSkupstinaId(long skupstinaId) {
		this.skupstinaId = skupstinaId;
	}

	public Date getPocetakSkupstine() {
		return pocetakSkupstine;
	}

	public void setPocetakSkupstine(Date pocetakSkupstine) {
		this.pocetakSkupstine = pocetakSkupstine;
	}

	public Date getKrajSkupstine() {
		return krajSkupstine;
	}

	public void setKrajSkupstine(Date krajSkupstine) {
		this.krajSkupstine = krajSkupstine;
	}
	
	
}
