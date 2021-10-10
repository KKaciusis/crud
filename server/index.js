const express = require('express');
const multer = require('multer');
const cors = require('cors');
const { request } = require('express');
const fileSystem = require("fs");

const app = express();
const mysql = require('mysql');
const dotenv = require('dotenv');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

dotenv.config();

// @TODO: Handle errors and return response
// @TODO: Move /api/cows to different folder to be able to easily add new endpoints (research import options (maybe recursively))
// @TODO: Move pictureUpload and database to common .js file

const database = mysql.createPool({
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
});

const UPLOADS_DIRECTORY = __dirname + '/../client/public/uploads/';
const ALLOWED_FILE_TYPES = ["image/png", "image/jpg", "image/jpeg"];

const pictureUpload = multer({
    dest: UPLOADS_DIRECTORY,
    fileFilter: (request, file, callback) => {
        if (ALLOWED_FILE_TYPES.includes(file.mimetype)) {
            callback(null, true);
        } else {
            callback(null, false);
            return callback(console.log('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});

app.post('/api/cows/', pictureUpload.single('image'), (request, response) => {
    const ORIGINAL_FILE_NAME = request.file.originalname;
    const FINAL_IMAGE_PATH = Date.now() + '-' + ORIGINAL_FILE_NAME;
    
    fileSystem.rename(request.file.path, UPLOADS_DIRECTORY + FINAL_IMAGE_PATH, (error) => {
        if (error) {
            console.log("Error: " + error);

            response.json({
                sucess: false,
                message: error
            });

            return;
        }

        const QUERY_INSERT = "INSERT INTO cow_tier (cowName, favoriteSnack, milkProduction, imgPath) VALUES (?, ?, ?, ?)";
        const VALUES = [request.body.cowName, request.body.favoriteSnack, request.body.milkProduction, FINAL_IMAGE_PATH];
        
        database.query(QUERY_INSERT, VALUES, (error, result) => {
            response.json({
                success: true,
                message: "File uploaded",
                fileName: ORIGINAL_FILE_NAME
            });
        });
    })
})

app.get('/api/cows', (request, response) => {
    const QUERY_SELECT = "SELECT * FROM cow_tier";

    database.query(QUERY_SELECT, (error, result) =>{
        console.log(result);
        response
            .set('X-Total-Count', 30)
            .set('Access-Control-Expose-Headers', 'X-Total-Count');

        response.send(result);
    });
});

app.delete("/api/cows/:id", (request, response) => {
    const QUERY_DELETE = "DELETE FROM cow_tier WHERE id=" + request.params.id;
    
    database.query(QUERY_DELETE, [], (error, result) => {
        console.log(error);
    })
});


app.put('/api/cows', (request, response) =>{
    const QUERY_UPDATE = "UPDATE cow_tier SET favoriteSnack=?, milkProduction=? WHERE cowName=?";
    const VALUES = [request.body.newFavoriteSnack, request.body.newMilkProduction, request.body.cowName];
    
    database.query(QUERY_UPDATE, VALUES, (error, result) => {
        console.log(error);
    })
});

app.listen(3001, () => {
    console.log("Server started");
});
