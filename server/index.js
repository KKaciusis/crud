const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const db = mysql.createPool({
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post("/api/insert", (req, res) => {

    const cowName = req.body.cowName;
    const favoriteSnack = req.body.favoriteSnack;
    const milkProduction = req.body.milkProduction;

    const sqlinsert = "INSERT INTO cow_tier (cowName, favoriteSnack, milkProduction) VALUES (?, ?, ?)";
    db.query(sqlinsert, [cowName, favoriteSnack, milkProduction], (err, result) => {
        console.log(err)
    });
});

app.listen(3001, () => {
    console.log("server started");
});