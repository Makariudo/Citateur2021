const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();
require('./models/User');
require('./models/Citation');
const router = require("./routes");

const corsOptions = {
  origin: process.env.CORS_ORIGIN
}

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve('../client/build')));

mongoose.connect(process.env.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}, (err) => {
 err ?  console.log("Connexion MongoDb PB!", err):  console.log("Connexion MongoDb ok!")
})


app.use(router);

app.get('*', (req, res) => {
  res.sendFile(path.resolve('../client')+'/build/index.html');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
});