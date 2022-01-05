const { GraphQLString, GraphQLObjectType, GraphQLNonNull, GraphQLError, GraphQLList } = require('graphql');
const Books = require('../Schema/Books');
// const BookType = require('./BookType.js')
const mongoose = require('mongoose');

const AuthorType = new GraphQLObjectType({
    name: 'AuthorType',
    description: 'This is for all the author',
    fields: () => ({
        _id: {type: new GraphQLNonNull(GraphQLString)},
        AuthorName: {type: new GraphQLNonNull(GraphQLString)},
        Books: {type: GraphQLList(require('./BookType.js')), resolve: async function (author) {
            var books = await Books.find({ AuthorID: mongoose.Types.ObjectId(author._id) })
            if(!books) {
                throw new GraphQLError('Books error')
            }
            return books
        }}
    })
})

module.exports = AuthorType;