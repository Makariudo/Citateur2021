const express = require('express')
const citationController = require("../controllers/handleCitations")

const router = express.Router();

router.get('/', (req,res) => {
  res.send("index de citation router")
})

router.post('/', citationController.createCitation)

module.exports = router