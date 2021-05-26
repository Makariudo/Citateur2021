const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema ({
  googleId: String,
  pseudo: String,
  firstName: String,
  lastName: String,
  photoURL: String,
})

mongoose.model('users', userSchema) 