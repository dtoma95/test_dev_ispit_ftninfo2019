package kts.nwt.DTO.povratni;

import java.util.Date;

import kts.nwt.domain.Obavestenje;

public class DTOObavestenjePovratni {
	private Long id;
	private	Long zgradaId;
	private	Date datum;
	private String tekst;
	private DTOKorisnikPovratni stanar;
	
	public DTOObavestenjePovratni(){}
	
	public static DTOObavestenjePovratni konvertuj(Obavestenje o){
		DTOObavestenjePovratni retval = new DTOObavestenjePovratni();
		retval.setId(o.getId());
		retval.setDatum(o.getDatum());
		retval.setTekst(o.getTekst());
		retval.setStanar(DTOKorisnikPovratni.konvertuj(o.getStanar()));
		retval.setZgradaId(o.getZgrada().getId());
		return retval;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getZgradaId() {
		return zgradaId;
	}

	public void setZgradaId(Long zgradaId) {
		this.zgradaId = zgradaId;
	}

	public Date getDatum() {
		return datum;
	}

	public void setDatum(Date datum) {
		this.datum = datum;
	}

	public String getTekst() {
		return tekst;
	}

	public void setTekst(String tekst) {
		this.tekst = tekst;
	}

	public DTOKorisnikPovratni getStanar() {
		return stanar;
	}

	public void setStanar(DTOKorisnikPovratni stanar) {
		this.stanar = stanar;
	}
	
	
	
}
