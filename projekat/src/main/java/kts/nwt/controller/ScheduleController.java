package kts.nwt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import kts.nwt.service.ScheduleService;

@Controller
@RequestMapping("/api")
public class ScheduleController {

	@Autowired
	private ScheduleService scheduleService;
	/**
	 * Metoda koja automatski menja predsednika skupstine na osnovu ankete
	 */
	@Scheduled(
            initialDelayString = "${schedule.initialdelay}",
            fixedRateString = "${schedule.fixedrate}")
	public void automatskiPromeniPredSkupNaOsnovuAnkete() {
		
		this.scheduleService.promeniPredSkupNaOsnovuAnkete();
		
	}
}
