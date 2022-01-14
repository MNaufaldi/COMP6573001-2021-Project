const { GraphQLString, GraphQLNonNull, GraphQLError } = require("graphql");
const Types = require("../Schema/Types");
const TypeType = require("../Types/TypeType");


const addType = {
    type: TypeType,
    args: {
        TypeName: {
            name: 'TypeName',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async function (parent, args) {
        const model = new Types(args)
        const newType = await model.save();
        if(!newType) {
            throw new GraphQLError('Failed type');
        }
        return newType;
    }
}

const updateType = {
    type: TypeType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLString)
        },
        TypeName: {
            name: 'TypeName',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async function (parent, args) {
        let updates = [];
        if (args.TypeName) {
            updates.TypeName = args.TypeName;
        }
        const updType = await Types.findByIdAndUpdate(args._id, updates, {new: true})
        if(!updType) {
            throw new GraphQLError('Failed update type');
        }
        return updType;
    }
}

const deleteType = {
    type: TypeType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async function (parent, args) {
        const dType = await Types.findByIdAndRemove(args._id)
        if(!dType) {
            throw new GraphQLError('Failed delete type');
        }
        return dType;
    }
}

module.exports = {addType, updateType, deleteType};