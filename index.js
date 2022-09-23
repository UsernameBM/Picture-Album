const express = require('express');
const mysql = require('mysql');
const fileupload = require('express-fileupload');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'guest',
    password: 'guest123',
    database: 'picture'
});

db.connect((err) => {
    if(err) return console.log(err);
    else console.log('Connection till databas lyckades');
});

const app = express();
app.use(fileupload());

app.listen('57904', () => {
    console.log('Hej från node express med mysql');
});


app.get('/createdb', (req, res) =>{
    let sql = 'create database picture';
    db.query(sql, (err, result) => {
        if(err) console.log(err);
        else console.log(result);
        res.send('Database picture created');
    });
});

app.get('/createtable', (req,res) => {
    let sql = 'create table images(id int auto_increment, image longblob, primary key(id))';
    db.query(sql, (err, result) => {
        if(err) console.log(err);
        else console.log(result);
        res.send('Table images created');
    });
});

app.post('/save', (req,res) => {
    let imageData = req.files.file;
    let uploadPath = __dirname + '/uploads/' + imageData.name;
    imageData.mv(uploadPath, (err) => {
        console.log(err);
        res.send("Uppskickad");
    });
    let sql = 'insert into images(image) set ?';
    /*let query = db.query(sql, imageData, (err, result) => {
        if(err) console.log(err);
        else console.log(result);
        res.send('Image was saved in table');
    });*/
});

