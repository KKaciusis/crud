import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function Cow(props) {
    return(
        <Card sx={{ maxWidth: 50 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://via.placeholder.com/350x350"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.data.cowName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Fav. snack: {props.data.favoriteSnack}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small" onClick={() => props.delete(props.data.id)}>DROP DAT COW</Button>
            </CardActions>
          </Card>
    );
};
  
  
export default Cow;