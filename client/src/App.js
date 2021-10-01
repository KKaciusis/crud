import './App.css';
import React, { useState, useEffect } from "react";
import Axios from 'axios';

function App() {

  const [cowName, setCowName] = useState('');
  const [favoriteSnack, setFavoriteSnack] = useState('');
  const [milkProduction, setMilkProduction] = useState('');

  const submitCow = () => {
    Axios.post('http://localhost:3001/api/insert', {cowName: cowName, favoriteSnack: favoriteSnack, milkProduction: milkProduction}).then(() => {
      console.log('insert compleated');
    });
  };

  return (
    <div className="App">
      <div className="form">
        <input type="text" name="cowName" onChange={(e) => setCowName(e.target.value)}></input>
        <input type="text" name="favoriteSnack" onChange={(e) => setFavoriteSnack(e.target.value)}></input>
        <input type="text" name="milkProduction" onChange={(e) => setMilkProduction(e.target.value)}></input>
        <button onClick={submitCow}>submit</button>
      </div>
    </div>
  );
}

export default App;
