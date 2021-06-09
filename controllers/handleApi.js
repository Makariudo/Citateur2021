const API = require('../services/dicolinkApi')

const apiController = {
  
  async getCitation(req , res ,next){
    console.log('getcitation');
    let citation=  await API.findWord()
    res.send(citation)
  }
}


module.exports = apiController