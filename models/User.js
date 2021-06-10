const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema ({
  googleId: String,
  pseudo: String,
  firstName: String,
  lastName: String,
  photoURL: String,
  email: String,
  citations: [String]
})

//ajout d'une méthode hello
userSchema.methods.greeting = function () {
  console.log(`Hi ${this.pseudo}`)
}

userSchema.methods.addCitation = function (id) {
  this.citations.push(id);
  this.save();
  return this.citations.length
}

userSchema.methods.deleteCitation = function (id) {
  let foundCitation = this.citations.find(entry => entry === id);
  if(foundCitation){
    let newCitations = this.citations.filter(entry => entry !== id);
    this.citations = newCitations;
    this.save();
    return this.citations
  } else {
    throw new Error("quote not found !")
  }
}



const User = mongoose.model('User', userSchema) 
module.exports = User