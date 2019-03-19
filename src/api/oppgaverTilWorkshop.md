Forslag til nye oppgåver

- Lag ei ny rute som du kan treffe på /api/mattilsyn?navn=NAVN_PÅ_SPISESTED som returnerar rapportane på dei spisestadane med det navnet
- Lag ei ny rute som du kan treffe på /api/mattilsyn?totalkarakter=TOTAL_KARAKTER som returnerar rapportane på dei spisestadane med det den totalkarakteren
- Lag ei ny rute som du kan treffe på /api/mattilsyn/minimum som returnerar kun navn og totalkarakter

Karakterskala:
0 = Ingen brudd på regelverket funnet. Stort smil.
1 = Mindre brudd på regelverket som ikke krever oppfølging. Stort smil.
2 = Brudd på regelverket som krever oppfølging. Strekmunn.
3 = Alvorlig brudd på regelverket. Sur munn.
4 = Ikke aktuelt - Virksomheten har ikke denne aktiviteten ved tilsynsobjektet. Påvirker ikke smilefjeskarakter.
5 = Ikke vurdert - Mattilsynet har ikke vurdert kravpunktet ved dette tilsynet. Påvirker ikke smilefjeskarakter. Dersom det hadde blitt avdekket mistanke om vesentlige eller åpenbare avvik i forbindelse med inspeksjonen, ville kravpunktet blitt vurdert.
