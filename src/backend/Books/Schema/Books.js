const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    BookTitle: {
        type: String,
        required: true
    },
    AuthorID: {
        type: Schema.Types.ObjectId,
        required: true
    },
    Genre: {
        type: String,
        required: true
    },
    Cover: {
        type: String,
        required: true
    }
}, {collection: 'Books'});

const Books = mongoose.model('Books', BookSchema);
module.exports = Books;