import React, { useState, useEffect } from "react";
import Axios from 'axios';
import CowHome from "./cowForHomePage";

function CowsHome() {

  const [cows, setCows] = useState([]);

  useEffect(()=>{
    Axios.get('http://localhost:3001/api/cows').then((response) => {
      setCows(response.data);
    });
}, [])

  return(
    <div className="cow-container">
        {cows.map((cow)=>(<CowHome key={cow.id} id={cow.id} data={cow}></CowHome>))}
    </div>
  )
}

export default CowsHome;
