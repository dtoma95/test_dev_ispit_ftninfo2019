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
public class Kvar implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(nullable = false)
	private String opis;
	
	@Column(nullable = false)
	private String lokacija;
	
	@Column(nullable = false)
	private Date datumPostavljanja;
	
	@Column
	private Date vremePopravke;
	
	@Column(nullable = false)
	private boolean gotovo;
	
	@ManyToOne
	@JsonIgnore
	private Korisnik odgovornoLice;
	
	@ManyToOne(optional = false)
	@JsonIgnore
	private Stanar stanar;
	
	@ManyToOne(optional = false)
	@JsonIgnore
	private Zgrada zgrada;
	
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval=true)
	private List<Slika> slike;
	
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval=true)
	private List<Komentar> komentari;
	
	@OneToOne
	private Predracun predracun;
	
	public Kvar() {
		this.slike = new ArrayList<Slika>();
		this.komentari = new ArrayList<Komentar>();
	}

	public Kvar(String opis, String lokacija, Date vremePopravke,
			boolean gotovo, Korisnik odgovornoLice, Stanar stanar, Zgrada zgrada) {
		super();
		this.opis = opis;
		this.lokacija = lokacija;
		this.vremePopravke = vremePopravke;
		this.gotovo = gotovo;
		this.odgovornoLice = odgovornoLice;
		this.stanar = stanar;
		this.zgrada = zgrada;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getOpis() {
		return opis;
	}

	public void setOpis(String opis) {
		this.opis = opis;
	}

	public String getLokacija() {
		return lokacija;
	}

	public void setLokacija(String lokacija) {
		this.lokacija = lokacija;
	}

	public Date getDatumPostavljanja() {
		return datumPostavljanja;
	}

	public void setDatumPostavljanja(Date datumPostavljanja) {
		this.datumPostavljanja = datumPostavljanja;
	}

	public Date getVremePopravke() {
		return vremePopravke;
	}

	public void setVremePopravke(Date vremePopravke) {
		this.vremePopravke = vremePopravke;
	}

	public boolean isGotovo() {
		return gotovo;
	}

	public void setGotovo(boolean gotovo) {
		this.gotovo = gotovo;
	}

	public Korisnik getOdgovornoLice() {
		return odgovornoLice;
	}

	public void setOdgovornoLice(Korisnik odgovornoLice) {
		this.odgovornoLice = odgovornoLice;
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

	public List<Slika> getSlike() {
		return slike;
	}

	public void setSlike(List<Slika> slike) {
		this.slike = slike;
	}

	public List<Komentar> getKomentari() {
		return komentari;
	}

	public void setKomentari(List<Komentar> komentari) {
		this.komentari = komentari;
	}

	public Predracun getPredracun() {
		return predracun;
	}

	public void setPredracun(Predracun predracun) {
		this.predracun = predracun;
	}
	
}
