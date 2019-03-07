package kts.nwt.DTO;

import java.util.Date;

import kts.nwt.domain.Skupstina;
import kts.nwt.domain.Stanar;
import kts.nwt.domain.Zgrada;

public class SkupstinaDTO {
    private Long id;
    private Zgrada zgrada;
    private Stanar predsednikSkupstine;
    private Date pocetakSkupstine;
    private Date krajSkupstine;
    
    public SkupstinaDTO() {}
    
    public SkupstinaDTO(Skupstina skupstina) {
    	this(skupstina.getId(), skupstina.getZgrada(), skupstina.getPredsednikSkupstine(),
    			skupstina.getPocetakSkupstine(), skupstina.getKrajSkupstine());
    }

	public SkupstinaDTO(Long id, Zgrada zgrada, Stanar predsednikSkupstine,
			Date pocetakSkupstine, Date krajSkupstine) {
		super();
		this.id = id;
		this.zgrada = zgrada;
		this.predsednikSkupstine = predsednikSkupstine;
		this.pocetakSkupstine = pocetakSkupstine;
		this.krajSkupstine = krajSkupstine;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Zgrada getZgrada() {
		return zgrada;
	}

	public void setZgrada(Zgrada zgrada) {
		this.zgrada = zgrada;
	}

	public Stanar getPredsednikSkupstine() {
		return predsednikSkupstine;
	}

	public void setPredsednikSkupstine(Stanar predsednikSkupstine) {
		this.predsednikSkupstine = predsednikSkupstine;
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
