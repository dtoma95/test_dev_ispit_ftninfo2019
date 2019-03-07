package kts.nwt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kts.nwt.domain.Firma;
import kts.nwt.exceptions.NotFoundException;
import kts.nwt.repository.FirmaRepository;

@Service
public class FirmaServiceImpl implements FirmaService {

	@Autowired
	private FirmaRepository firmaRepository;
	
	public Firma findOne(Long id) {
		return this.firmaRepository.findFirmaById(id).orElseThrow(() -> new NotFoundException("Nepostojeca firma!"));
	}
	
}
