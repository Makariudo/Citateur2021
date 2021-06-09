const fetch = require("node-fetch");
const cheerio = require("cheerio");
const fs = require("fs");
const axios = require('axios')

// function to get the raw data
const getRawData = (URL) => {
   return fetch(URL)
      .then((response) => response.text())
      .then((data) => {
         return data;
      });
};


// URL for data
const URL = "http://evene.lefigaro.fr/citations/citation-jour.php" 

// start of the program
const getCricketWorldCupsList = async () => {
   const rawData = await getRawData(URL);
   const parsedData = cheerio.load(rawData);
   //console.log(rawData);
   //extract data
   let recup = parsedData('li[class=figsco__selection__list__evene__list__item]').html();
   
   console.log(recup)
   let article = cheerio.load(recup)
   let citation = article('a').html();
   let auteur = article('img').attr('alt');
   let image = article('img').attr('src');
   console.log(citation)
   console.log("auteur", auteur)
   console.log("image", image)

};

// invoking the main function
getCricketWorldCupsList()