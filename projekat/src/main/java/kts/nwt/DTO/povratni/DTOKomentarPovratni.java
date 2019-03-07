package kts.nwt.DTO.povratni;

import java.util.Date;

import kts.nwt.domain.Komentar;

public class DTOKomentarPovratni {
	private Long id;
	private Date datum;
	private String tekst;
	private boolean menjan;
	private DTOKorisnikPovratni autor;
	
	
	public DTOKomentarPovratni() {}
	
	public static DTOKomentarPovratni konvertuj(Komentar k){
		DTOKomentarPovratni retval = new DTOKomentarPovratni();
		retval.setId(k.getId());
		retval.setDatum(k.getDatum());
		retval.setTekst(k.getTekst());
		retval.setMenjan(k.isMenjan());
		retval.setAutor(DTOKorisnikPovratni.konvertuj(k.getAutor()));
		return retval;
	}

	public boolean isMenjan() {
		return menjan;
	}

	public void setMenjan(boolean menjan) {
		this.menjan = menjan;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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

	public DTOKorisnikPovratni getAutor() {
		return autor;
	}

	public void setAutor(DTOKorisnikPovratni autor) {
		this.autor = autor;
	}
	
}
