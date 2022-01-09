import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

class CardDisplay extends Component{
    render() {
        return (
            <Card sx={{ maxWidth: 400 }} align="left">
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
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