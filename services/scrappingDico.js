const fetch = require("node-fetch");
const cheerio = require("cheerio");


const Scrap = {// URL for data
 URL: "http://evene.lefigaro.fr/citations/citation-jour.php", 
  // function to get the raw data
 getRawData : function () {
   return fetch(this.URL)
      .then((response) => response.text())
      .then((data) => {
         return data;
      });
},
// start of the program
getCitation : async function () {
   const rawData = await this.getRawData();
   const parsedData = cheerio.load(rawData);
   const recup = parsedData('li[class=figsco__selection__list__evene__list__item]').html();
   const article = cheerio.load(recup)
   const citation = article('a').html();
   const auteur = article('img').attr('alt');
   const image = article('img').attr('src');

   const data = {
      citation,
      auteur,
      image,
   }
   return data
}
}

module.exports = Scrap