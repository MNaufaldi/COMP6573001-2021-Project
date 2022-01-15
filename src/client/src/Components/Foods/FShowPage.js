// eslint-disable-next-line
import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { GET_FOOD } from '../Queries/FoodQuery';
import { useParams } from 'react-router-dom';


const ShowPage = () => {
    const { id } = useParams();

    const createPage = (food) => {
        return (
            <Grid container spacing={4}>
                <Grid item xs={12} sx={{backgroundColor: '#3f51b5', color:'#ffffff'}} >
                    <h1>Foods</h1>
                </Grid>
                <Grid item xs={4} align="center">
                    <Box component="img" src={ food.Picture } sx={{height: 350, width: 350}} borderColor="black" border={2}>   
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Typography gutterBottom variant='h2'> 
                        { food.FoodName }
                    </Typography>
                    <Typography gutterBottom variant='h4'> 
                        { food.Type.TypeName }
                    </Typography>
                    <Typography gutterBottom variant='h5'> 
                        '' 
                    </Typography>
                    <Typography variant='body1'>
                        { food.Desc }
                    </Typography>
                </Grid>
            </Grid>
        )
    }

    const getData = () => {
        const { loading, error, data } = GET_FOOD(id); 
        if(loading) {
            return 'loading'; // Maybe replace w/ placeholder if have time
        }
        if(error) {
            return 'error';
        }
        // console.log(data.food);
        return createPage(data.food);
    }

        return (
            <div>
                { getData() }
            </div>
        )
    }


export default ShowPage;