package kts.nwt.domain;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Pitanje implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(nullable = false)
	private String tekst;
	
	@Column(nullable = false)
	@Enumerated(EnumType.ORDINAL)
	private VrstaPitanja vrstaPitanja;
	
	@OneToMany(cascade = CascadeType.ALL)
	private List<Opcija> opcije;
	
	@ManyToOne
	@JsonIgnore
	private PredlogTackeDnevnogReda predlogTackeDnevnogReda;
	
	@OneToOne
	@JsonIgnore
	private Stanar stanar;
	
	public Pitanje() {
		this.opcije = new ArrayList<Opcija>();
	}

	public Pitanje(String tekst, VrstaPitanja vrstaPitanja, PredlogTackeDnevnogReda predlogTackeDnevnogReda, Stanar stanar) {
		super();
		this.tekst = tekst;
		this.vrstaPitanja = vrstaPitanja;
		this.predlogTackeDnevnogReda = predlogTackeDnevnogReda;
		this.stanar = stanar;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public List<Opcija> getOpcije() {
		return opcije;
	}

	public void setOpcije(List<Opcija> opcije) {
		this.opcije = opcije;
	}

	public String getTekst() {
		return tekst;
	}

	public void setTekst(String tekst) {
		this.tekst = tekst;
	}

	public VrstaPitanja getVrstaPitanja() {
		return vrstaPitanja;
	}

	public void setVrstaPitanja(VrstaPitanja vrstaPitanja) {
		this.vrstaPitanja = vrstaPitanja;
	}

	public PredlogTackeDnevnogReda getPredlogTackeDnevnogReda() {
		return predlogTackeDnevnogReda;
	}

	public void setPredlogTackeDnevnogReda(
			PredlogTackeDnevnogReda predlogTackeDnevnogReda) {
		this.predlogTackeDnevnogReda = predlogTackeDnevnogReda;
	}

	public Stanar getStanar() {
		return stanar;
	}

	public void setStanar(Stanar stanar) {
		this.stanar = stanar;
	}
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj) return true;
		if (!(obj instanceof Pitanje)) return false;
		
		Pitanje a = (Pitanje) obj;
        if ( !a.getId().equals(this.getId())) return false;
        
        return true;
	}
}
