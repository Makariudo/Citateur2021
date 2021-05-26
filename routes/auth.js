const express = require('express')

const router = express.Router();

router.get('/', (req,res) => {
  res.send("index de auth router")
})

module.exports = router