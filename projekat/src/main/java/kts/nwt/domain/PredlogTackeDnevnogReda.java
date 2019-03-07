package kts.nwt.domain;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class PredlogTackeDnevnogReda implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(nullable = false)
	private String tekst;
	
	@Column(nullable = false)
	private Date datum;
	
	@Column(nullable = false)
	private boolean izmenjen;
	
	@Column
	private String odluka;
	
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Pitanje> anketa;
	
	@OneToOne
	@JsonIgnore
	private Stanar stanar;
	
	@ManyToOne
	@JsonIgnore
	private Skupstina skupstina;
	
	@ManyToOne
	@JsonIgnore
	private Zgrada zgrada;
	
	public PredlogTackeDnevnogReda() {
		this.anketa = new ArrayList<Pitanje>();
	}

	public PredlogTackeDnevnogReda(String tekst, Date datum, boolean izmenjen, Stanar stanar, Skupstina skupstina) {
		super();
		this.tekst = tekst;
		this.datum = datum;
		this.izmenjen = izmenjen;
		this.stanar = stanar;
		this.skupstina = skupstina;
	}

	public String getOdluka() {
		return odluka;
	}

	public void setOdluka(String odluka) {
		this.odluka = odluka;
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

	public boolean isIzmenjen() {
		return izmenjen;
	}

	public void setIzmenjen(boolean izmenjen) {
		this.izmenjen = izmenjen;
	}

	public List<Pitanje> getAnketa() {
		return anketa;
	}

	public void setAnketa(List<Pitanje> anketa) {
		this.anketa = anketa;
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

	public Zgrada getZgrada() {
		return zgrada;
	}

	public void setZgrada(Zgrada zgrada) {
		this.zgrada = zgrada;
	}
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj) return true;
		if (!(obj instanceof PredlogTackeDnevnogReda)) return false;
		
		PredlogTackeDnevnogReda ptdr = (PredlogTackeDnevnogReda) obj;
        if ( !ptdr.getId().equals(this.getId())) return false;
        
        return true;
	}
}
