const express = require('express')
const apiController = require("../controllers/handleApi")

const router = express.Router();

router.get('/citation', apiController.getCitation)  


module.exports = router