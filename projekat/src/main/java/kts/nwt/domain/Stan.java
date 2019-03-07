package kts.nwt.domain;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Stan implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@ManyToOne(optional = false)
	@JsonIgnore
	private Zgrada zgrada;
	
	@Column(nullable = false)
	private int broj;
	
	@ManyToOne
	@JsonIgnore
	private Stanar vlasnik;
	
	@OneToMany
	@JsonIgnore
	private List<Stanar> stanari;
	
	public Stan() {
		stanari = new ArrayList<Stanar>();
	}
	
	public Stan(Zgrada zgrada, int broj, Stanar vlasnik) {
		super();
		this.zgrada = zgrada;
		this.broj = broj;
		this.vlasnik = vlasnik;
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

	public int getBroj() {
		return broj;
	}

	public void setBroj(int broj) {
		this.broj = broj;
	}

	public Stanar getVlasnik() {
		return vlasnik;
	}

	public void setVlasnik(Stanar vlasnik) {
		this.vlasnik = vlasnik;
	}

	public List<Stanar> getStanari() {
		return stanari;
	}

	public void setStanari(List<Stanar> stanari) {
		this.stanari = stanari;
	}
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj) return true;
		if (!(obj instanceof Stan)) return false;
		
		Stan s = (Stan) obj;
        if ( !s.getId().equals(this.getId())) return false;
        
        return true;
	}
}
