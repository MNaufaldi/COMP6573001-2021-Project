import { gql, useQuery } from '@apollo/client';


async function GET_ALL() {
    const QUERY = gql`{
        books {
            BookTitle
            _id
        }
    }`
    const { loading, error, data } = useQuery(QUERY); 
    console.log(data);
}


export {GET_ALL};