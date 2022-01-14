const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BreedSchema = new Schema({
    BreedName: {
        type: String,
        required: true
    },
    Lifespan: {
        type: String,
        required: true
    }
}, {collection: 'Breeds'});

const Breeds = mongoose.model('Breeds', BreedSchema);
module.exports = Breeds;


