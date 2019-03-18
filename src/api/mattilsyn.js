const router = require("express").Router();
const axios = require("axios");
const mattilsynetUrl = "https://hotell.difi.no/api/json/mattilsynet/smilefjes/tilsyn";

//Hent ut tilsynsrapportar basert på poststed
router.get("/", async (req, res) => {
  const { poststed } = req.query;
  const encodedPoststed = encodeURIComponent(poststed);
  try {
    const resultat = await axios.get(`${mattilsynetUrl}?poststed=${encodedPoststed}`);

    const tilsynsRapport = resultat.data.entries.map(resturant => {
      return {
        navn: resturant.navn,
        datoForTilsyn: resturant.dato,
        smilefjes: resturant.total_karakter,
        karakterLedelseRuting: resturant.karakter1,
        karakterLokalerUtstyr: resturant.karakter2,
        karakterMattilbredningHandtering: resturant.karakter3,
        karakterSporbarhetMerking: resturant.karakter4
      };
    });
    return res.json(tilsynsRapport).status(200);
  } catch (err) {
    return res.status(500).send({ message: "Noko gjekk gale" });
  }
});

module.exports = router;

/*
Karakterskala:
0 = Ingen brudd på regelverket funnet. Stort smil.
1 = Mindre brudd på regelverket som ikke krever oppfølging. Stort smil.
2 = Brudd på regelverket som krever oppfølging. Strekmunn.
3 = Alvorlig brudd på regelverket. Sur munn.
4 = Ikke aktuelt - Virksomheten har ikke denne aktiviteten ved tilsynsobjektet. Påvirker ikke smilefjeskarakter.
5 = Ikke vurdert - Mattilsynet har ikke vurdert kravpunktet ved dette tilsynet. Påvirker ikke smilefjeskarakter. Dersom det hadde blitt avdekket mistanke om vesentlige eller åpenbare avvik i forbindelse med inspeksjonen, ville kravpunktet blitt vurdert.
*/
