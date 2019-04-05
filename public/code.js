// JavaScript file for Bake-Away Server
'use strict'
const express = require("express")
const app = express()
const port = 8080;
const mysql = require('mysql2')
const config = require('./config.js')
const db = mysql.createConnection(config.mysql)
const fs = require('fs')

app.use(express.static("images"))
app.use(express.static("webpages"))

// For the Login Function
app.get('/login', loginRequest)
app.get('/password', passwordRequest)

// For the Registation Page Functions
app.get('/input', insertRecord)
app.post('/insert',insertRecord)
app.get('/insert', insertRecord)
//Used for testing server functions
//app.get('/test', testReturn)

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



function newCustID(req, res) {
  let randomID = 0;
  let custList = [];
  db.query('SELECT * FROM Customer', function(err, row, fields) {
    if (err) throw err;
    for (var i in row){
      custList.push(row[i].Customer_ID);
    }
    })
    let again = true;
    while (again) {
      let min = 10000;
      let max = 99999;
      randomID = (Math.floor(Math.random() * (+max - +min)) + +min);
      if (custList.includes(randomID)){
        console.log("ID Already in Use")
      } else {
        custList.push(randomID);
        again = false;
      }
    }
    return randomID;
}
//Query for creating a new Database Record
// Can Randomly Genetate number for the Customer_ID
// Need to Insert into the customer table as well with ID & Email
// rest of info can be updates later on.
async function insertRecord(req, res) {
  let id = newCustID();
  let userRec = "userName";
  let passRec = "passTest";
  let emailRec = "UserEmail";
  let date = "0000-00-00"
  //console.log(test);
  //console.log(userRec, passRec, emailRec);
  customerInsert();
  loginInsert();
}

function customerInsert(){
  var sql = ('INSERT INTO CUSTOMER Values ("11111","Title","fName","lName","0000-00-00","Addr1","City","PostCode","County","TeleNum","Mobile","emailTest")')
  db.query(sql, function(err, result) {
  if (err) throw err;
  console.log("Table Updated");
  })
//insert the username, password and the newID
}

function loginInsert(){
   var sql = ('INSERT INTO LOGIN Values ("userName", "passTest", "11111")')
   db.query(sql, function(err, result) {
   if (err) throw err;
   console.log("Table Updated")
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
