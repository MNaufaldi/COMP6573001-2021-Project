// eslint-disable-next-line
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from 'axios';


class ShowPage extends Component {
    async componentDidMount() {
        axios.post({
            url: 'api/graphql',
            data: {
              query: `{
                books {
                  BookTitle
                  _id
                }
              }`
            }
          }).then((result) => {
            console.log(result.data)
          });
    }

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
                            <Typography variant='h1'> 
                                Title
                            </Typography>
                            <Typography variant='h2'> 
                                Author
                            </Typography>
                            <Typography variant='h4'> 
                                Genre
                            </Typography>
                            <p>Testing desc</p>
                        </Grid>

                    </Grid>
                </div>

            </div>
        )
    }
}

export default ShowPage;