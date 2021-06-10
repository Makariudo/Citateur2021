const express = require('express')
const passport = require('passport')
const authController = require("../controllers/handleAuth")
const router = express.Router();

router.get('/', (req,res) => {
  res.send("index de auth router")
})

router.get('/google', passport.authenticate('google', { //initialise l'authentification avec la strategie google
  scope: ['profile', 'email'] //on demande à google les infos de son profile et son email
})
)    

router.get('/google/callback', passport.authenticate('google'), (req, res) => {
  res.redirect('http://localhost:3000/dashboard');
}); //gère le callback de google apres le signin

router.get('/logged', authController.handleLogged);
router.get('/current_user', authController.currentUser);
router.get('/logout', authController.logOut);

module.exports = router