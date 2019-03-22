// JavaScript file for Bake-Away Server
'use strict'
const express = require("express")
const app = express()
const port = 8080;

app.use(express.static("public"))

app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" )
})

app.listen(port, () => console.log("listening"))
