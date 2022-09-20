const express = require('express');
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'guest',
    password: '123guest'
});

db.connect((err), () => {
    if(err) return console.log(err);
    else console.log('Connection till databas lyckades');
});

app.get('/createdb', (req, res) =>{
    let sql = 'create database picture';
    db.query(sql, (err, result) => {
        if(err) console.log(err);
        else console.log(result);
        res.send('Database picture created')
    });
});

const app = express();
app.listen('54134', () => {
    console.log('Hej från node express med mysql')
});