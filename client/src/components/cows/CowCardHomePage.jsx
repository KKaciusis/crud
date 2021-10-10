import * as React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

function CowHome(props) {
    return(
        <Card className="cowCard">
            <CardMedia
              component="img"
              height="300"
              image={"/uploads/" + props.data.imgPath}
              alt="this is supposed to be a cow"
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
          </Card>
    );
};
  
  
export default CowHome;
