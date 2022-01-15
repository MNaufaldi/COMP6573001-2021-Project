const { GraphQLString, GraphQLObjectType, GraphQLNonNull, GraphQLError, GraphQLList } = require('graphql');
const Cat = require('../Schema/Cat');
// const BookType = require('./BookType.js')
const mongoose = require('mongoose');

const BreedType = new GraphQLObjectType({
    name: 'BreedType',
    description: 'This is for all the breeds',
    fields: () => ({
        _id: {type: new GraphQLNonNull(GraphQLString)},
        BreedName: {type: new GraphQLNonNull(GraphQLString)},
        Lifespan: {type: new GraphQLNonNull(GraphQLString)},
        Cat: {type: GraphQLList(require('./CatType.js')), resolve: async function (breed) {
            var books = await Cat.find({ BreedID: mongoose.Types.ObjectId(breed._id) })
            if(!books) {
                throw new GraphQLError('Cat error')
            }
            return books
        }}
    })
})

module.exports = BreedType;