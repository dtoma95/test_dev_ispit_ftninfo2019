package kts.nwt.DTO.povratni;

import java.util.ArrayList;
import java.util.Date;

import kts.nwt.domain.Pitanje;
import kts.nwt.domain.PredlogTackeDnevnogReda;

public class DTOPtdrPovratni {
	private Long id;
	private Date datum;
	private	String tekst;
	private	String odluka;
	
	private	Long skupstinaId;
	private	DTOKorisnikPovratni stanar;
	private	Long zgradaId;
	private	boolean izmenjen;
	
	private ArrayList<DTOPitanjePovratni> anketa;
	
	public DTOPtdrPovratni(){}
	
	public static DTOPtdrPovratni konvertuj(PredlogTackeDnevnogReda p){
		DTOPtdrPovratni retval = new DTOPtdrPovratni();
		retval.setId(p.getId());
		retval.setDatum(p.getDatum());
		retval.setTekst(p.getTekst());
		retval.setOdluka(p.getOdluka());
		if(p.getSkupstina() == null)
			retval.setSkupstinaId(null);
		else
			retval.setSkupstinaId(p.getSkupstina().getId());
		retval.setStanar(DTOKorisnikPovratni.konvertuj(p.getStanar()));
		retval.setZgradaId(p.getZgrada().getId());
		retval.setIzmenjen(p.isIzmenjen());
		retval.setAnketa(new ArrayList<DTOPitanjePovratni>());
		for (Pitanje pitanje : p.getAnketa()) {
			retval.getAnketa().add(DTOPitanjePovratni.konvertuj(pitanje));
		}
		return retval;
	}
	
	public ArrayList<DTOPitanjePovratni> getAnketa() {
		return anketa;
	}

	public void setAnketa(ArrayList<DTOPitanjePovratni> anketa) {
		this.anketa = anketa;
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

	public String getOdluka() {
		return odluka;
	}

	public void setOdluka(String odluka) {
		this.odluka = odluka;
	}

	public Long getSkupstinaId() {
		return skupstinaId;
	}

	public void setSkupstinaId(Long skupstinaId) {
		this.skupstinaId = skupstinaId;
	}

	public DTOKorisnikPovratni getStanar() {
		return stanar;
	}

	public void setStanar(DTOKorisnikPovratni stanar) {
		this.stanar = stanar;
	}

	public Long getZgradaId() {
		return zgradaId;
	}

	public void setZgradaId(Long zgradaId) {
		this.zgradaId = zgradaId;
	}

	public boolean isIzmenjen() {
		return izmenjen;
	}

	public void setIzmenjen(boolean izmenjen) {
		this.izmenjen = izmenjen;
	}
	
	
}
