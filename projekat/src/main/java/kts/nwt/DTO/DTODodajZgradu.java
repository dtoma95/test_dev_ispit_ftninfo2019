package kts.nwt.DTO;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.Range;

public class DTODodajZgradu {

	@NotNull(message = "Nije uneta ulica!")
	@Size(min = 1, message = "Ulica nije odgovarajuce duzine!")
	private String ulica;

	@NotNull(message = "Nije unet broj zgrade!")
	@Range(min = 1, message = "Broj zgrade mora biti pozitivan broj!")
	private int broj;
	
	@NotNull(message = "Nije uneta lokacija!")
	@Size(min = 1, message = "Lokacija nije odgovarajuce duzine!")
	private String lokacija;
	
	@NotNull(message = "Nije unet broj stanova!")
	@Range(min = 1, message = "Broj stanova mora biti pozitivan broj!")
	private int brojStanova;
	
	public DTODodajZgradu() {}

	public DTODodajZgradu(String ulica, int broj, String lokacija) {
		super();
		this.ulica = ulica;
		this.broj = broj;
		this.lokacija = lokacija;
	}

	public DTODodajZgradu(String ulica, int broj, String lokacija, int brojStanova) {
		super();
		this.ulica = ulica;
		this.broj = broj;
		this.lokacija = lokacija;
		this.brojStanova = brojStanova;
	}

	public String getUlica() {
		return ulica;
	}

	public void setUlica(String ulica) {
		this.ulica = ulica;
	}

	public int getBroj() {
		return broj;
	}

	public void setBroj(int broj) {
		this.broj = broj;
	}

	public String getLokacija() {
		return lokacija;
	}

	public void setLokacija(String lokacija) {
		this.lokacija = lokacija;
	}

	public int getBrojStanova() {
		return brojStanova;
	}

	public void setBrojStanova(int brojStanova) {
		this.brojStanova = brojStanova;
	}

}
