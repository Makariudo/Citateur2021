const express = require('express')

const router = express.Router();

router.get('/', (req,res) => {
  res.send("index de citation router")
})

 router.get('api')

module.exports = router