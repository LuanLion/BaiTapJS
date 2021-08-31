var express = require('express');
var bodyParser = require('body-parser');
var viewEngine= require('./config/viewEngine');
var initWebRoutes= require('./route/web');
var connectDB=require('./config/connectDB');

// import bodyParser from "body-parser";// get the paramenters form client for server
// import viewEngine from "./config/viewEngine";
// import initWebRoutes from './route/web';
// // import connectDB from'./config/connectDB';
require('dotenv').config();

let app= express();

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

viewEngine(app);
initWebRoutes(app);
connectDB();

let port= process.env.PORT || 3000;//if port = undefine then port=3000

app.listen(port, ()=>{
console.log('server NODEJS running .....:'+port);
})