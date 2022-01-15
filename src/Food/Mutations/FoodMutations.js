const { GraphQLString, GraphQLNonNull, GraphQLError } = require("graphql");
const Foods = require("../Schema/Foods");
const Types = require("../Schema/Types");
const FoodType = require("../Types/FoodType");


const addFood = {
    type: FoodType,
    args: {
        FoodName: {
            name: 'FoodName',
            type: new GraphQLNonNull(GraphQLString)
        },
        TypeID: {
            name: 'TypeID',
            type: new GraphQLNonNull(GraphQLString)
        },
        Picture: {
            name: 'Picture',
            type: new GraphQLNonNull(GraphQLString)
        },
        Desc: {
            name: 'Desc',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async function (parent, args) {
        const model = new Foods(args)
        const newFood = await model.save();
        if(!newFood) {
            throw new GraphQLError('Failed food');
        }
        return newFood;
    }
}

const updateFood = {
    type: FoodType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLString)
        },
        FoodName: {
            name: 'FoodName',
            type: new GraphQLNonNull(GraphQLString)
        },
        TypeID: {
            name: 'TypeID',
            type: new GraphQLNonNull(GraphQLString)
        },
        Picture: {
            name: 'Picture',
            type: new GraphQLNonNull(GraphQLString)
        },
        Desc: {
            name: 'Desc',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async function (parent, args) {
        let updates = [];
        if (args.FoodName) {
            updates.FoodName = args.FoodName;
        }
        if (args.TypeID) {
            updates.TypeID = args.TypeID;
        }
        if (args.Picture) {
            updates.Picture = args.Picture;
        }
        if (args.Desc) {
            updates.Desc = args.Desc;
        }
        const updFood = await Foods.findByIdAndUpdate(args._id, updates, {new: true})
        if(!updFood) {
            throw new GraphQLError('Failed update food');
        }
        return updFood;
    }
}

const deleteFood = {
    type: FoodType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async function (parent, args) {
        const dFood = await Foods.findByIdAndRemove(args._id)
        if(!dFood) {
            throw new GraphQLError('Failed delete food');
        }
        return dFood;
    }
}

module.exports = {addFood, updateFood, deleteFood};