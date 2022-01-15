const { GraphQLObjectType, GraphQLList, GraphQLString } = require("graphql");
const mongoose = require("mongoose");
const Types = require("../Schema/Types");
const Foods = require("../Schema/Foods");
const TypeType = require("./TypeType");
const FoodType = require("./FoodType");

const RootQueryType = new GraphQLObjectType ({
    name: 'RootQuery',
    description: 'Queries for root',
    fields: () => ({
        foods: {
            type: new GraphQLList(FoodType),
            description: 'List of all foods',
            resolve: async function () {
                var foods = await Foods.find({}).lean()
                return foods; 
            }
        },
        food: {
            type: FoodType,
            description: 'Singular food',
            args: {
                id: { type: GraphQLString }
            },
            resolve: async function (parent , args) {
                var food = await Foods.findOne({_id: mongoose.Types.ObjectId(args.id)})
                return food;
            }
        },
        types: {
            type: new GraphQLList(TypeType),
            description: 'List of all types',
            resolve: async function () {
                var types = await Types.find({}).lean()
                return types;
            }
        },
        Type: {
            type: TypeType,
            description: 'Singular type',
            args: {
                id: {type: GraphQLString}
            },
            resolve: async function (parent, args) {
                var type = await Types.findOne({_id: mongoose.Types.ObjectId(args.id)})
                return type;
            }
        }
    })
})

module.exports = RootQueryType;