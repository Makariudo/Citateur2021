const API = require('../services/scrappingDico')
const APIdicolink  = require('../services/dicolinkApi')

const apiController = {
  async getCitation(req , res ,next){
    const citation=  await API.getCitation();
    res.send(citation);
  },
  async getCitationWithWord(req, res, next){
    const { word } = req.params
    try{
    const citations=  await APIdicolink.findCitation(word);
    console.log(citations) 
    res.send(citations.data)
    } catch(err) {
      console.log(err)
    }
    
   
  }
}


module.exports = apiController