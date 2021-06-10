const mongoose = require('mongoose')
const Citation = mongoose.model('Citation');
const User = mongoose.model('User');

const citationsController = {

  async createCitation(req , res ,next){
    console.log("create citation, reqBody :", req.body)
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
    console.log("delete citation, reqBody :", req.params)
    const { id } = req.params
    const user = await User.findOne({googleId : req.user.googleId});
    try {
      const newCitations = await user.deleteCitation(id)
      res.send(newCitations)
    } catch(err) {
      console.log(err)
    }
  },
}

module.exports = citationsController