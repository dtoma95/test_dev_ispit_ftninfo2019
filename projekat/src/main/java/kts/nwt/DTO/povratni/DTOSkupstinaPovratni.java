package kts.nwt.DTO.povratni;

import java.util.Date;

import kts.nwt.domain.Skupstina;

public class DTOSkupstinaPovratni {
	private Long id;
	private Date krajSkupstine;
	private Date pocetakSkupstine;
	private DTOKorisnikPovratni predsednikSkupstine;
	private Long zgradaId;
	
	
	public DTOSkupstinaPovratni(){}
	
	public static DTOSkupstinaPovratni konvertuj(Skupstina sk){
		DTOSkupstinaPovratni retval = new DTOSkupstinaPovratni();
		retval.setId(sk.getId());
		retval.setKrajSkupstine(sk.getKrajSkupstine());
		retval.setPocetakSkupstine(sk.getPocetakSkupstine());
		retval.setPredsednikSkupstine(DTOKorisnikPovratni.konvertuj(sk.getPredsednikSkupstine()));
		retval.setZgradaId(sk.getZgrada().getId());
		return retval;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getKrajSkupstine() {
		return krajSkupstine;
	}

	public void setKrajSkupstine(Date krajSkupstine) {
		this.krajSkupstine = krajSkupstine;
	}

	public Date getPocetakSkupstine() {
		return pocetakSkupstine;
	}

	public void setPocetakSkupstine(Date pocetakSkupstine) {
		this.pocetakSkupstine = pocetakSkupstine;
	}

	public DTOKorisnikPovratni getPredsednikSkupstine() {
		return predsednikSkupstine;
	}

	public void setPredsednikSkupstine(DTOKorisnikPovratni predsednikSkupstine) {
		this.predsednikSkupstine = predsednikSkupstine;
	}

	public Long getZgradaId() {
		return zgradaId;
	}

	public void setZgradaId(Long zgradaId) {
		this.zgradaId = zgradaId;
	}
	
	
}
