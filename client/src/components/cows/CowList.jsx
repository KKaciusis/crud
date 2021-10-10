import React, { useState, useEffect } from "react";
import Axios from 'axios';
import Cow from './CowCard';

function Cows() {

  const [cows, setCows] = useState([]);

  useEffect(()=>{
    Axios.get('http://localhost:3001/api/cows').then((response) => {
      setCows(response.data);
    });
}, [])

const deleteElement = (id) => {
  if (window.confirm('Y U NO COW?!!?')) {
    Axios.delete('http://localhost:3001/api/cows/' + id);
    window.location.reload();
  }
}

  return(
    <div className="cow-container">
        {cows.map((cow)=>(<Cow key={cow.id} id={cow.id} delete={deleteElement}  data={cow}></Cow>))}
    </div>
  )
}

export default Cows;