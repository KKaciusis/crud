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

app.get('/api/get', (request, response) => {
    const sqlSelect = "SELECT * FROM cow_tier";

    db.query(sqlSelect, (error, result) =>{
        res.send(result);
    });
});

app.post("/api/insert", (request, response) => {
    const sqlinsert = "INSERT INTO cow_tier (cowName, favoriteSnack, milkProduction) VALUES (?, ?, ?)";
    const values = [request.body.cowName, request.body.favoriteSnack, request.body.milkProduction];

    db.query(sqlinsert, values, (error, result) => {
        console.log(result);
    });
});

app.delete("/api/delete/:id", (request, response) => {
    const sqlDelete = "DELETE FROM cow_tier WHERE id=" + request.params.id;
    
    db.query(sqlDelete, [], (error, result) => {
        console.log(error);
    })
});

app.listen(3001, () => {
    console.log("server started");
});