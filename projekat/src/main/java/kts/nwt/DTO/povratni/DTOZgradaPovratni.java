package kts.nwt.DTO.povratni;

import kts.nwt.domain.Zgrada;

public class DTOZgradaPovratni {
	private Long id;
	private String lokacija;
	private	int broj;
	private String ulica;
	private int brojStanova;
	private DTOKorisnikPovratni predsednikSkupstine;
	
	public DTOZgradaPovratni(){}
	
	public static DTOZgradaPovratni konvertuj(Zgrada z){
		DTOZgradaPovratni retval = new DTOZgradaPovratni();
		retval.setId(z.getId());
		retval.setLokacija(z.getLokacija());
		retval.setBroj(z.getBroj());
		retval.setUlica(z.getUlica());
		retval.setBrojStanova(z.getStanovi().size());
		if (z.getPredsednikSkupstine() != null) {
		    retval.setPredsednikSkupstine(DTOKorisnikPovratni.konvertuj(z.getPredsednikSkupstine()));
		} else {
			retval.setPredsednikSkupstine(null);
		}
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

	public int getBroj() {
		return broj;
	}

	public void setBroj(int broj) {
		this.broj = broj;
	}

	public String getUlica() {
		return ulica;
	}

	public void setUlica(String ulica) {
		this.ulica = ulica;
	}

	public int getBrojStanova() {
		return brojStanova;
	}

	public void setBrojStanova(int brojStanova) {
		this.brojStanova = brojStanova;
	}

	public DTOKorisnikPovratni getPredsednikSkupstine() {
		return predsednikSkupstine;
	}

	public void setPredsednikSkupstine(DTOKorisnikPovratni predsednikSkupstine) {
		this.predsednikSkupstine = predsednikSkupstine;
	}

}
