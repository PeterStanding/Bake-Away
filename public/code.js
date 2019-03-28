// JavaScript file for Bake-Away Server
'use strict'
const express = require("express")
const app = express()
const port = 8080;
const mysql = require('mysql')

const con = mysql.createConnection(config.mysql)

app.use(express.static("public"))

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" )
})

app.listen(port, () => console.log("listening"))
