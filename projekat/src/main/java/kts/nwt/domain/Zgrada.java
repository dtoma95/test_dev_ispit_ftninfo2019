package kts.nwt.domain;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class Zgrada implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(nullable = false)
	private String ulica;
	
	@Column(nullable = false)
	private int broj;

	@Column(nullable = false)
	private String lokacija;
	
	@OneToMany(cascade = CascadeType.ALL)
	private List<Kvar> kvarovi;
	
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Stan> stanovi;
	
	@OneToMany(cascade = CascadeType.ALL)
	private List<Obavestenje> obavestenja;
	
	@OneToMany(cascade = CascadeType.ALL)
	private List<Skupstina> skupstine;
	
	@OneToMany(cascade = CascadeType.ALL)
	private List<PredlogTackeDnevnogReda> ptdrovi;
	
	@ManyToMany
	private List<Firma> firme;
	
	@OneToOne
	private Stanar predsednikSkupstine;
	
	public Zgrada() {
		kvarovi = new ArrayList<Kvar>();
		stanovi = new ArrayList<Stan>();
		skupstine = new ArrayList<Skupstina>();
		obavestenja = new ArrayList<Obavestenje>();
		firme = new ArrayList<Firma>();
	}

	public Zgrada(String ulica, int broj, String lokacija) {
		super();
		this.ulica = ulica;
		this.broj = broj;
		this.lokacija = lokacija;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUlica() {
		return ulica;
	}

	public void setUlica(String ulica) {
		this.ulica = ulica;
	}

	public int getBroj() {
		return broj;
	}

	public void setBroj(int broj) {
		this.broj = broj;
	}

	public String getLokacija() {
		return lokacija;
	}

	public void setLokacija(String lokacija) {
		this.lokacija = lokacija;
	}

	public List<Kvar> getKvarovi() {
		return kvarovi;
	}

	public void setKvarovi(List<Kvar> kvarovi) {
		this.kvarovi = kvarovi;
	}

	public List<Stan> getStanovi() {
		return stanovi;
	}

	public void setStanovi(List<Stan> stanovi) {
		this.stanovi = stanovi;
	}
	
	public List<Obavestenje> getObavestenja() {
		return obavestenja;
	}

	public void setObavestenja(List<Obavestenje> obavestenja) {
		this.obavestenja = obavestenja;
	}

	public Stanar getPredsednikSkupstine() {
		return predsednikSkupstine;
	}

	public void setPredsednikSkupstine(Stanar predsednikSkupstine) {
		this.predsednikSkupstine = predsednikSkupstine;
	}

	public List<Skupstina> getSkupstine() {
		return skupstine;
	}

	public void setSkupstine(List<Skupstina> skupstine) {
		this.skupstine = skupstine;
	}
	
	public List<Firma> getFirme() {
		return firme;
	}

	public void setFirme(List<Firma> firme) {
		this.firme = firme;
	}

	public List<PredlogTackeDnevnogReda> getPtdrovi() {
		return ptdrovi;
	}

	public void setPtdrovi(List<PredlogTackeDnevnogReda> ptdrovi) {
		this.ptdrovi = ptdrovi;
	}
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj) return true;
		if (!(obj instanceof Zgrada)) return false;
		
		Zgrada z = (Zgrada) obj;
        if ( !z.getId().equals(this.getId())) return false;
        
        return true;
	}
}
