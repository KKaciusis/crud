import './App.css';
import React, { useState, useEffect } from "react";
import Meniu from './components/meniu';
import Cows from './components/cows';
function App() {

  return(
    <div className="App">
    <Meniu/>
    <Cows/>
    </div>
  )
}

export default App;
