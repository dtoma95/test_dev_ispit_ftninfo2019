package kts.nwt.DTO.povratni;

import java.util.ArrayList;

import kts.nwt.domain.FirmaOpcija;
import kts.nwt.domain.Opcija;
import kts.nwt.domain.Stan;
import kts.nwt.domain.StanarOpcija;

public class DTOOpcijaPovratni {
	private Long id;
	private String tekst;
	private	Long pitanjeId;
	private String email;
	private Long firmaId;
	private ArrayList<DTOStanPovratni> stanovi;
	
	public DTOOpcijaPovratni(){}
	
	public static DTOOpcijaPovratni konvertuj(Opcija o){
		DTOOpcijaPovratni retval = new DTOOpcijaPovratni();
		retval.setId(o.getId());
		retval.setTekst(o.getTekst());
		retval.setPitanjeId(o.getPitanje().getId());
		if (o instanceof StanarOpcija) {
			StanarOpcija so = (StanarOpcija)o;
			retval.setEmail(so.getStanar().getEmail());
		}
		if (o instanceof FirmaOpcija) {
			FirmaOpcija fo = (FirmaOpcija)o;
			retval.setFirmaId(fo.getFirma().getId());
		}
		retval.setStanovi(new ArrayList<DTOStanPovratni>());
		for (Stan stan : o.getStanoviKojiSuGlasali()) {
			retval.getStanovi().add(DTOStanPovratni.konvertuj(stan));
		}
		return retval;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTekst() {
		return tekst;
	}

	public void setTekst(String tekst) {
		this.tekst = tekst;
	}

	public Long getPitanjeId() {
		return pitanjeId;
	}

	public void setPitanjeId(Long pitanjeId) {
		this.pitanjeId = pitanjeId;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Long getFirmaId() {
		return firmaId;
	}

	public void setFirmaId(Long firmaId) {
		this.firmaId = firmaId;
	}

	public ArrayList<DTOStanPovratni> getStanovi() {
		return stanovi;
	}

	public void setStanovi(ArrayList<DTOStanPovratni> stanovi) {
		this.stanovi = stanovi;
	}

	
	
}
