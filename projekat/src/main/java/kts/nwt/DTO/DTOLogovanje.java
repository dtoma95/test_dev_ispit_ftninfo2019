package kts.nwt.DTO;

import kts.nwt.validation.EmailValidation;
import kts.nwt.validation.PasswordValidation;

public class DTOLogovanje {

    @EmailValidation
    private String email;

    @PasswordValidation
    private String lozinka;

    public DTOLogovanje() {}

	public DTOLogovanje(String email, String lozinka) {
		super();
		this.email = email;
		this.lozinka = lozinka;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getLozinka() {
		return lozinka;
	}

	public void setLozinka(String lozinka) {
		this.lozinka = lozinka;
	}
	
}
