// eslint-disable-next-line
import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import CardDisplay from './CardDisplay';
import { GET_ALL } from './Query';
import { gql, useQuery } from '@apollo/client';


const ListPage = () => {
    GET_ALL();
    
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
                        <Grid item xs={4} align="center">
                            <Link to='/foods' style={{textDecoration: 'none'}}>
                                <CardDisplay title={'Foods'} subtitle={''}/>
                            </Link>
                        </Grid>
                    </Grid>
                </div>

            </div>
        )
    }


export default ListPage;