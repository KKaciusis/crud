const express = require('express');
const multer = require('multer');
const cors = require('cors');
const { request } = require('express');
const fs = require("fs");

const app = express();
const mysql = require('mysql');
const dotenv = require('dotenv');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

dotenv.config();

const db = mysql.createPool({
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
});

const uploadsDir = __dirname + '/../client/public/uploads/';
const upload = multer({dest: uploadsDir});

app.post('/api/cows/', upload.single('image'), (request, response) => {
    const fileName = request.file.originalname;
    const file = request.file.path;

    const finalImagePath = Date.now() + '-' + fileName;

    fs.rename(file, uploadsDir + finalImagePath, (error) => {
        if (error) {
            console.log("Error: " + error);

            response.json({
                sucess: false,
                message: error
            });

            return;
        }

        const sqlinsert = "INSERT INTO cow_tier (cowName, favoriteSnack, milkProduction, imgPath) VALUES (?, ?, ?, ?)";
        const values = [request.body.cowName, request.body.favoriteSnack, request.body.milkProduction, finalImagePath];

        db.query(sqlinsert, values, (error, result) => {
            response.json({
                success: true,
                message: "File uploaded",
                filieName: fileName
            });
        });
    })
})

app.get('/api/cows', (request, response) => {
    const sqlSelect = "SELECT * FROM cow_tier";

    db.query(sqlSelect, (error, result) =>{
        console.log(result);
        response
            .set('X-Total-Count', 30)
            .set('Access-Control-Expose-Headers', 'X-Total-Count');

        response.send(result);
    });
});

app.delete("/api/cows/:id", (request, response) => {
    const sqlDelete = "DELETE FROM cow_tier WHERE id=" + request.params.id;
    db.query(sqlDelete, [], (error, result) => {
        console.log(error);
    })
});

app.put('/api/cows', (request, response) =>{
    const sqlUpdate = "UPDATE cow_tier SET favoriteSnack=?, milkProduction=? WHERE cowName=?";
    const values = [request.body.newFavoriteSnack, request.body.newMilkProduction, request.body.cowName];
    db.query(sqlUpdate, values, (error, result) => {
        console.log(error);
    })
});

app.listen(3001, () => {
    console.log("server started");
});