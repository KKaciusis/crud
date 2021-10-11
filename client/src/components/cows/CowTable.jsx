import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from "react";
import Axios from 'axios';


export default function CowTable() {
    
  const [cows, setCows] = useState([]);

  useEffect(()=>{
    Axios.get('http://localhost:3001/api/cows').then((response) => {
      setCows(response.data);
    });
}, [])

return (
    <TableContainer component={Paper}>
      <Table sx={{ width: '100%' }} size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Cow Photo Name</TableCell>
            <TableCell align="right">Cow ID</TableCell>
            <TableCell align="right">Cow Name</TableCell>
            <TableCell align="right">Favorire Snack</TableCell>
            <TableCell align="right">Milk Production</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {cows.map((cow)=>(
        <TableRow key={cow.cowName} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                  {cow.imgPath}
              </TableCell>
              <TableCell align="right">{cow.id}</TableCell>
              <TableCell align="right">{cow.cowName}</TableCell>
              <TableCell align="right">{cow.favoriteSnack}</TableCell>
              <TableCell align="right">{cow.milkProduction}</TableCell>
              </TableRow>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
