const { GraphQLString, GraphQLNonNull, GraphQLError } = require("graphql");
const Authors = require("../Schema/Authors");
const AuthorType = require("../Types/AuthorType");


const addAuthor = {
    type: AuthorType,
    args: {
        AuthorName: {
            name: 'AuthorName',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async function (parent, args) {
        const model = new Authors(args)
        const newAuthor = await model.save();
        if(!newAuthor) {
            throw new GraphQLError('Failed author');
        }
        return newAuthor;
    }
}

const updateAuthor = {
    type: AuthorType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLString)
        },
        AuthorName: {
            name: 'AuthorName',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async function (parent, args) {
        let updates = [];
        if (args.AuthorName) {
            updates.AuthorName = args.AuthorName;
        }
        const updAuthor = await Authors.findByIdAndUpdate(args._id, updates, {new: true})
        if(!updAuthor) {
            throw new GraphQLError('Failed update author');
        }
        return updAuthor;
    }
}

const deleteAuthor = {
    type: AuthorType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async function (parent, args) {
        const dAuthor = await Authors.findByIdAndRemove(args._id)
        if(!dAuthor) {
            throw new GraphQLError('Failed delete author');
        }
        return dAuthor;
    }
}

module.exports = {addAuthor, updateAuthor, deleteAuthor};