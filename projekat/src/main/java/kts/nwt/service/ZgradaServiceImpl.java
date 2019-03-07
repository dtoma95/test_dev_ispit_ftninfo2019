package kts.nwt.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.support.PagedListHolder;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kts.nwt.domain.Firma;
import kts.nwt.domain.Korisnik;
import kts.nwt.domain.Obavestenje;
import kts.nwt.domain.PredlogTackeDnevnogReda;
import kts.nwt.domain.Skupstina;
import kts.nwt.domain.Stan;
import kts.nwt.domain.Stanar;
import kts.nwt.domain.Zgrada;
import kts.nwt.exceptions.BadRequestException;
import kts.nwt.exceptions.NotFoundException;
import kts.nwt.repository.KorisnikRepository;
import kts.nwt.repository.StanRepository;
import kts.nwt.repository.StanarRepository;
import kts.nwt.repository.ZgradaRepository;

@Service
public class ZgradaServiceImpl implements ZgradaService {
    @Autowired
    StanarRepository stanarRepository;
    
    @Autowired
    ZgradaRepository zgradaRepository;
	
    @Autowired
    StanRepository stanRepository;
    
    @Autowired
    KorisnikRepository korisnikRepository;
    
    @Override
    public Zgrada zgrada(Long zgradaId) {
		Zgrada zgrada = this.zgradaRepository.findById(zgradaId);
		if (zgrada == null) {
			throw new NotFoundException("Nepostojeca zgrada!");
		}
    	return zgrada;
    }
    
    @Override
    public Stan stan(Long stanId) {
    	Stan stan = this.stanRepository.findById(stanId);
    	if (stan == null) {
    		throw new NotFoundException("Nepostojeci stan!");
    	}
    	return stan;
    }
    
	@Override
	@Transactional
	public List<Obavestenje> izlistajObavestenjaZgrade(Long zgradaId, String email) {
		Korisnik k = this.korisnikRepository.findByEmail(email);
		if (k == null) {
			throw new NotFoundException("Nepostojeci korisnik!");
		}
		
		Zgrada zgrada = this.zgradaRepository.findById(zgradaId);
		if (zgrada == null) {
			throw new NotFoundException("Nepostojeca zgrada!");
		}
		
		if (k.getAuthorities().equals("ADMIN") || k.getAuthorities().equals("INSTITUCIJA") || k.getAuthorities().equals("FIRMA")) {
			return zgrada.getObavestenja();
		}
		
		Stanar stanar = (Stanar)k;
		
		Set<Zgrada> zgrade = new HashSet<Zgrada>();
		zgrade.add(stanar.getStan().getZgrada());
		for (Stan stan : stanar.getVlasnikStanova()) {
			zgrade.add(stan.getZgrada());
		}
		for (Zgrada z : zgrade) {
			if (z == zgrada){
				
				
				return zgrada.getObavestenja();
			}
		}
		
		throw new BadRequestException("Stanar nema pristup datoj zgradi!");
	}

	@Override
	@Transactional
	public List<PredlogTackeDnevnogReda> izlistajPTDRZgrade(Long zgradaId, String email) {
		Korisnik k = this.korisnikRepository.findByEmail(email);
		if (k == null) {
			throw new NotFoundException("Nepostojeci korisnik!");
		}
		
		Zgrada zgrada = this.zgradaRepository.findById(zgradaId);
		if (zgrada == null) {
			throw new NotFoundException("Nepostojeca zgrada!");
		}
		
		if (k.getAuthorities().equals("ADMIN") || k.getAuthorities().equals("INSTITUCIJA") || k.getAuthorities().equals("FIRMA")) {
			return zgrada.getPtdrovi();
		}
		
		Stanar stanar = (Stanar)k;
		
		Set<Zgrada> zgrade = new HashSet<Zgrada>();
		zgrade.add(stanar.getStan().getZgrada());
		for (Stan stan : stanar.getVlasnikStanova()) {
			zgrade.add(stan.getZgrada());
		}
		for (Zgrada z : zgrade) {
			if (z == zgrada){
				return zgrada.getPtdrovi();
			}
		}
		
		throw new BadRequestException("Stanar nema pristup datoj zgradi!");
	}
	
	public List<Skupstina> izlistajSkupstineKojePredstoje(Long zgradaId, String email) {
		
		Stanar stanar = this.stanarRepository.findByEmail(email);
		if (stanar == null) {
			throw new NotFoundException("Nepostojeci stanar!");
		}
		
		Zgrada zgrada = this.zgradaRepository.findById(zgradaId);
		if (zgrada == null) {
			throw new NotFoundException("Nepostojeca zgrada!");
		}
		
		Date danas = new Date();
		
		List<Skupstina> skupstine = new ArrayList<Skupstina>();
		
		for (Skupstina s : zgrada.getSkupstine()) {
			if (s.getPocetakSkupstine().after(danas)) {
				skupstine.add(s);
			}
		}
		
		return skupstine;
	}
	
	@Override
	@Transactional
	public List<Stanar> izlistajStanareZgrade(Long zgradaId, Pageable page) {
		Zgrada zgrada = this.zgradaRepository.findById(zgradaId);
		if (zgrada == null){
		    throw new NotFoundException("Nepostojeca zgrada!");	
		}
		
		List<Stanar> stanari = new ArrayList<Stanar>();
		for (Stan stan : zgrada.getStanovi()) {
			stanari.addAll(stan.getStanari());
		}
		PagedListHolder<Stanar> holder = new PagedListHolder<>(stanari);
	    holder.setPage(page.getPageNumber());
	    holder.setPageSize(page.getPageSize());
        List<Stanar> pageList = holder.getPageList();
        return pageList;
	}

	@Override
	@Transactional
	public List<Firma> izlistajFirmeZgrade(Long zgradaId, Pageable page, String email) {
		Zgrada zgrada = this.zgradaRepository.findById(zgradaId);
		if (zgrada == null){
		    throw new NotFoundException("Nepostojeca zgrada!");	
		}
		
		Korisnik korisnik = this.korisnikRepository.findByEmail(email);
		if (korisnik == null) {
			throw new NotFoundException("Nepostojeci korisnik!");
		}
		
		if (korisnik.getAuthorities().equals("STANAR") ||
				korisnik.getAuthorities().equals("PREDSEDNIK_SKUPSTINE")){
			Stanar stanar = (Stanar) korisnik;
			if (stanar.getStan().getZgrada().getId() != zgradaId){
				throw new BadRequestException("Stanar ne pripada datoj zgradi!");
			}
		}
		
		List<Firma> firme = zgrada.getFirme();
		PagedListHolder<Firma> holder = new PagedListHolder<>(firme);
	    holder.setPage(page.getPageNumber());
	    holder.setPageSize(page.getPageSize());
        List<Firma> pageList = holder.getPageList();
        return pageList;
	}

	public Map<String, List<Zgrada>> izlistajZgradeStanara(String email) {
		Stanar stanar = this.stanarRepository.findStanarByEmail(email)
				.orElseThrow(() -> new NotFoundException("Nepostojeci stanar!"));
		
		Map<String, List<Zgrada>> zgrade = new HashMap<String, List<Zgrada>>();
		zgrade.put("Stanuje", new ArrayList<Zgrada>());
		zgrade.put("Vlasnik", new ArrayList<Zgrada>());
		
		if (stanar.getStan() != null) {
			zgrade.get("Stanuje").add(stanar.getStan().getZgrada());
		}
		
		for (Stan s : stanar.getVlasnikStanova()) {
			zgrade.get("Vlasnik").add(s.getZgrada());
		}
		
		return zgrade;
	}
}
