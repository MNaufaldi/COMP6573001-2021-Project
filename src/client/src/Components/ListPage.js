// eslint-disable-next-line
import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import CardDisplay from './CardDisplay';
import { GET_ALL } from './Query';
import { gql, useQuery } from '@apollo/client';


const ListPage = () => {
    const getData = () => {
        const { loading, error, data } = GET_ALL(); 
        if(loading) {
            // console.log('loading')
            return 'loading'
        }
        if(error) {
            console.log(error);
            // console.error('error');
        }
        return ( 
        <Grid item xs={4} align="center">
            <CardDisplay title={'Foods'} subtitle={''}/>
        </Grid>
        )
    }

        return (
            <div>
                <div>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sx={{backgroundColor: '#3f51b5', color:'#ffffff'}} >
                            <h1>This is title</h1>
                        </Grid>
                        <Grid item xs={4} align="center">
                            <Link to='/list_books' style={{textDecoration: 'none'}}>
                                <CardDisplay title={'Books'} subtitle={''}/>
                            </Link>
                        </Grid>
                        <Grid item xs={4} align="center">
                            <Link to='/cats' style={{textDecoration: 'none'}}>
                                <CardDisplay title={'Cats'} subtitle={''}/>
                            </Link>
                        </Grid>
                        {getData()}
                    </Grid>
                </div>

            </div>
        )
    }


export default ListPage;