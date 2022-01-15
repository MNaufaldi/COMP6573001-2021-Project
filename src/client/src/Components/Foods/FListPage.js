// eslint-disable-next-line
import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import CardDisplay from '../CardDisplay';
import { GET_FOOD_LIST } from '../Queries/FoodQuery';

const ListPage = () => {

    const createList = (array) =>{
        return array.map(food => {
            return (
                <Grid item xs={3} align="center" key={food._id}>
                    <Link to={`/foods/${food._id}`} style={{textDecoration: 'none'}}>
                        <CardDisplay title={food.FoodName} subtitle={food.Type.TypeName} key={food._id} cover={food.Picture}/>
                    </Link>
                </Grid>
            )
        })
    }

    const getData = () => {
        const { loading, error, data } = GET_FOOD_LIST(); 
        if(loading) {
            return 'loading'; // Maybe replace w/ placeholder if have time
        }
        if(error) {
            return 'error';
        }
        // console.log(data.foods);
        return createList(data.foods)
    }

        return (
            <div>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sx={{backgroundColor: '#3f51b5', color:'#ffffff'}} >
                            <h1>Foods</h1>
                        </Grid>
                        { getData() }
                    </Grid>
                </div>

            </div>
        )
    }


export default ListPage;