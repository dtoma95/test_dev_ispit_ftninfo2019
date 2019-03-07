package kts.nwt.DTO.povratni;

import kts.nwt.domain.Stan;

public class DTOStanPovratni {
	private Long id;
	private int broj;
	private Long zgradaId;
	private DTOKorisnikPovratni vlasnik;
	private int brojStanara;
	
	public DTOStanPovratni(){}
	
	public static DTOStanPovratni konvertuj(Stan s){
		DTOStanPovratni retval = new DTOStanPovratni();
		retval.setId(s.getId());
		retval.setBroj(s.getBroj());
		retval.setZgradaId(s.getZgrada().getId());
		if (s.getVlasnik() != null){
			retval.setVlasnik(DTOKorisnikPovratni.konvertuj(s.getVlasnik()));
		} else {
			retval.setVlasnik(null);
		}
		retval.setBrojStanara(s.getStanari().size());
		return retval;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getBroj() {
		return broj;
	}

	public void setBroj(int broj) {
		this.broj = broj;
	}

	public Long getZgradaId() {
		return zgradaId;
	}

	public void setZgradaId(Long zgradaId) {
		this.zgradaId = zgradaId;
	}

	public DTOKorisnikPovratni getVlasnik() {
		return vlasnik;
	}

	public void setVlasnik(DTOKorisnikPovratni vlasnik) {
		this.vlasnik = vlasnik;
	}

	public int getBrojStanara() {
		return brojStanara;
	}

	public void setBrojStanara(int brojStanara) {
		this.brojStanara = brojStanara;
	}
	
}
