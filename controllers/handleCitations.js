const mongoose = require('mongoose')
const Citation = mongoose.model('Citation');
const User = mongoose.model('User');

const citationsController = {
  
  async getCitation(req , res ,next){
    const { id } = req.params
    const user = await User.findOne({googleId : req.user.googleId});
    const {citations} = user;
    let response = [];
    for(let quote of citations){
      let addQuote = await Citation.findById(quote).exec();
      response = [...response, addQuote];
    }
  if(response.length >= 1) {
    res.send({data : response}) 
  } else {
    res.send("No quotes is here !")
  }

  },
  async createCitation(req , res ,next){
    if(!req.body.citation && !req.body.author){
      throw error("bad entry !")
    } else {
    const citation = await new Citation({
      citation: req.body.citation,
      author: req.body.author,
      authorImg: req.body.authorImg,
      category: req.body.category,
    }).save();
    //console.log("citation", citation)
    //console.log("citationID", citation._id)
    const user = await User.findOne({ googleId : req.user.googleId });
    const cits = await user.addCitation(citation._id);
    res.send(`Citation sauvegardée !, vous avez ${cits} citations"`);
    }
    next()   
  },

  async deleteCitation(req , res ,next){
    const { id } = req.params
    const user = await User.findOne({googleId : req.user.googleId});
    try {
      const newCitations = await user.deleteCitation(id)
      res.send(newCitations)
    } catch(err) {
      console.log(err)
    }
  },
  async updateCitation(req , res ,next){
    const { id } = req.params
    const updateQuery = req.body
    try {
      const newCitation = await Citation.findByIdAndUpdate(id, updateQuery,(err, res) => {
        if(res){
          res.save()
        }
      })
      res.send(newCitation)
    } catch(err) {
      console.log(err)
    }
  },
}

module.exports = citationsController