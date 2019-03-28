// JavaScript file for Bake-Away Server
'use strict'
const express = require("express")
const app = express()
const port = 8080;
const mysql = require('mysql')
const config = require('./config.js')
const con = mysql.createConnection(config.mysql)

app.use(express.static("images"))
app.use(express.static("webpages"))

/*
app.get('/', function (req, res) {
  res.sendFile(__dirname + "/" + "default.css")
  res.sendFile(__dirname + "/" + "index.html")
})
*/
app.listen(port, () => console.log("server is listening"))
