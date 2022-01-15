// eslint-disable-next-line
import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import CardDisplay from '../CardDisplay';
import { GET_BOOK_LIST } from '../Queries/BookQuery';

const ListPage = () => {

    const createList = (array) =>{
        return array.map(book => {
            return (
                <Grid item xs={3} align="center" key={book._id}>
                    <Link to={`/books/${book._id}`} style={{textDecoration: 'none'}}>
                        <CardDisplay title={book.BookTitle} subtitle={book.Author.AuthorName} key={book._id} cover={book.Cover}/>
                    </Link>
                </Grid>
            )
        })
    }

    const getData = () => {
        const { loading, error, data } = GET_BOOK_LIST(); 
        if(loading) {
            return 'loading'; // Maybe replace w/ placeholder if have time
        }
        if(error) {
            return 'error';
        }
        // console.log(data.books);
        return createList(data.books)
    }

        return (
            <div>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sx={{backgroundColor: '#3f51b5', color:'#ffffff'}} >
                            <h1>Books</h1>
                        </Grid>
                        { getData() }
                    </Grid>
                </div>

            </div>
        )
    }


export default ListPage;