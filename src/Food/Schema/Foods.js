const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const FoodSchema = new Schema({
    FoodName: {
        type: String,
        required: true
    },
    TypeID: {
        type: Schema.Types.ObjectId,
        required: true
    },
    Picture: {
        type: String,
        required: true
    },
    Desc: {
        type: String,
        required: true
    }
}, {collection: 'Foods'});

const Foods = mongoose.model('Foods', FoodSchema);
module.exports = Foods;