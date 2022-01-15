const { GraphQLObjectType, GraphQLList, GraphQLString } = require("graphql");
const mongoose = require("mongoose");
const Cat = require("../Schema/Cat");
const Breeds = require("../Schema/Breeds");
const BreedType = require("./BreedType");
const CatType = require("./CatType");

const RootQueryType = new GraphQLObjectType ({
    name: 'RootQuery',
    description: 'Queries for root',
    fields: () => ({
        cats: {
            type: new GraphQLList(CatType),
            description: 'List of all cats',
            resolve: async function () {
                var cats = await Cat.find({}).lean()
                return cats; 
            }
        },
        cat: {
            type: CatType,
            description: 'Singular cat',
            args: {
                id: { type: GraphQLString }
            },
            resolve: async function (parent , args) {
                var cat = await Cat.findOne({_id: mongoose.Types.ObjectId(args.id)})
                return cat;
            }
        },
        breeds: {
            type: new GraphQLList(BreedType),
            description: 'List of all breeds',
            resolve: async function () {
                var breeds = await Breeds.find({}).lean()
                return breeds;
            }
        },
        breed: {
            type: BreedType,
            description: 'Singular breed',
            args: {
                id: {type: GraphQLString}
            },
            resolve: async function (parent, args) {
                var breed = await Breeds.findOne({_id: mongoose.Types.ObjectId(args.id)})
                return breed;
            }
        }
    })
})

module.exports = RootQueryType;