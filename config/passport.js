const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();
const mongoose = require('mongoose')

const User = mongoose.model('User');


passport.serializeUser(( user, done ) => {
  done (null, user.id )       //on utilise la methode de passport serialized pour genere un cooki d'idenbtifiaction avec comme id le user.id de mongo 
})
 
//deconnect
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user)
    })
})



passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback',
  proxy: true
  },
  (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId : profile.id }).then(existingUser => {
      if(existingUser){
        console.log("user already registred")

        done(null, existingUser)
      } else {
      console.log("new user!")
      console.log("profile here:", profile.name.familyName, profile._json.email)
        new User({
          googleId: profile.id, 
          lastName: profile.name.familyName, 
          firstName: profile.name.givenName, 
          photoURL: profile._json.picture,
          email: profile._json.email
        })
          .save()
          .then( user => done(null,user))
      }
    })
  }
))

