import React, { useState, useEffect } from "react";
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
      
      Axios.post('http://localhost:3001/api/insert', cowObject).then(() => {
        console.log('COW INSTALLATION compleated');
      });

      window.location.reload();
    };
  
    return (
        <div className="form">
          <input type="text" name="cowName" onChange={(e) => setCowName(e.target.value)}></input>
          <input type="text" name="favoriteSnack" onChange={(e) => setFavoriteSnack(e.target.value)}></input>
          <input type="text" name="milkProduction" onChange={(e) => setMilkProduction(e.target.value)}></input>
          <button onClick={submitCow}>submit</button>
        </div>
    );
  }
  
  export default Meniu;