import { gql, useQuery } from '@apollo/client';
import {
    ApolloClient,
    InMemoryCache,
  } from "@apollo/client";
  
  const foodclient = new ApolloClient({
    uri: '/api/foods/graphql',
    cache: new InMemoryCache()
  });

function GET_FOOD_LIST() {
    const QUERY = gql`{
        foods {
          _id
          FoodName
          Picture
          Type {
            TypeName
          }
        }
      }`

    return useQuery(QUERY, {
        client: foodclient
    });
}

function GET_FOOD(id) {
    const QUERY = gql`
    query food($id: String!) {
    food(id: $id) {
        FoodName
        Picture
        Desc
        Type {
        TypeName
            }
        }
    }`
    return useQuery(QUERY, {
        variables: {id},
        client: foodclient
    });
}

function GET_TYPE_LIST() {
    const QUERY = gql`{
        Types {
          TypeName
          _id
        }
      }`

    return useQuery(QUERY, {
        client: foodclient
    });
}

function GET_TYPE(id) {
    const QUERY = gql`
    query Type($id: String!) {
        Type(id: $id) {
            TypeName
        }
    }`
    return useQuery(QUERY, {
        variables: {id},
        client: foodclient
    });
}


export {GET_FOOD_LIST, GET_FOOD, GET_TYPE_LIST, GET_TYPE};