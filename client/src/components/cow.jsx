import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function Cow(props) {
    return(
        <Card className="cowCard">
            <CardMedia
              component="img"
              height="140"
              image={props.data.imagePath}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.data.cowName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Favorite snack: {props.data.favoriteSnack}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Milk Production ml/s: {props.data.milkProduction}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => props.delete(props.data.id)}>DROP DAT COW</Button>
            </CardActions>
          </Card>
    );
};
  
  
export default Cow;