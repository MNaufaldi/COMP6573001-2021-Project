const { GraphQLString, GraphQLObjectType, GraphQLNonNull, GraphQLError } = require('graphql');
const Breeds = require('../Schema/Breeds');
const mongoose = require('mongoose');

// const AuthorType = require('./AuthorType')

const CatType = new GraphQLObjectType({
    name:'CatType',
    description: 'This is for all the books',
    fields: () => ({
        _id: {type: new GraphQLNonNull(GraphQLString)},
        Name: {type: new GraphQLNonNull(GraphQLString)},
        BreedID: {type: new GraphQLNonNull(GraphQLString)},
        Photo: {type: new GraphQLNonNull(GraphQLString)},
        Desc: {type: new GraphQLNonNull(GraphQLString)},
        Breed: {type: require('./BreedType'), resolve: async function (book) {
            var breed = await Breeds.findById(mongoose.Types.ObjectId(book.BreedID))
            if(!breed) {
                throw new GraphQLError('Breed error')
            }
            return breed
        }}
    })
})

module.exports = CatType;