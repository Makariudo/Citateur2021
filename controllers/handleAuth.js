const User = require('../models/User');
const authController = {
  
  async handleLogin(req , res ,next){
    const {firstname, lastname} = req.body
    const found = await User.findOne({firstname, lastname}).exec()
    console.log('found',found);
    console.log("reqBody", req.body)
    res.send('coucou de authcontroller')
    next()
  }
}


module.exports = authController