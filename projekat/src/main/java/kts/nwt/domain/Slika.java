package kts.nwt.domain;

import java.io.Serializable;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class Slika implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Lob @Basic(fetch = FetchType.LAZY)
	@Column(length=100000)
	private byte[] sadrzaj;
	
	public Slika() {
		
	}

	public Slika(byte[] lokacijaSlike) {
		super();
		this.sadrzaj = lokacijaSlike;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public byte[] getSadrzaj() {
		return sadrzaj;
	}

	public void setSadrzaj(byte[] sadrzaj) {
		this.sadrzaj = sadrzaj;
	}

}
