import { gql, useQuery } from '@apollo/client';
import {
    ApolloClient,
    InMemoryCache,
  } from "@apollo/client";
  
  const catclient = new ApolloClient({
    uri: '/api/cats/graphql',
    cache: new InMemoryCache()
  });


function GET_CAT_LIST() {
    const QUERY = gql`{
        cats {
          _id
          Name
          Photo
          Breed {
            BreedName
          }
        }
      }`

    return useQuery(QUERY, {
        client: catclient
    });
}

function GET_CAT(id) {
    const QUERY = gql`
    query cat($id: String!) {
        cat(id: $id){
            Name
            Photo
            Desc
            Breed {
                BreedName
                Lifespan
            }
        }
    }`
    return useQuery(QUERY, {
        variables: {id},
        client:catclient

    });
}

function GET_BREED_LIST() {
    const QUERY = gql`{
        breeds {
          _id
          BreedName
          Lifespan
        }
      }`

    return useQuery(QUERY, {
        client:catclient
    });
}

function GET_BREED(id) {
    const QUERY = gql`
    query breed($id: String!) {
        breed(id: $id){
            BreedName
            Lifespan
            }
        }`
    return useQuery(QUERY, {
        variables: {id},
        client:catclient

    });
}


export {GET_CAT_LIST, GET_CAT, GET_BREED_LIST, GET_BREED};