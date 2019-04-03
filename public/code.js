// JavaScript file for Bake-Away Server
'use strict'
const express = require("express")
const app = express()
const port = 8080;
const mysql = require('mysql2')
const config = require('./config.js')
const db = mysql.createConnection(config.mysql)

app.use(express.static("images"))
app.use(express.static("webpages"))

app.get('/login', loginRequest)
app.get('/password', passwordRequest)

app.listen(port, () => console.log("server is listening"))

db.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected")
});

async function loginRequest(req,res) {
  db.query('SELECT * FROM Login', function(err, row, fields) {
    let usernames = [];
    if (err) throw err
    for (var i in row){
        usernames.push(row[i].Username);
      //console.log(row[i].Password);
    }
    // console.log(usernames)
    res.send(usernames)
  })
}

async function passwordRequest(req,res) {
  db.query('SELECT * FROM Login', function(err, row, fields) {
    let passwords = [];
    if (err) throw err
    for (var i in row){
        passwords.push(row[i].Password);
      //console.log(row[i].Password);
    }
    console.log(passwords)
    res.send(passwords)
  })
}
