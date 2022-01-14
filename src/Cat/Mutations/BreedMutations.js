const { GraphQLString, GraphQLNonNull, GraphQLError } = require("graphql");
const Breeds = require("../Schema/Breeds");
const BreedType = require("../Types/BreedType");


const addBreed = {
    type: BreedType,
    args: {
        BreedName: {
            name: 'BreedName',
            type: new GraphQLNonNull(GraphQLString)
        },
        Lifespan: {
            name: 'Lifespan',
            type: new GraphQLNonNull(GraphQLString)
        },

    },
    resolve: async function (parent, args) {
        const model = new Breeds(args)
        const newBreed = await model.save();
        if(!newBreed) {
            throw new GraphQLError('Failed breed');
        }
        return newBreed;
    }
}

const updateBreed = {
    type: BreedType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLString)
        },
        BreedName: {
            name: 'BreedName',
            type: new GraphQLNonNull(GraphQLString)
        },
        Lifespan: {
            name: 'Lifespan',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async function (parent, args) {
        let updates = [];
        if (args.BreedName) {
            updates.BreedName = args.BreedName;
        }
        if (args.Lifespan) {
            updates.Lifespan = args.Lifespan;
        }
        const updBreed = await Breeds.findByIdAndUpdate(args._id, updates, {new: true})
        if(!updBreed) {
            throw new GraphQLError('Failed update breed');
        }
        return updBreed;
    }
}

const deleteBreed = {
    type: BreedType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async function (parent, args) {
        const dBreed = await Breeds.findByIdAndRemove(args._id)
        if(!dBreed) {
            throw new GraphQLError('Failed delete breed');
        }
        return dBreed;
    }
}

module.exports = {addBreed, updateBreed, deleteBreed};