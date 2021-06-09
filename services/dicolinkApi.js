const axios = require('axios')

const API = {
 async findWord() {
  try {
    const config = {
      method: "get",
      url: 'https://api.dicolink.com/v1/mots/motsauhasard?avecdef=true&minlong=5&maxlong=-1&verbeconjugue=false&limite=10&api_key=EAX0bR2KdabAnaoTNRxGQCMUk8NwCFod'
    }
  const res = await axios(config);
  console.log(res.data)
  //this.findCitation(res.data[0].mot)
  } catch(err) {
   console.log(err)
  }
},

///TODO faire une boucle sur trouve mot car souvent les citations ne sont pas trouvées vaec ls mots....
async findCitation(words) {
  try {
    console.log("mot found", word)
    const config = {
      method: "get",
      url: `https://api.dicolink.com/v1/mot/${word}/citations?limite=5&api_key=EAX0bR2KdabAnaoTNRxGQCMUk8NwCFod`
    }
      const res = await axios(config);
      console.log("resdata", res.data)
      if(res.data.error){
        await this.findWord();
      } else {
        return res.data
      }
  } catch(err) {
   console.log(err)
  }
}
}




module.exports = API;