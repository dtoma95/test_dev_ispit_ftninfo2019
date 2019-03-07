package kts.nwt.DTO;

import java.util.Date;

import kts.nwt.domain.PredlogTackeDnevnogReda;
import kts.nwt.domain.Skupstina;
import kts.nwt.domain.Stanar;

public class PTDRDTO {
    private Long id;
    private String tekst;
    private Stanar stanar;
    private Skupstina skupstina;
    private Date datum;
    private boolean izmenjen;
    
    public PTDRDTO() {}
    
    public PTDRDTO(PredlogTackeDnevnogReda ptdr) {
    	this(ptdr.getId(), ptdr.getTekst(), ptdr.getStanar(), ptdr.getSkupstina(),
    			ptdr.getDatum(), ptdr.isIzmenjen());
    }

	public PTDRDTO(Long id, String tekst, Stanar stanar, Skupstina skupstina,
			Date datum, boolean izmenjen) {
		super();
		this.id = id;
		this.tekst = tekst;
		this.stanar = stanar;
		this.skupstina = skupstina;
		this.datum = datum;
		this.izmenjen = izmenjen;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTekst() {
		return tekst;
	}

	public void setTekst(String tekst) {
		this.tekst = tekst;
	}

	public Stanar getStanar() {
		return stanar;
	}

	public void setStanar(Stanar stanar) {
		this.stanar = stanar;
	}

	public Skupstina getSkupstina() {
		return skupstina;
	}

	public void setSkupstina(Skupstina skupstina) {
		this.skupstina = skupstina;
	}

	public Date getDatum() {
		return datum;
	}

	public void setDatum(Date datum) {
		this.datum = datum;
	}

	public boolean isIzmenjen() {
		return izmenjen;
	}

	public void setIzmenjen(boolean izmenjen) {
		this.izmenjen = izmenjen;
	}
    
}
