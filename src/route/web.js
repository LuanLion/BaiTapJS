var express = require('express');
var Home = require('../controller/Home');
// import Home from"../controller/Home";

let router = express.Router();

//orientation path

let initWebRoutes=(app)=>{

    // path website or server
    router.get("/",(req,res)=>{
        return res.send("hello world, i am luanMaster");
    })
    router.get("/home",Home.getHomePage);
    router.get("/post",Home.postCRUD);
    router.post("/post-file",Home.postfile);
    router.get("/all",Home.getfinall);
    return app.use("/",router);// funcion with return the routers define above

}

module.exports = initWebRoutes;

