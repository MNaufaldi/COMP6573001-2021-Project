const { GraphQLString, GraphQLObjectType, GraphQLNonNull, GraphQLError } = require('graphql');
const Authors = require('../Schema/Authors');
const mongoose = require('mongoose');

// const AuthorType = require('./AuthorType')

const BookType = new GraphQLObjectType({
    name:'BookType',
    description: 'This is for all the books',
    fields: () => ({
        _id: {type: new GraphQLNonNull(GraphQLString)},
        BookTitle: {type: new GraphQLNonNull(GraphQLString)},
        AuthorID: {type: new GraphQLNonNull(GraphQLString)},
        Genre: {type: new GraphQLNonNull(GraphQLString)},
        Cover: {type: new GraphQLNonNull(GraphQLString)},
        Author: {type: require('./AuthorType'), resolve: async function (book) {
            var author = await Authors.findById(mongoose.Types.ObjectId(book.AuthorID))
            if(!author) {
                throw new GraphQLError('Author error')
            }
            return author
        }}
    })
})

module.exports = BookType;