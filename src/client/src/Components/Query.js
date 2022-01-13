import { gql, useQuery } from '@apollo/client';


function GET_ALL() {
    const QUERY = gql`{
        books {
            BookTitle
            _id
        }
    }`
}


export {GET_ALL};