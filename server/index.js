const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const db = mysql.createPool({
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
});

app.use(bodyParser.urlencoded({extended: true}))

app.post('/api/insert', (req, res) => {

    const sqlinsert = "INSERT INTO cowdb (cowName, favorteSnack, milkProduction) VALUES (?, ?, ?)";
    db.query(sqlinsert, [cowName, favoriteSnack, milkProduction], (err, result) => {

    });
});

app.listen(3001, () => {
    console.log("server started");
});