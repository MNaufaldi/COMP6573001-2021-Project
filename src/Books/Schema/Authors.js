const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    AuthorName: {
        type: String,
        required: true
    }
}, {collection: 'Authors'});

const Authors = mongoose.model('Authors', AuthorSchema);
module.exports = Authors;


