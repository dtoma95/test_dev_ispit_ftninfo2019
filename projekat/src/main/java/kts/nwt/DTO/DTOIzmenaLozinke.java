package kts.nwt.DTO;

import kts.nwt.validation.PasswordValidation;

public class DTOIzmenaLozinke {

	@PasswordValidation
    private String staraLozinka;
	
	
	@PasswordValidation
    private String novaLozinka;
	
	
	@PasswordValidation
    private String potvrdaNoveLozinke;


	
	
	
	public DTOIzmenaLozinke(String staraLozinka, String novaLozinka, String potvrdaNoveLozinke) {
		super();
		this.staraLozinka = staraLozinka;
		this.novaLozinka = novaLozinka;
		this.potvrdaNoveLozinke = potvrdaNoveLozinke;
	}


	public DTOIzmenaLozinke() {
		super();
	}


	public String getStaraLozinka() {
		return staraLozinka;
	}


	public void setStaraLozinka(String staraLozinka) {
		this.staraLozinka = staraLozinka;
	}


	public String getNovaLozinka() {
		return novaLozinka;
	}


	public void setNovaLozinka(String novaLozinka) {
		this.novaLozinka = novaLozinka;
	}


	public String getPotvrdaNoveLozinke() {
		return potvrdaNoveLozinke;
	}


	public void setPotvrdaNoveLozinke(String potvrdaNoveLozinke) {
		this.potvrdaNoveLozinke = potvrdaNoveLozinke;
	}
	
	
	
}
