package kts.nwt.domain;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class Skupstina implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(nullable = false)
	private Date pocetakSkupstine;
	
	@Column(nullable = false)
	private Date krajSkupstine;
	
	@OneToMany
	private List<PredlogTackeDnevnogReda> predloziZaTackeDnevnogReda;
	
	@OneToOne
	private Stanar predsednikSkupstine;
	
	@ManyToOne
	private Zgrada zgrada;
	
	public Skupstina() {
		this.predloziZaTackeDnevnogReda = new ArrayList<PredlogTackeDnevnogReda>();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getPocetakSkupstine() {
		return pocetakSkupstine;
	}

	public void setPocetakSkupstine(Date pocetakSkupstine) {
		this.pocetakSkupstine = pocetakSkupstine;
	}

	public Date getKrajSkupstine() {
		return krajSkupstine;
	}

	public void setKrajSkupstine(Date krajSkupstine) {
		this.krajSkupstine = krajSkupstine;
	}

	public List<PredlogTackeDnevnogReda> getPredloziZaTackeDnevnogReda() {
		return predloziZaTackeDnevnogReda;
	}

	public void setPredloziZaTackeDnevnogReda(
			List<PredlogTackeDnevnogReda> predloziZaTackeDnevnogReda) {
		this.predloziZaTackeDnevnogReda = predloziZaTackeDnevnogReda;
	}

	public Stanar getPredsednikSkupstine() {
		return predsednikSkupstine;
	}

	public void setPredsednikSkupstine(Stanar predsednikSkupstine) {
		this.predsednikSkupstine = predsednikSkupstine;
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
		if (!(obj instanceof Skupstina)) return false;
		
		Skupstina s = (Skupstina) obj;
        if ( !s.getId().equals(this.getId())) return false;
        
        return true;
	}
}
