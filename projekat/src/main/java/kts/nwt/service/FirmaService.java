package kts.nwt.service;

import kts.nwt.domain.Firma;

public interface FirmaService {
	/**
	 * Metoda koja pronalazi odredjenu firmu
	 * @param id - Identifikator trazene firme
	 * @return - Firma sa svim podacima
	 */
	Firma findOne(Long id);
	
}
