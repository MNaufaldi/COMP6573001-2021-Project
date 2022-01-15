const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TypeSchema = new Schema({
    TypeName: {
        type: String,
        required: true
    }
}, {collection: 'Types'});

const Types = mongoose.model('Types', TypeSchema);
module.exports = Types;


