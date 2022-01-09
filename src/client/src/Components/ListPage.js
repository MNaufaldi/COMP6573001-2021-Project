// eslint-disable-next-line
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import CardDisplay from './CardDisplay';

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
                            <Link to='/books' style={{textDecoration: 'none'}}>
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
}

export default ListPage;