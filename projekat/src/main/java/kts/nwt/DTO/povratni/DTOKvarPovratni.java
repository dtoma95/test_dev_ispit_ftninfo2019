package kts.nwt.DTO.povratni;

import java.util.ArrayList;
import java.util.Date;

import kts.nwt.domain.Komentar;
import kts.nwt.domain.Kvar;
import kts.nwt.domain.Slika;

public class DTOKvarPovratni {
	private Long id;
	private String lokacija;
	private String opis;
	private	Date datumPostavljanja;
	private Date vremePopravke;
	
	private DTOKorisnikPovratni stanar;
	private DTOKorisnikPovratni odgovornoLice;
	private ArrayList<Long> slike;
	private	Long zgradaId;
	private boolean gotovo;
	private ArrayList<DTOKomentarPovratni> komentari;
	
	public DTOKvarPovratni() {}
	
	public static DTOKvarPovratni konvertuj(Kvar k){
		DTOKvarPovratni retval = new DTOKvarPovratni();
		retval.setId(k.getId());
		retval.setLokacija(k.getLokacija());
		retval.setOpis(k.getOpis());
		retval.setDatumPostavljanja(k.getDatumPostavljanja());
		retval.setVremePopravke(k.getVremePopravke());
		
		retval.setGotovo(k.isGotovo());
		retval.setZgradaId(k.getZgrada().getId());
		retval.setStanar(DTOKorisnikPovratni.konvertuj(k.getStanar()));
		retval.setOdgovornoLice(DTOKorisnikPovratni.konvertuj(k.getOdgovornoLice()));
		
		retval.setSlike(new ArrayList<Long>());
		for (Slika s : k.getSlike()) {
			retval.getSlike().add(s.getId());
		};
		
		retval.setKomentari(new ArrayList<DTOKomentarPovratni>());
		for (Komentar kom : k.getKomentari()) {
			retval.getKomentari().add(DTOKomentarPovratni.konvertuj(kom));
		};
		
		return retval;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getLokacija() {
		return lokacija;
	}

	public void setLokacija(String lokacija) {
		this.lokacija = lokacija;
	}

	public String getOpis() {
		return opis;
	}

	public void setOpis(String opis) {
		this.opis = opis;
	}

	public Date getDatumPostavljanja() {
		return datumPostavljanja;
	}

	public void setDatumPostavljanja(Date datumPostavljanja) {
		this.datumPostavljanja = datumPostavljanja;
	}

	public Date getVremePopravke() {
		return vremePopravke;
	}

	public void setVremePopravke(Date vremePopravke) {
		this.vremePopravke = vremePopravke;
	}

	public DTOKorisnikPovratni getStanar() {
		return stanar;
	}

	public void setStanar(DTOKorisnikPovratni stanar) {
		this.stanar = stanar;
	}

	public DTOKorisnikPovratni getOdgovornoLice() {
		return odgovornoLice;
	}

	public void setOdgovornoLice(DTOKorisnikPovratni odgovornoLice) {
		this.odgovornoLice = odgovornoLice;
	}

	public ArrayList<Long> getSlike() {
		return slike;
	}

	public void setSlike(ArrayList<Long> slike) {
		this.slike = slike;
	}

	public Long getZgradaId() {
		return zgradaId;
	}

	public void setZgradaId(Long zgradaId) {
		this.zgradaId = zgradaId;
	}

	public boolean isGotovo() {
		return gotovo;
	}

	public void setGotovo(boolean gotovo) {
		this.gotovo = gotovo;
	}

	public ArrayList<DTOKomentarPovratni> getKomentari() {
		return komentari;
	}

	public void setKomentari(ArrayList<DTOKomentarPovratni> komentari) {
		this.komentari = komentari;
	}
	
	
	
}
