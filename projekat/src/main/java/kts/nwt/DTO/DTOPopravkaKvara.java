package kts.nwt.DTO;

import java.util.Date;

public class DTOPopravkaKvara {
	
	private Date vremePopravke;

	public Date getVremePopravke() {
		return vremePopravke;
	}

	public void setVremePopravke(Date vremePopravke) {
		this.vremePopravke = vremePopravke;
	}

	public DTOPopravkaKvara(Date vremePopravke) {
		super();
		this.vremePopravke = vremePopravke;
	}

	public DTOPopravkaKvara() {
		super();
	}
	
	
	
}
