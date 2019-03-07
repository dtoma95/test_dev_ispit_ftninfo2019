package kts.nwt.service;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kts.nwt.domain.Pitanje;
import kts.nwt.domain.PredlogTackeDnevnogReda;
import kts.nwt.domain.Skupstina;
import kts.nwt.domain.StanarOpcija;
import kts.nwt.domain.VrstaPitanja;
import kts.nwt.domain.Zgrada;
import kts.nwt.repository.ZgradaRepository;

@Service
@Transactional
public class ScheduleServiceImpl implements ScheduleService {

	@Autowired
	private ZgradaRepository zgradaRepository;

	@Autowired
	private AdministratorService administratorService;

	public void promeniPredSkupNaOsnovuAnkete() {

		Date trenutnoVreme = new Date();

		Calendar kalendar = Calendar.getInstance();
		kalendar.setTime(trenutnoVreme);
		kalendar.add(Calendar.HOUR, -1);

		Date vremePoslednjegPoziva = kalendar.getTime();

		List<Zgrada> zgrade = (List<Zgrada>) this.zgradaRepository.findAll();

		for (Zgrada z : zgrade) {
			for (Skupstina s : z.getSkupstine()) {

				// ako se skupstina zavrsila u razmaku od sat vremena izmedju
				// poziva
				if (s.getKrajSkupstine().after(vremePoslednjegPoziva)) {

					for (PredlogTackeDnevnogReda ptdr : s.getPredloziZaTackeDnevnogReda()) {

						for (Pitanje pitanje : ptdr.getAnketa()) {

							// ako je pitanje za izbor predsednika skupstine
							if (pitanje.getVrstaPitanja() == VrstaPitanja.STANAR_PITANJE) {

								// broj stanova u zgradi
								int brojStanova = z.getStanovi().size();

								int ukupanBrojGlasova = 0;

								int najviseGlasova = 0;
								int indexOpcijeSaNajviseGlasova = 0;
								int brojPojavljivanjaNajvecegBrojaGlasova = 1;

								for (int i = 0; i < pitanje.getOpcije().size(); i++) {
									int brojGlasovaOpcije = pitanje.getOpcije().get(i).getStanoviKojiSuGlasali().size();
									ukupanBrojGlasova += brojGlasovaOpcije;

									if (brojGlasovaOpcije > najviseGlasova) {

										najviseGlasova = brojGlasovaOpcije;
										indexOpcijeSaNajviseGlasova = i;
										brojPojavljivanjaNajvecegBrojaGlasova = 1;

									}

									if (i != indexOpcijeSaNajviseGlasova && brojGlasovaOpcije == pitanje.getOpcije()
											.get(indexOpcijeSaNajviseGlasova).getStanoviKojiSuGlasali().size()) {

										brojPojavljivanjaNajvecegBrojaGlasova += 1;

									}
								}

								float pedesetPosto = (float) brojStanova / 2;
								// ako je ukupan broj glasova veci od 50% ili
								// jednak
								if (ukupanBrojGlasova >= pedesetPosto) {

									// ako postoji opcija sa najvise glasova
									// koja je jedinstvena
									if (brojPojavljivanjaNajvecegBrojaGlasova == 1) {
										// id izabranog stanara
										Long stanarId = ((StanarOpcija) pitanje.getOpcije().get(indexOpcijeSaNajviseGlasova))
												.getStanar().getId();

										this.administratorService.postaviPredsednika(stanarId);

									}
								}

							}

						}

					}

				}
			}
		}

	}

}
