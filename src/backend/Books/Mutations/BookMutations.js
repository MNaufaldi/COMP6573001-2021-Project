const { GraphQLString, GraphQLNonNull, GraphQLError } = require("graphql");
const Books = require("../Schema/Books");
const Authors = require("../Schema/Authors");
const BookType = require("../Types/BookType");


const addBook = {
    type: BookType,
    args: {
        BookTitle: {
            name: 'BookTitle',
            type: new GraphQLNonNull(GraphQLString)
        },
        AuthorID: {
            name: 'AuthorID',
            type: new GraphQLNonNull(GraphQLString)
        },
        Genre: {
            name: 'Genre',
            type: new GraphQLNonNull(GraphQLString)
        },
        Cover: {
            name: 'Cover',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async function (parent, args) {
        const model = new Books(args)
        const newBook = await model.save();
        if(!newBook) {
            throw new GraphQLError('Failed book');
        }
        return newBook;
    }
}

const updateBook = {
    type: BookType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLString)
        },
        BookTitle: {
            name: 'BookTitle',
            type: new GraphQLNonNull(GraphQLString)
        },
        AuthorID: {
            name: 'AuthorID',
            type: new GraphQLNonNull(GraphQLString)
        },
        Genre: {
            name: 'Genre',
            type: new GraphQLNonNull(GraphQLString)
        },
        Cover: {
            name: 'Cover',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async function (parent, args) {
        let updates = [];
        if (args.BookTitle) {
            updates.BookTitle = args.BookTitle;
        }
        if (args.AuthorID) {
            updates.AuthorID = args.AuthorID;
        }
        if (args.Genre) {
            updates.Genre = args.Genre;
        }
        if (args.Cover) {
            updates.Cover = args.Cover;
        }
        const updAuthor = await Books.findByIdAndUpdate(args._id, updates, {new: true})
        if(!updAuthor) {
            throw new GraphQLError('Failed update book');
        }
        return updAuthor;
    }
}

const deleteBook = {
    type: BookType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async function (parent, args) {
        const dBook = await Books.findByIdAndRemove(args._id)
        if(!dBook) {
            throw new GraphQLError('Failed delete book');
        }
        return dBook;
    }
}

module.exports = {addBook, updateBook, deleteBook};