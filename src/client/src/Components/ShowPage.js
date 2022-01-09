// eslint-disable-next-line
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


class ListPage extends Component {
    render() {
        return (
            <div>
                <div>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sx={{backgroundColor: '#3f51b5', color:'#ffffff'}} >
                            <h1>This is title</h1>
                        </Grid>
                        <Grid item xs={4} align="center">
                            <Box component="img" src="https://media.istockphoto.com/photos/blue-book-stack-picture-id1290063471" sx={{height: 350}} borderColor="black" border={2}>   
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant='h5'> 
                                <h1>Title</h1>
                            </Typography>
                            <Typography variant='subtitle1'> 
                                <h1>Author</h1>
                            </Typography>
                            <Typography variant='caption'> 
                                <h1>Genre</h1>
                            </Typography>
                            <p>Testing desc</p>
                        </Grid>

                    </Grid>
                </div>

            </div>
        )
    }
}

export default ListPage;