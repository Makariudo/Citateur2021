const mongoose = require('mongoose');
const { Schema } = mongoose;
const citationSchema = new Schema ({
  citation: String,
  auteur: String,
  image: String,
  category: String,
})

mongoose.model('Citation', citationSchema) 