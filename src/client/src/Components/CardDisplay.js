import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardMedia } from '@mui/material';

class CardDisplay extends Component{
    render() {
        return (
            <Card sx={{ maxWidth: 300 }} align="left">
              <CardActionArea>
                <CardContent>
                  <div style={{ display:'flex', justifyContent:'center' }}> 
                    <CardMedia
                          component="img"
                          alt="Book Cover"
                          sx={{ width: 150 }}
                          image={this.props.cover}
                          align='center'
                        />
                  </div>
                  <Typography gutterBottom variant="body1" component="div">
                      {this.props.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {this.props.subtitle}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
    }
}

export default CardDisplay;