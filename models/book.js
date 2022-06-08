const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  snippet: {
    type: String,
    required: true,
  },
  file: {
    type:String,
    required: true
  },
}, { timestamps: true });

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;