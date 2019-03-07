package kts.nwt.service;

import kts.nwt.domain.Stanar;

public interface StanarService {
	/**
	 * Metoda koja pronalazi zeljenog stanara
	 * @param email -Email stanara koji se trazi
	 * @return Pronadjen stanar sa svim podacima
	 */
	Stanar findOne(String email);	
}
