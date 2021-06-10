const API = require('../services/scrappingDico')

const apiController = {
  async getCitation(req , res ,next){
    let citation=  await API.getCitation()
    res.send(citation)
  }
}


module.exports = apiController