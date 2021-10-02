import React, { useState, useEffect } from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormGroup from '@material-ui/core/FormGroup';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SendIcon from '@material-ui/icons/Send';
import Axios from 'axios';
import "../index.css";

function Meniu() {
    const [cowName, setCowName] = useState('');
    const [favoriteSnack, setFavoriteSnack] = useState('');
    const [milkProduction, setMilkProduction] = useState('');

    const [newFavoriteSnack, setNewFavoriteSnack] = useState('');
    const [newMilkProduction, setNewMilkProduction] = useState('');
  
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
    const editCow = () => {
      const cowObject = {
        cowName: cowName,
        newFavoriteSnack: newFavoriteSnack,
        newMilkProduction: newMilkProduction
      };
      setNewMilkProduction('');
      setNewFavoriteSnack('');
      
      Axios.put('http://localhost:3001/api/cows', cowObject).then(() => {
        console.log('COW INSTALLATION compleated');
      });

      window.location.reload();
    };
  
    return (
      <div className="menuWrapper">
      <Card className="menuCard">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lets add a new super-cow!
            </Typography>
            <FormGroup>
              <Input name="cowName" placeholder="A NAME" onChange={(e) => setCowName(e.target.value)}/>
              <Input name="favoriteSnack" placeholder="A SNACK" onChange={(e) => setFavoriteSnack(e.target.value)}/>
              <Input name="milkProduction" placeholder="AND MILK QUANTINTY" onChange={(e) => setMilkProduction(e.target.value)}/>
              <Button onClick={submitCow} variant="contained" endIcon={<SendIcon/>}>SUBMIT DAT COW</Button>
            </FormGroup>
          </CardContent>
        </Card>
        <Card className="menuCard">
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lets Update a super-cow!
          </Typography>
          <FormGroup>
            <Input name="cowName" placeholder="SELECT COW BY NAME" onChange={(e) => setCowName(e.target.value)}/>
            <Input name="favoriteSnack" placeholder="A NEW SNACK" onChange={(e) => setNewFavoriteSnack(e.target.value)}/>
            <Input name="milkProduction" placeholder="NEW MILK QUANTINTY" onChange={(e) => setNewMilkProduction(e.target.value)}/>
            <Button onClick={editCow} variant="outlined">UPDATE DAT COW</Button>
          </FormGroup>
        </CardContent>
      </Card>
      </div>
    );
  }
  
  export default Meniu;