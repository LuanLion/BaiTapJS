// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })
// import express from "express";
//const express = require("express")
var express = require('express');
let configViewEngine = (app)=>{
    app.use(express.static("./src/public"));//orientation folder contains img css
    app.set("view engine","ejs");//to make if else ,...
    app.set("views","./src/views");//write file ejs in views

}

module.exports= configViewEngine;
  