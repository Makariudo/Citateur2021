const express = require('express')

const router = express.Router();

router.get('/', (req,res) => {
  res.send("index de citation router")
})

module.exports = router