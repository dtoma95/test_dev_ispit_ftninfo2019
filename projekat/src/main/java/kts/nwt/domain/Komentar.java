package kts.nwt.domain;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Komentar implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(nullable = false)
	private String tekst;
	
	@Column(nullable = false)
	private Date datum;
	
	@ManyToOne(optional = false)
	@JsonIgnore
	private Korisnik autor;
	
	@Column(nullable = false)
	private boolean menjan;
	
	
	public Komentar() {
		
	}

	public Komentar(String tekst, Date datum, Korisnik autor) {
		super();
		this.tekst = tekst;
		this.datum = datum;
		this.autor = autor;
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

	public Korisnik getAutor() {
		return autor;
	}

	public void setAutor(Korisnik autor) {
		this.autor = autor;
	}

	public boolean isMenjan() {
		return menjan;
	}

	public void setMenjan(boolean menjan) {
		this.menjan = menjan;
	}
	
}
