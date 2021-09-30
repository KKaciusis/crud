const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    database: 'cowdb',
    user: 'Bloten',
    password: 'milkexpert3000',
})

app.get('/', (req, res) =>{

    const sqlinsert = "INSERT INTO cow_tier (cowName, favoriteSnack, milkProduction) VALUES ('cowalingus', 'carotis', '35');"
    db.query(sqlinsert, (err, result) => {
        res.send('hello nigeriao');
    });
});

app.listen(3001, () => {
    console.log('runin');
});