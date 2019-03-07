package kts.nwt.domain;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Obavestenje implements Serializable {

private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(nullable = false)
	private String tekst;
	
	@Column(nullable = false)
	private Date datum;
	
	@ManyToOne
	private Stanar stanar;
	
	@ManyToOne
	private Zgrada zgrada;

	
	public Obavestenje() {
		super();
	}

	public Obavestenje(Long id, String tekst, Date datum, Stanar stanar, Zgrada zgrada) {
		super();
		this.id = id;
		this.tekst = tekst;
		this.datum = datum;
		this.stanar = stanar;
		this.zgrada = zgrada;
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

	public Date getDatum() {
		return datum;
	}

	public void setDatum(Date datum) {
		this.datum = datum;
	}

	public Stanar getStanar() {
		return stanar;
	}

	public void setStanar(Stanar stanar) {
		this.stanar = stanar;
	}

	public Zgrada getZgrada() {
		return zgrada;
	}

	public void setZgrada(Zgrada zgrada) {
		this.zgrada = zgrada;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj) return true;
		if (!(obj instanceof Obavestenje)) return false;
		
		Obavestenje o = (Obavestenje) obj;
        if ( !o.getId().equals(this.getId())) return false;
        
        return true;
	}
}
