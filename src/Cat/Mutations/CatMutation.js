const { GraphQLString, GraphQLNonNull, GraphQLError } = require("graphql");
const Cat = require("../Schema/Cat");
const Breeds = require("../Schema/Breeds");
const CatType = require("../Types/CatType");


const addCat = {
    type: CatType,
    args: {
        Name: {
            name: 'Name',
            type: new GraphQLNonNull(GraphQLString)
        },
        BreedID: {
            name: 'BreedID',
            type: new GraphQLNonNull(GraphQLString)
        },
        Cover: {
            name: 'Cover',
            type: new GraphQLNonNull(GraphQLString)
        },
        Desc: {
            name: 'Desc',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async function (parent, args) {
        const model = new Cat(args)
        const newCat = await model.save();
        if(!newCat) {
            throw new GraphQLError('Failed cat');
        }
        return newCat;
    }
}

const updateCat = {
    type: CatType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLString)
        },
        Name: {
            name: 'Name',
            type: new GraphQLNonNull(GraphQLString)
        },
        BreedID: {
            name: 'BreedID',
            type: new GraphQLNonNull(GraphQLString)
        },
        Cover: {
            name: 'Cover',
            type: new GraphQLNonNull(GraphQLString)
        },
        Desc: {
            name: 'Desc',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async function (parent, args) {
        let updates = [];
        if (args.Name) {
            updates.Name = args.Name;
        }
        if (args.BreedID) {
            updates.BreedID = args.BreedID;
        }
        if (args.Cover) {
            updates.Cover = args.Cover;
        }
        if (args.Desc) {
            updates.Desc = args.Desc;
        }
        const updCat = await Cat.findByIdAndUpdate(args._id, updates, {new: true})
        if(!updCat) {
            throw new GraphQLError('Failed update cat');
        }
        return updCat;
    }
}

const deleteCat = {
    type: CatType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async function (parent, args) {
        const dCat = await Cat.findByIdAndRemove(args._id)
        if(!dCat) {
            throw new GraphQLError('Failed delete cat');
        }
        return dCat;
    }
}

module.exports = {addCat, updateCat, deleteCat};