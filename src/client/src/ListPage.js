// eslint-disable-next-line
import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ListPage = () => {

    const createCard = (title) => { 
        return (
        <Card sx={{ maxWidth: 300 }} align="left">
            <CardActionArea>
                <CardContent>
                    <div style={{ display:'flex', justifyContent:'center' }}> 
                    </div>
                    <Typography gutterBottom variant="body1" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        ''
                    </Typography>
                </CardContent>
            </CardActionArea>
      </Card>
        )
    }


        return (
            <div>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sx={{backgroundColor: '#3f51b5', color:'#ffffff'}} >
                            <h1>This is title</h1>
                        </Grid>
                        <Grid item xs={3} align="center">
                            <Link to={`/foods`} style={{textDecoration: 'none'}}>
                                { createCard('Foods') }
                            </Link>
                        </Grid>
                        <Grid item xs={3} align="center">
                            <Link to={`/cats`} style={{textDecoration: 'none'}}>
                                { createCard('Cats') }
                            </Link>
                        </Grid>
                        <Grid item xs={3} align="center">
                            <Link to={`/books`} style={{textDecoration: 'none'}}>
                                { createCard('Books') }
                            </Link>
                        </Grid>
                    </Grid>
                </div>

            </div>
        )
    }


export default ListPage;