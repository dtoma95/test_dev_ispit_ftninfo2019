package kts.nwt.security;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

@SuppressWarnings("serial")
public class SecurityKorisnik implements UserDetails {
	
	private Long id;
	private String email;
	private String lozinka;
	private Long zgradaId;
	private Collection<? extends GrantedAuthority> authorities;
    private Boolean accountNonExpired = true;
    private Boolean accountNonLocked = true;
    private Boolean credentialsNonExpired = true;
    private Boolean enabled = true;
	
	public SecurityKorisnik() {
		super();
	}

	public SecurityKorisnik(Long id, String email, String lozinka, Long zgradaId,
			Collection<? extends GrantedAuthority> authorities) {
		super();
		this.id = id;
		this.email = email;
		this.lozinka = lozinka;
		this.zgradaId = zgradaId;
		this.authorities = authorities;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return email;
	}

	public void setUsername(String email) {
		this.email = email;
	}

	@JsonIgnore
	public String getPassword() {
		return lozinka;
	}

	public void setPassword(String lozinka) {
		this.lozinka = lozinka;
	}
	
	public Long getZgradaId() {
		return zgradaId;
	}

	public void setZgradaId(Long zgradaId) {
		this.zgradaId = zgradaId;
	}

	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	public void setAuthorities(Collection<? extends GrantedAuthority> authorities) {
		this.authorities = authorities;
	}

	@JsonIgnore
	public Boolean getAccountNonExpired() {
		return accountNonExpired;
	}

	public void setAccountNonExpired(Boolean accountNonExpired) {
		this.accountNonExpired = accountNonExpired;
	}
	
	@Override
    public boolean isAccountNonExpired() {
        return this.getAccountNonExpired();
    }

	@JsonIgnore
	public Boolean getAccountNonLocked() {
		return accountNonLocked;
	}

	public void setAccountNonLocked(Boolean accountNonLocked) {
		this.accountNonLocked = accountNonLocked;
	}
	
	@Override
    public boolean isAccountNonLocked() {
        return this.getAccountNonLocked();
    }
	
	@JsonIgnore
	public Boolean getCredentialsNonExpired() {
		return credentialsNonExpired;
	}

	public void setCredentialsNonExpired(Boolean credentialsNonExpired) {
		this.credentialsNonExpired = credentialsNonExpired;
	}
	
	@Override
    public boolean isCredentialsNonExpired() {
        return this.getCredentialsNonExpired();
    }

	@JsonIgnore
	public Boolean getEnabled() {
		return enabled;
	}

	public void setEnabled(Boolean enabled) {
		this.enabled = enabled;
	}
	
	@Override
    public boolean isEnabled() {
        return this.getEnabled();
    }
}
