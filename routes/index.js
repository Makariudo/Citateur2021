const express = require('express')

const authRouter = require('./auth')
const citationsRouter = require('./citation')
const apiRouter = require('./api')
const router = express.Router();

//route index
router.get('/', (req, res) => {
  res.send("coucou de l'index")
})

//router auth
router.use('/auth', authRouter);

//router citation
router.use('/citations', citationsRouter)

//router api extern
router.use('/api', apiRouter)



module.exports = router;