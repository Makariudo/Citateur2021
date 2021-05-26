const mongoose = require('mongoose');
const { Schema } = mongoose;
const citationSchema = new Schema ({
  Id: Number,
  citation: String,
  author: String,
  category: String,
})

mongoose.model('citations', citationSchema) 