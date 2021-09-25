var express = require("express");
var bodyParser = require("body-parser");
var viewEngine = require("./config/viewEngine");
var initWebRoutes = require("./route/web");
var cors = require("cors");
// import cors from "cors";
var sequelize = require("./config/connectDB");

// import bodyParser from "body-parser";// get the paramenters form client for server
// import viewEngine from "./config/viewEngine";
// import initWebRoutes from './route/web';
// // import connectDB from'./config/connectDB';
require("dotenv").config();

let app = express();
// const corsOpts = {
//   origin: "*",

//   methods: ["GET", "POST"],

//   allowedHeaders: ["Content-Type"],
// };

// app.use(cors(corsOpts));
// app.use(
//   cors({ origin: "http://localhost:3000", methods: ["GET", "POST", "PUT"] })
// );
// Add headers before the routes are defined
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});
// app.use(cors({ origin: true }));
//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);
sequelize;

let port = process.env.PORT || 3000; //if port = undefine then port=3000

app.listen(port, () => {
  console.log("server NODEJS running .....:" + port);
});
