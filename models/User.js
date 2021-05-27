const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema ({
  googleId: String,
  pseudo: String,
  firstName: String,
  lastName: String,
  photoURL: String,
  email: String,
})

//ajout d'une méthode hello
userSchema.methods.greeting = function () {
  console.log(`Hi ${this.pseudo}`)
}

const User = mongoose.model('User', userSchema) 
module.exports = User