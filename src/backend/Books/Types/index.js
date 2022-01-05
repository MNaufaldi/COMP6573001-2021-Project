const { GraphQLObjectType, GraphQLList, GraphQLString } = require("graphql");
const mongoose = require("mongoose");
const Authors = require("../Schema/Authors");
const Books = require("../Schema/Books");
const AuthorType = require("./AuthorType");
const BookType = require("./BookType");

const RootQueryType = new GraphQLObjectType ({
    name: 'RootQuery',
    description: 'Queries for root',
    fields: () => ({
        books: {
            type: new GraphQLList(BookType),
            description: 'List of all books',
            resolve: async function () {
                var books = await Books.find({}).lean()
                return books; 
            }
        },
        book: {
            type: BookType,
            description: 'Singular book',
            args: {
                id: { type: GraphQLString }
            },
            resolve: async function (parent , args) {
                var book = await Books.findOne({_id: mongoose.Types.ObjectId(args.id)})
                return book;
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            description: 'List of all authors',
            resolve: async function () {
                var authors = await Authors.find({}).lean()
                return authors;
            }
        },
        author: {
            type: AuthorType,
            description: 'Singular author',
            args: {
                id: {type: GraphQLString}
            },
            resolve: async function (parent, args) {
                var author = await Authors.findOne({_id: mongoose.Types.ObjectId(args.id)})
                return author;
            }
        }
    })
})

module.exports = RootQueryType;