const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const CatSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    BreedID: {
        type: Schema.Types.ObjectId,
        required: true
    },
    Desc: {
        type: String,
        required: true
    },
    Photo: {
        type: String,
        required: true
    }
}, {collection: 'Cat'});

const Cat = mongoose.model('Cat', CatSchema);
module.exports = Cat;