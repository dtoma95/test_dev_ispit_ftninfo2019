package kts.nwt.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.support.PagedListHolder;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kts.nwt.domain.Obavestenje;
import kts.nwt.domain.Stan;
import kts.nwt.domain.Stanar;
import kts.nwt.domain.Zgrada;
import kts.nwt.exceptions.BadRequestException;
import kts.nwt.exceptions.NotFoundException;
import kts.nwt.repository.ObavestenjeRepository;
import kts.nwt.repository.StanarRepository;
import kts.nwt.repository.ZgradaRepository;

@Service
public class ObavestenjeServiceImpl implements ObavestenjeService {

	@Autowired
	private StanarRepository stanarRepository;

	@Autowired
	private ObavestenjeRepository obavestenjeRepository;

	@Autowired
	private ZgradaRepository zgradaRepository;

	public Obavestenje novoObavestenje(Obavestenje obavestenje, String email) {

		Stanar stanar = stanarRepository.findStanarByEmail(email)
				.orElseThrow(() -> new NotFoundException("Nepostojeci stanar!"));

		Zgrada zgrada;
		if (stanar.getStan() != null) {
			zgrada = stanar.getStan().getZgrada();
		} else {
			throw new BadRequestException("Korisniku nije dodeljen stan!");
		}

		obavestenje.setDatum(new Date());
		obavestenje.setZgrada(stanar.getStan().getZgrada());
		obavestenje.setStanar(stanar);

		zgrada.getObavestenja().add(obavestenje);

		this.obavestenjeRepository.save(obavestenje);
		this.zgradaRepository.save(zgrada);
		return obavestenje;
	}

	public Obavestenje izmenaObavestenja(Obavestenje obavestenje, Long obavestenjeId, String email) {

		Obavestenje o = obavestenjeRepository.findObavestenjeById(obavestenjeId)
				.orElseThrow(() -> new NotFoundException("Nepostojece Obavestenje!"));

		Stanar stanar = stanarRepository.findStanarByEmail(email)
				.orElseThrow(() -> new NotFoundException("Nepostojeci stanar!"));

		Zgrada zgrada = o.getZgrada();

		if (zgrada == null) {
			throw new NotFoundException("Nepostojeca zgrada!");
		}

		if (stanar.getStan() != null) {
			if (!zgrada.equals(stanar.getStan().getZgrada())) {
				throw new BadRequestException("Nije moguce izmeniti obavestenje za neodgovarajucu zgradu!");
			}
		} else {
			throw new BadRequestException("Stanaru nije dodeljen stan!");
		}

		if (!o.getStanar().getEmail().equals(stanar.getEmail())) {
			// znaci dodavanje vrsi predsednik skupstine
			if (!(zgrada.getPredsednikSkupstine() != null && zgrada.getPredsednikSkupstine().equals(stanar))) {
				throw new BadRequestException("Niste autor ove ankete!");
			}
		}

		o.setTekst(obavestenje.getTekst());
		o.setDatum(new Date());

		this.obavestenjeRepository.save(o);
		return o;
	}

	public void brisanjeObavestenja(Long obavestenjeId, String email) {

		Obavestenje o = obavestenjeRepository.findObavestenjeById(obavestenjeId)
				.orElseThrow(() -> new NotFoundException("Nepostojece Obavestenje!"));

		Stanar stanar = stanarRepository.findStanarByEmail(email)
				.orElseThrow(() -> new NotFoundException("Nepostojeci stanar!"));

		Zgrada zgrada = o.getZgrada();

		if (zgrada == null) {
			throw new NotFoundException("Nepostojeca zgrada!");
		}

		if (stanar.getStan() != null) {
			if (!zgrada.equals(stanar.getStan().getZgrada())) {
				throw new BadRequestException("Nije moguce izmeniti obavestenje za neodgovarajucu zgradu!");
			}
		} else {
			throw new BadRequestException("Stanaru nije dodeljen stan!");
		}

		if (!o.getStanar().getEmail().equals(stanar.getEmail())) {
			// znaci dodavanje vrsi predsednik skupstine
			if (!(zgrada.getPredsednikSkupstine() != null && zgrada.getPredsednikSkupstine().equals(stanar))) {
				throw new BadRequestException("Niste autor ove ankete!");
			}
		}

		zgrada.getObavestenja().remove(o);
		this.zgradaRepository.save(zgrada);

		this.obavestenjeRepository.deleteById(obavestenjeId);
	}
	
	@Override
	@Transactional
	public Obavestenje pregledObavestenja(Long obavestenjeId, String email) {
		Obavestenje obavestenje = this.obavestenjeRepository.findById(obavestenjeId);
		if (obavestenje == null) {
			throw new NotFoundException("Nepostojece obavestenje!");
		}
		
		Stanar stanar = this.stanarRepository.findByEmail(email);
		if (stanar == null) {
			throw new NotFoundException("Nepostojeci stanar!");
		}
		
		Set<Zgrada> zgrade = new HashSet<Zgrada>();
		// prvo uzimamo zgradu u kojoj stanar zivi, a zatim i one u kojima je vlasnik stana
		zgrade.add(stanar.getStan().getZgrada());
		for (Stan stan : stanar.getVlasnikStanova()) {
			zgrade.add(stan.getZgrada());
		}
		for (Zgrada zgrada : zgrade) {
			for (Obavestenje o : zgrada.getObavestenja()) {
				if (obavestenje == o){
					return obavestenje;
				}
			}
		}
		
		throw new BadRequestException("Stanar nema pristup datom obavestenju!");
	}

	@Override
	@Transactional
	public List<Obavestenje> izlistajObavestenja(Pageable page, String email) {
        List<Obavestenje> obavestenja = this.preuzmiObavestenjaStanara(email);		
		PagedListHolder<Obavestenje> holder = new PagedListHolder<>(obavestenja);
	    holder.setPage(page.getPageNumber());
	    holder.setPageSize(page.getPageSize());
        List<Obavestenje> pageList = holder.getPageList();
		return pageList;
	}
	
	public List<Obavestenje> preuzmiObavestenjaStanara(String email){
		Stanar stanar = this.stanarRepository.findByEmail(email);
		if (stanar == null) {
			throw new NotFoundException("Nepostojeci stanar!");
		}
		
		Set<Zgrada> zgrade = new HashSet<Zgrada>();
		// prvo uzimamo zgradu u kojoj stanar zivi, a zatim i one u kojima je vlasnik stana
		zgrade.add(stanar.getStan().getZgrada());
		for (Stan stan : stanar.getVlasnikStanova()) {
			zgrade.add(stan.getZgrada());
		}
		
		List<Obavestenje> obavestenja = new ArrayList<Obavestenje>();
		for (Zgrada zgrada : zgrade){
			obavestenja.addAll(zgrada.getObavestenja());
		}
		return obavestenja;
	}

}
