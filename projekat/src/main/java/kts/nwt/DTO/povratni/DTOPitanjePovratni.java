package kts.nwt.DTO.povratni;

import java.util.ArrayList;

import kts.nwt.domain.Pitanje;
import kts.nwt.domain.Opcija;
import kts.nwt.domain.VrstaPitanja;

public class DTOPitanjePovratni {
	private Long id;
	private	String tekst;
	private	Long ptdrId;
	
	private	VrstaPitanja vrstaPitanja;
	private DTOKorisnikPovratni stanar;
	private ArrayList<DTOOpcijaPovratni> opcije;
	
	public DTOPitanjePovratni(){}
	
	public static DTOPitanjePovratni konvertuj(Pitanje pitanje){
		DTOPitanjePovratni retval = new DTOPitanjePovratni();
		retval.setId(pitanje.getId());
		retval.setTekst(pitanje.getTekst());
		retval.setPtdrId(pitanje.getPredlogTackeDnevnogReda().getId());
		retval.setVrstaPitanja(pitanje.getVrstaPitanja());
		retval.setStanar(DTOKorisnikPovratni.konvertuj(pitanje.getStanar()));
		retval.setOpcije(new ArrayList<DTOOpcijaPovratni>());
		
		for (Opcija op : pitanje.getOpcije()) {
			retval.getOpcije().add(DTOOpcijaPovratni.konvertuj(op));
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

	public Long getPtdrId() {
		return ptdrId;
	}

	public void setPtdrId(Long ptdrId) {
		this.ptdrId = ptdrId;
	}

	public VrstaPitanja getVrstaPitanja() {
		return vrstaPitanja;
	}

	public void setVrstaPitanja(VrstaPitanja vrstaPitanja) {
		this.vrstaPitanja = vrstaPitanja;
	}

	public DTOKorisnikPovratni getStanar() {
		return stanar;
	}

	public void setStanar(DTOKorisnikPovratni stanar) {
		this.stanar = stanar;
	}

	public ArrayList<DTOOpcijaPovratni> getOpcije() {
		return opcije;
	}

	public void setOpcije(ArrayList<DTOOpcijaPovratni> opcije) {
		this.opcije = opcije;
	}
	
	
}
