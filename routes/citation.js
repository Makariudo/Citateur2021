const express = require('express')
const citationController = require("../controllers/handleCitations")

const router = express.Router();

router.get('/', citationController.getCitation);
router.post('/', citationController.createCitation);
router.delete('/:id', citationController.deleteCitation);

module.exports = router