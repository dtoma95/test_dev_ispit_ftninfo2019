package kts.nwt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kts.nwt.domain.Stanar;
import kts.nwt.exceptions.NotFoundException;
import kts.nwt.repository.StanarRepository;

@Service
public class StanarServiceImpl implements StanarService {

	@Autowired
	private StanarRepository stanarRepository;

	public Stanar findOne(String email) {
		return this.stanarRepository.findStanarByEmail(email)
				.orElseThrow(() -> new NotFoundException("Nepostojeci stanar!"));
	}

}
