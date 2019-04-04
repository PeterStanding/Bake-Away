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

// For the Login Function
app.get('/login', loginRequest)
app.get('/password', passwordRequest)

// For the Registation Page Functions
app.get('/newRecord', insertRecord)

// For the search item Function
app.get('/items', searchItems)

app.listen(port, () => console.log("server is listening"))

// Database connection code
db.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected")
});

//Login in Function Queries
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
    //console.log(passwords)
    res.send(passwords)
  })
}

//Query for creating a new Database Record
async function insertRecord() {
  db.query('INSERT INTO LOGIN VALUES' , function(err) {
    if (err) throw err;
  })
}

// Query for searching for an items
async function searchItems(req, res) {
  db.query('SELECT * FROM Menu_Items', function(err, row, fields) {
    let items = [];
    if (err) throw err
    for (var i in row){
        items.push(row[i].Menu_Items);
      console.log(row[i].Menu_Items);
    }
    console.log(items)
    res.send(items)
  })
}
