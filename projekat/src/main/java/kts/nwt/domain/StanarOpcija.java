package kts.nwt.domain;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class StanarOpcija extends Opcija implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@OneToOne
	@JsonIgnore
	private Stanar stanar;
	
	public StanarOpcija() {
		
	}

	public StanarOpcija(Stanar stanar) {
		super();
		this.stanar = stanar;
	}

	public Stanar getStanar() {
		return stanar;
	}

	public void setStanar(Stanar stanar) {
		this.stanar = stanar;
	}
	
}
