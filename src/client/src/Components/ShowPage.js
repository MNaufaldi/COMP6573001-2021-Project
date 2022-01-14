// eslint-disable-next-line
import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { GET_BOOK } from './Query';
import { useParams } from 'react-router-dom';


const ShowPage = () => {
    const { id } = useParams();

    const createPage = (book) => {
        return (
            <Grid container spacing={4}>
                <Grid item xs={12} sx={{backgroundColor: '#3f51b5', color:'#ffffff'}} >
                    <h1>This is title</h1>
                </Grid>
                <Grid item xs={4} align="center">
                    <Box component="img" src={ book.Cover } sx={{height: 350}} borderColor="black" border={2}>   
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Typography gutterBottom variant='h2'> 
                        { book.BookTitle }
                    </Typography>
                    <Typography gutterBottom variant='h4'> 
                        { book.Author.AuthorName }
                    </Typography>
                    <Typography gutterBottom variant='h5'> 
                        { book.Genre }
                    </Typography>
                    <Typography variant='body1'>
                        { book.Desc }
                    </Typography>
                </Grid>
            </Grid>
        )
    }

    const getData = () => {
        const { loading, error, data } = GET_BOOK(id); 
        if(loading) {
            return 'loading'; // Maybe replace w/ placeholder if have time
        }
        if(error) {
            return 'error';
        }
        // console.log(data.book);
        return createPage(data.book);
    }

    let book = getData();
    
        return (
            <div>
                { getData() }
            </div>
        )
    }


export default ShowPage;