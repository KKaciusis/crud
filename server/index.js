const express = require('express');
const app = express();
const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const db = mysql.createPool({
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
})

app.get('/', (req, res) =>{

    const sqlinsert = "INSERT INTO cow_tier (cowName, favoriteSnack, milkProduction) VALUES ('cowalingus', 'carotis', '35');"
    db.query(sqlinsert, (err, result) => {
        res.send('hello nigeriao');
    });
});

app.listen(3001, () => {
    console.log();
});