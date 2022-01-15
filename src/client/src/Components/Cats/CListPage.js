// eslint-disable-next-line
import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import CardDisplay from '../CardDisplay';
import { GET_CAT_LIST } from '../Queries/CatQuery';

const ListPage = () => {

    const createList = (array) =>{
        return array.map(cat => {
            return (
                <Grid item xs={3} align="center" key={cat._id}>
                    <Link to={`/cats/${cat._id}`} style={{textDecoration: 'none'}}>
                        <CardDisplay title={cat.Name} subtitle={cat.Breed.BreedName} key={cat._id} cover={cat.Photo}/>
                    </Link>
                </Grid>
            )
        })
    }

    const getData = () => {
        const { loading, error, data } = GET_CAT_LIST(); 
        if(loading) {
            return 'loading'; // Maybe replace w/ placeholder if have time
        }
        if(error) {
            return 'error';
        }
        // console.log(data.cats);
        return createList(data.cats)
    }

        return (
            <div>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sx={{backgroundColor: '#3f51b5', color:'#ffffff'}} >
                            <h1>Cats</h1>
                        </Grid>
                        { getData() }
                    </Grid>
                </div>

            </div>
        )
    }


export default ListPage;