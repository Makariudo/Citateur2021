const mongoose = require('mongoose')
const Citation = mongoose.model('Citation');

const citationsController = {
  async createCitation(req , res ,next){
    console.log("create citation, reqBody :", req.body)
    if(!req.body.citation && !req.body.author){
      throw error("bad entry !")
    } else {
        new Citation({
      citation: req.body.citation,
      author: req.body.author,
      authorImg: req.body.authorImg,
      category: req.body.category,
    })
      .save()
      .then(citation => res.send(citation))
    }
  },
}

module.exports = citationsController