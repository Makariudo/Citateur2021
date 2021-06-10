const mongoose = require('mongoose');
const { Schema } = mongoose;
const citationSchema = new Schema ({
  citation: String,
  author: String,
  authorImg: String,
  category: String,
})

mongoose.model('Citation', citationSchema) 