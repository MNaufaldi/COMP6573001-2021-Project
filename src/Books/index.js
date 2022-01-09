const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP;
const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const mongoose = require('mongoose');
const RootQueryType = require('./Types/index.js');
const RootMutationType = require('./Mutations/index.js');

require('dotenv').config();

const app = express();
const mongourl = process.env.MONGO_URL;
mongoose.connect(mongourl,{ useNewUrlParser: true },(err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('DB Connected');
    }
});

const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: new GraphQLObjectType({
        name: 'Mutation', 
        fields: RootMutationType
    })
})

app.get("/", (req, res) => {
    res.send('Test');
});

app.use('/graphiql', expressGraphQL({
    schema:schema,
    // graphiql: true
}));

app.listen(8080, () => {
    console.log('Listening on port 8080');
});