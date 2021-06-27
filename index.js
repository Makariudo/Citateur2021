const express = require('express');
const cors = require('cors');
const cookieSession = require('cookie-session')
const passport = require('passport')
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();
require('./models/User');
require('./models/Citation');
require('./config/passport');
const router = require("./routes");



const app = express();

app.use(
  cookieSession({
    maxAge: 30*24*60*60*1000, //(30j de durée max)
    keys: [process.env.COOKIE_KEY]  //clé secret dans la config
  })
)

const swaggerUi = require('swagger-ui-express'), swaggerDocument = require('./swagger.json');

app.use(passport.initialize());
app.use(passport.session())  // lui dit qu'il peut utiliser les cookies session

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve('../client/build')));


mongoose.connect(process.env.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}, (err) => {
 err ?  console.log("Connexion MongoDb PB!", err):  console.log("Connexion MongoDb ok!")
})
mongoose.set('useFindAndModify', false);

app.use(router);


const PORT = process.env.PORT || 5000;

app.use(
  '/api-docs',
  swaggerUi.serve, 
  swaggerUi.setup(swaggerDocument)
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
});