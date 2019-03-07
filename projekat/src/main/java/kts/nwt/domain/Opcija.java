package kts.nwt.domain;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Inheritance
public class Opcija implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@ManyToMany
	private List<Stan> stanoviKojiSuGlasali;

	@ManyToOne
	@JsonIgnore
	private Pitanje pitanje;

	@Column(nullable = false)
	private String tekst;

	public Opcija() {
		this.stanoviKojiSuGlasali = new ArrayList<Stan>();
	}

	public Opcija(Pitanje pitanje, String tekst) {
		super();
		this.pitanje = pitanje;
		this.tekst = tekst;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public List<Stan> getStanoviKojiSuGlasali() {
		return stanoviKojiSuGlasali;
	}

	public void setStanoviKojiSuGlasali(List<Stan> stanoviKojiSuGlasali) {
		this.stanoviKojiSuGlasali = stanoviKojiSuGlasali;
	}

	public Pitanje getPitanje() {
		return pitanje;
	}

	public void setPitanje(Pitanje pitanje) {
		this.pitanje = pitanje;
	}

	public String getTekst() {
		return tekst;
	}

	public void setTekst(String tekst) {
		this.tekst = tekst;
	}
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj) return true;
		if (!(obj instanceof Opcija)) return false;
		
		Opcija o = (Opcija) obj;
        if ( !o.getId().equals(this.getId())) return false;
        
        return true;
	}
}
