import React, { useState, useEffect } from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormGroup from '@material-ui/core/FormGroup';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Axios from 'axios';

function Meniu() {

    const [cowName, setCowName] = useState('');
    const [favoriteSnack, setFavoriteSnack] = useState('');
    const [milkProduction, setMilkProduction] = useState('');
  
    const submitCow = () => {
      const cowObject = {
        cowName: cowName,
        favoriteSnack: favoriteSnack,
        milkProduction: milkProduction
      };
      
      Axios.post('http://localhost:3001/api/cows', cowObject).then(() => {
        console.log('COW INSTALLATION compleated');
      });

      window.location.reload();
    };
  
    return (
      <Card sx={{ maxWidth: 50 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lets add a new super-cow!
            </Typography>
            <FormGroup>
              <Input name="cowName" placeholder="A NAME" onChange={(e) => setCowName(e.target.value)}/>
              <Input name="favoriteSnack" placeholder="A SNACK" onChange={(e) => setFavoriteSnack(e.target.value)}/>
              <Input name="milkProduction" placeholder="AND MILK QUANTINTY" onChange={(e) => setMilkProduction(e.target.value)}/>
              <Button onClick={submitCow}>SUBMIT DAT COW</Button>
            </FormGroup>
          </CardContent>
        </Card> 
    );
  }
  
  export default Meniu;