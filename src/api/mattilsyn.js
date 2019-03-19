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
