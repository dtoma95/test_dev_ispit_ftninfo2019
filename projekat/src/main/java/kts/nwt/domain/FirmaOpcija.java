package kts.nwt.domain;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class FirmaOpcija extends Opcija implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@OneToOne
	@JsonIgnore
	private Firma firma;
	
	public FirmaOpcija() {
		
	}

	public Firma getFirma() {
		return firma;
	}

	public void setFirma(Firma firma) {
		this.firma = firma;
	}
	
}
