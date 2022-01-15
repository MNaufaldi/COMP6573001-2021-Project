const { GraphQLString, GraphQLObjectType, GraphQLNonNull, GraphQLError, GraphQLList } = require('graphql');
const Types = require('../Schema/Types');
// const BookType = require('./BookType.js')
const mongoose = require('mongoose');

const TypeType = new GraphQLObjectType({
    name: 'TypeType',
    description: 'This is for all the type',
    fields: () => ({
        _id: {type: new GraphQLNonNull(GraphQLString)},
        TypeName: {type: new GraphQLNonNull(GraphQLString)},
        Types: {type: GraphQLList(require('./FoodType.js')), resolve: async function (type) {
            var types = await Types.find({ TypeID: mongoose.Types.ObjectId(type._id) })
            if(!types) {
                throw new GraphQLError('Types error')
            }
            return types
        }}
    })
})

module.exports = TypeType;