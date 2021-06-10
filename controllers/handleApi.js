const API = require('../services/scrappingDico')
const APIdicolink  = require('../services/dicolinkApi')

const apiController = {
  async getCitation(req , res ,next){
    const citation=  await API.getCitation();
    res.send(citation);
  },
  async getCitationWithWord(req, res, next){
    const { word } = req.params
    const citations=  await APIdicolink.findCitation(word);
    res.send(citations)
  }
}


module.exports = apiController