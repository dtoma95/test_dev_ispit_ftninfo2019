package kts.nwt.DTO;

import java.util.Date;

public class DTOKvarOperacije {

	private Long kvarId;
	
	private Long odgovornoLiceId;
	
	private Date vreme;

	public DTOKvarOperacije() {}
	
	public Long getKvarId() {
		return kvarId;
	}

	public void setKvarId(Long kvarId) {
		this.kvarId = kvarId;
	}

	public Long getOdgovornoLiceId() {
		return odgovornoLiceId;
	}

	public void setOdgovornoLiceId(Long odgovornoLiceId) {
		this.odgovornoLiceId = odgovornoLiceId;
	}

	public Date getVreme() {
		return vreme;
	}

	public void setVreme(Date vreme) {
		this.vreme = vreme;
	}
	
	
	
}
