const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP;
const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const mongoose = require('mongoose');
const RootQueryType = require('./Types/index.js');
const RootMutationType = require('./Mutations/index.js');
const cors = require('cors');

// require('dotenv').config();

const app = express();
app.use(cors());

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

app.get("/test", (req, res) => {
    // res.send(process.env.MONGO_URL);
    mongoose.connect(mongourl,{ useNewUrlParser: true },(err) => {
        if(err) {
            console.log(err);
        } else {
            console.log('DB Connected');
        }
    });
});

app.get("/books/test", (req, res) => {
    res.send('Test2');
});

app.use('/graphiql', expressGraphQL({
    schema:schema,
    graphiql: true
}));



app.use('/graphql',expressGraphQL(req => ({
      schema:schema,
    })),
);

app.listen(5000, () => {
    console.log('Listening on port 5000');
});