package kts.nwt.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Institucija extends Korisnik implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Column(nullable = false)
	private String naziv;
	
	@Column(nullable = false)
	private String lokacija;
	
	@Column(nullable = false)
	private String brojTelefona;
	
	public Institucija() {
		
	}

	public Institucija(String email, String lozinka, String authorities, String naziv, String lokacija, String brojTelefona) {
		super(email, lozinka, authorities);
		this.naziv = naziv;
		this.lokacija = lokacija;
		this.brojTelefona = brojTelefona;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNaziv() {
		return naziv;
	}

	public void setNaziv(String naziv) {
		this.naziv = naziv;
	}

	public String getLokacija() {
		return lokacija;
	}

	public void setLokacija(String lokacija) {
		this.lokacija = lokacija;
	}

	public String getBrojTelefona() {
		return brojTelefona;
	}

	public void setBrojTelefona(String brojTelefona) {
		this.brojTelefona = brojTelefona;
	}
	
}
