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

@Entity
public class Stanar extends Korisnik implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(nullable = false)
	private String ime;
	
	@Column(nullable = false)
	private String prezime;
	
	@ManyToOne
	private Stan stan;
	
	@OneToMany
	private List<Stan> vlasnikStanova;
	
	public Stanar() {
		vlasnikStanova = new ArrayList<Stan>();
	}

	public Stanar(String email, String lozinka, String authorities, String ime, String prezime) {
		super(email, lozinka, authorities);
		this.ime = ime;
		this.prezime = prezime;
	}

	public Stanar(String ime, String prezime, Stan stan,
			List<Stan> vlasnikStanova) {
		super();
		this.ime = ime;
		this.prezime = prezime;
		this.stan = stan;
		this.vlasnikStanova = vlasnikStanova;
	}

	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getIme() {
		return ime;
	}

	public void setIme(String ime) {
		this.ime = ime;
	}

	public String getPrezime() {
		return prezime;
	}

	public void setPrezime(String prezime) {
		this.prezime = prezime;
	}

	public Stan getStan() {
		return stan;
	}

	public void setStan(Stan stan) {
		this.stan = stan;
	}

	public List<Stan> getVlasnikStanova() {
		return vlasnikStanova;
	}

	public void setVlasnikStanova(List<Stan> vlasnikStanova) {
		this.vlasnikStanova = vlasnikStanova;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj) return true;
		if (!(obj instanceof Stanar)) return false;
		
		Stanar s = (Stanar) obj;
        if ( !s.getId().equals(this.getId())) return false;
        
        return true;
	}
	
}
