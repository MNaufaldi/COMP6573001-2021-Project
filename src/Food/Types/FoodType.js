const { GraphQLString, GraphQLObjectType, GraphQLNonNull, GraphQLError } = require('graphql');
const Types = require('../Schema/Types');
const mongoose = require('mongoose');

// const TypeType = require('./TypeType')

const FoodType = new GraphQLObjectType({
    name:'FoodType',
    description: 'This is for all the foods',
    fields: () => ({
        _id: {type: new GraphQLNonNull(GraphQLString)},
        FoodName: {type: new GraphQLNonNull(GraphQLString)},
        TypeID: {type: new GraphQLNonNull(GraphQLString)},
        Picture: {type: new GraphQLNonNull(GraphQLString)},
        Desc: {type: new GraphQLNonNull(GraphQLString)},
        Type: {type: require('./TypeType'), resolve: async function (food) {
            var author = await Types.findById(mongoose.Types.ObjectId(food.TypeID))
            if(!author) {
                throw new GraphQLError('Type error')
            }
            return author
        }}
    })
})

module.exports = FoodType;