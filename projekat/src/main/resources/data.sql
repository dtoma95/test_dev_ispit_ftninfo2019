insert into korisnik(id, email, lozinka, authorities) values (1, 'admin@gmail.com', '$2a$04$6e6m6vVWC2OhNtJEpMY3s.39Dph3pQ3JcGR4MzFCXg4drCHf9jUeW', 'ADMIN')
insert into administrator(id) values (1)

insert into zgrada(id, ulica, broj, lokacija) values (1, 'Boska Buhe', 42, 'Novi Sad')
insert into zgrada(id, ulica, broj, lokacija) values (2, 'Sencanski put', 14, 'Subotica')

insert into stan(id, zgrada_id, broj, vlasnik_id) values (1, 1, 1, null)
insert into stan(id, zgrada_id, broj, vlasnik_id) values (2, 2, 4, null)
insert into stan(id, zgrada_id, broj, vlasnik_id) values (3, 1, 2, null)
insert into stan(id, zgrada_id, broj, vlasnik_id) values (4, 1, 3, null)
insert into stan(id, zgrada_id, broj, vlasnik_id) values (5, 1, 4, null)
insert into stan(id, zgrada_id, broj, vlasnik_id) values (6, 1, 5, null)

insert into zgrada_stanovi(zgrada_id, stanovi_id) values (1, 1)
insert into zgrada_stanovi(zgrada_id, stanovi_id) values (2, 2)
insert into zgrada_stanovi(zgrada_id, stanovi_id) values (1, 3)
insert into zgrada_stanovi(zgrada_id, stanovi_id) values (1, 4)
insert into zgrada_stanovi(zgrada_id, stanovi_id) values (1, 5)
insert into zgrada_stanovi(zgrada_id, stanovi_id) values (1, 6)

insert into korisnik(id, email, lozinka, authorities) values (2, 'predSkup@gmail.com', '$2a$04$6e6m6vVWC2OhNtJEpMY3s.39Dph3pQ3JcGR4MzFCXg4drCHf9jUeW', 'PREDSEDNIK_SKUPSTINE')
insert into stanar(id, ime, prezime, stan_id) values (2, 'Gospodin', 'Predsednik', 1)

insert into korisnik(id, email, lozinka, authorities) values (3, 'marko@gmail.com', '$2a$04$6e6m6vVWC2OhNtJEpMY3s.39Dph3pQ3JcGR4MzFCXg4drCHf9jUeW', 'STANAR')
insert into stanar(id, ime, prezime, stan_id) values (3, 'Marko', 'Markovic', 1)

insert into korisnik(id, email, lozinka, authorities) values (4, 'janko@gmail.com', '$2a$04$6e6m6vVWC2OhNtJEpMY3s.39Dph3pQ3JcGR4MzFCXg4drCHf9jUeW', 'STANAR')
insert into stanar(id, ime, prezime, stan_id) values (4, 'Janko', 'Jankovic', 4)

insert into korisnik(id, email, lozinka, authorities) values (5, 'nikola@gmail.com', '$2a$04$6e6m6vVWC2OhNtJEpMY3s.39Dph3pQ3JcGR4MzFCXg4drCHf9jUeW', 'STANAR')
insert into stanar(id, ime, prezime, stan_id) values (5, 'Nikola', 'Nikolic', 5)

insert into korisnik(id, email, lozinka, authorities) values (6, 'steva@gmail.com', '$2a$04$6e6m6vVWC2OhNtJEpMY3s.39Dph3pQ3JcGR4MzFCXg4drCHf9jUeW', 'STANAR')
insert into stanar(id, ime, prezime, stan_id) values (6, 'Steva', 'Stevanovic', 6)

update zgrada set predsednik_skupstine_id = 2 where id = 1
update zgrada set predsednik_skupstine_id = 2 where id = 2

insert into stanar_vlasnik_stanova(stanar_id, vlasnik_stanova_id) values (3, 2)
insert into stanar_vlasnik_stanova(stanar_id, vlasnik_stanova_id) values (3, 1)
insert into stanar_vlasnik_stanova(stanar_id, vlasnik_stanova_id) values (4, 4)
insert into stanar_vlasnik_stanova(stanar_id, vlasnik_stanova_id) values (5, 5)
insert into stanar_vlasnik_stanova(stanar_id, vlasnik_stanova_id) values (6, 6)

update stan set vlasnik_id = 3 where id = 2
update stan set vlasnik_id = 3 where id = 1
update stan set vlasnik_id = 4 where id = 4
update stan set vlasnik_id = 5 where id = 5
update stan set vlasnik_id = 6 where id = 6

insert into stan_stanari(stan_id, stanari_id) values (1, 2)
insert into stan_stanari(stan_id, stanari_id) values (1, 3)
insert into stan_stanari(stan_id, stanari_id) values (4, 4)
insert into stan_stanari(stan_id, stanari_id) values (5, 5)
insert into stan_stanari(stan_id, stanari_id) values (6, 6)

--OBAVESTENJA-------------------------------------------------------------------------------
insert into obavestenje(id, tekst, datum, stanar_id, zgrada_id) values (1, 'Ne zaboravite placati stanarinu svaki mesec.', TO_DATE('06/12/2015', 'DD/MM/YYYY'), 3, 1)
insert into obavestenje(id, tekst, datum, stanar_id, zgrada_id) values (2, 'Od petka ce racun za grejanje biti znato veci zbog hladnijih temperatura.', TO_DATE('06/12/2015', 'DD/MM/YYYY'), 3, 1)

insert into zgrada_obavestenja(zgrada_id, obavestenja_id) values (1, 1)
insert into zgrada_obavestenja(zgrada_id, obavestenja_id) values (1, 2)


--KVAROVI---
insert into kvar( ID, DATUM_POSTAVLJANJA, LOKACIJA, OPIS, GOTOVO, VREME_POPRAVKE, ODGOVORNO_LICE_ID, STANAR_ID, ZGRADA_ID) values (1, TO_DATE('17/12/2015', 'DD/MM/YYYY'), 'Prvi sprat', 'Ne radi svetlo u hodniku.', false, null, 2, 3, 1)
insert into zgrada_kvarovi(zgrada_id, kvarovi_id) values (1, 1)

insert into kvar( ID, DATUM_POSTAVLJANJA, LOKACIJA, OPIS, GOTOVO, VREME_POPRAVKE, ODGOVORNO_LICE_ID, STANAR_ID, ZGRADA_ID) values (2, TO_DATE('17/12/2015', 'DD/MM/YYYY'), 'Ulaz', 'Slomljeno staklo na vratima', false, null, 2, 6, 1)
insert into zgrada_kvarovi(zgrada_id, kvarovi_id) values (1, 2)


----SKUPSTINE---------

--zavrsena skupstina
insert into skupstina(id,pocetak_skupstine,kraj_skupstine,predsednik_skupstine_id, zgrada_id) values (3,TO_DATE('16/12/2017 18:00', 'DD/MM/YYYY HH:MI'),TO_DATE('17/12/2017', 'DD/MM/YYYY'),4,1)
insert into zgrada_skupstine(zgrada_id, skupstine_id) values (1, 3)

--buduca skupstina
insert into skupstina(id,pocetak_skupstine,kraj_skupstine,predsednik_skupstine_id, zgrada_id) values (7,TO_DATE('5/12/2020 22:55', 'DD/MM/YYYY HH:MI'),TO_DATE('19/12/2020', 'DD/MM/YYYY'),2,1)
insert into zgrada_skupstine(zgrada_id, skupstine_id) values (1, 7)

--skupstina u toku
insert into skupstina(id,pocetak_skupstine,kraj_skupstine,predsednik_skupstine_id, zgrada_id) values (1,TO_DATE('5/12/2018 22:55', 'DD/MM/YYYY HH:MI'),TO_DATE('19/12/2022', 'DD/MM/YYYY'),2,1)
insert into zgrada_skupstine(zgrada_id, skupstine_id) values (1, 1)

---PTDROVI-------

insert into predlog_tacke_dnevnog_reda(id, datum,izmenjen,tekst,skupstina_id,stanar_id, zgrada_id) values (1,TO_DATE('17/12/2015', 'DD/MM/YYYY'),false,'Zelim da se vise ne pusta muzika posle 12 sati.',null,3,1)
insert into predlog_tacke_dnevnog_reda(id, datum,izmenjen,tekst,skupstina_id,stanar_id, zgrada_id) values (2,TO_DATE('18/12/2015', 'DD/MM/YYYY'),false,'Predlazem da se unajmi osoba za ciscenje prozora.',null,3,1)
insert into predlog_tacke_dnevnog_reda(id, datum,izmenjen,tekst,skupstina_id,stanar_id, zgrada_id) values (3,TO_DATE('18/12/2015', 'DD/MM/YYYY'),false,'Smanjini koriscenje uglja za grejanje zgrade.',null,2,1)
insert into predlog_tacke_dnevnog_reda(id, datum,izmenjen,tekst,skupstina_id,stanar_id, zgrada_id) values (8,TO_DATE('18/12/2015', 'DD/MM/YYYY'),false,'Predlazem da se zameni predsednik skupstine',null,4,1)
insert into predlog_tacke_dnevnog_reda(id, datum,izmenjen,tekst,skupstina_id,stanar_id, zgrada_id) values (12,TO_DATE('17/12/2015', 'DD/MM/YYYY'),false,'Predlazem da se ostave svetla u garazi upaljeno tokom noci.',3,3,1)
insert into predlog_tacke_dnevnog_reda(id, datum,izmenjen,tekst,skupstina_id,stanar_id, zgrada_id) values (15,TO_DATE('17/12/2015', 'DD/MM/YYYY'),false,'Predlazem da se krece zidovu u hodniku',7,3,1)
insert into predlog_tacke_dnevnog_reda(id, datum,izmenjen,tekst,skupstina_id,stanar_id, zgrada_id) values (16,TO_DATE('17/12/2015', 'DD/MM/YYYY'),false,'Trazim dozvolu da usvojim kucnog ljubimca u svoj stan.',7,3,1)

insert into skupstina_predlozi_za_tacke_dnevnog_reda(skupstina_id, predlozi_za_tacke_dnevnog_reda_id) values (3, 12)
insert into skupstina_predlozi_za_tacke_dnevnog_reda(skupstina_id, predlozi_za_tacke_dnevnog_reda_id) values (7, 15)
insert into skupstina_predlozi_za_tacke_dnevnog_reda(skupstina_id, predlozi_za_tacke_dnevnog_reda_id) values (7, 16)

insert into zgrada_ptdrovi(zgrada_id, ptdrovi_id) values (1, 1)
insert into zgrada_ptdrovi(zgrada_id, ptdrovi_id) values (1, 2)
insert into zgrada_ptdrovi(zgrada_id, ptdrovi_id) values (1, 8)

--treca anketa za predlog tacke dnevnog reda 15
insert into pitanje(id, tekst, vrsta_pitanja, predlog_tacke_dnevnog_reda_id, stanar_id) values (7, 'Koje boje da budu zidovi u hodniku?', 1, 15, 3)
insert into predlog_tacke_dnevnog_reda_anketa(predlog_tacke_dnevnog_reda_id, anketa_id) values (15, 7)

insert into opcija(dtype, id, tekst, pitanje_id, stanar_id, firma_id) values ('Opcija', 13, 'Zuta', 7, null, null)
insert into opcija(dtype, id, tekst, pitanje_id, stanar_id, firma_id) values ('Opcija', 14, 'Bela', 7, null, null)

insert into pitanje_opcije(pitanje_id, opcije_id) values (7, 13)
insert into pitanje_opcije(pitanje_id, opcije_id) values (7, 14)

