package kts.nwt.domain;

import java.util.Date;

public class Kriterijum {
    private Long id;
    private Date OD;
    private Date DO;
    
    public Kriterijum() {}

	public Kriterijum(Long id, Date oD, Date dO) {
		super();
		this.id = id;
		OD = oD;
		DO = dO;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getOD() {
		return OD;
	}

	public void setOD(Date oD) {
		OD = oD;
	}

	public Date getDO() {
		return DO;
	}

	public void setDO(Date dO) {
		DO = dO;
	}
    
}
