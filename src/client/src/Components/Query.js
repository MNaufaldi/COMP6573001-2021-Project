import { gql, useQuery } from '@apollo/client';


function GET_BOOK_LIST() {
    const QUERY = gql`{
        books {
            BookTitle
            _id
            Cover
            Author {
            AuthorName
            }
        }
    }`

    return useQuery(QUERY);
}

function GET_BOOK(id) {
    const QUERY = gql`
    query book($id: String!) {
        book(id: $id) {
            BookTitle
            Cover
            Genre
            Desc
            Author {
                AuthorName
            }
        }
    }`
    return useQuery(QUERY, {
        variables: {id}
    });
}

function GET_AUTHOR_LIST() {
    const QUERY = gql`{
        authors{
          AuthorName
          _id
        }
      }`

    return useQuery(QUERY);
}

function GET_AUTHOR(_id) {
    const QUERY = gql`{
        author(id:_id){
          AuthorName
        }
      }`

    return useQuery(QUERY);
}


export {GET_BOOK_LIST, GET_BOOK, GET_AUTHOR_LIST, GET_AUTHOR};