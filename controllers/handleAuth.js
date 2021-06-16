const User = require('../models/User');
const authController = {
  
  /* async handleLogin(req , res ,next){
    const {firstname, lastname} = req.body
    const found = await User.findOne({firstname, lastname}).exec()
    console.log('found',found);
    console.log("reqBody", req.body)
    res.send('coucou de authcontroller')
    next()
  }, */
  async handleLogged(req, res, next){
    if(req.user) {
      res.send({logged : true})
    } else {
      res.send({logged: false})
    }
  },

  async currentUser(req , res ,next){
    console.log("user", req.user)
    if(req.user){
      res.send(req.user)
    } else {
      res.send(false)
    }     
  },
  async logOut(req , res ,next){
    req.logout();
    if(!req.user){
      res.send("Logout ok !")  
    } else {
      res.send("logout probem !")
    }
  },

}



module.exports = authController