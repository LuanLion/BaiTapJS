var express = require("express");
var Home = require("../controller/Home");
var userController = require("../controller/userController");
var doctorController = require("../controller/doctorController");

// import Home from"../controller/Home";

let router = express.Router();

//orientation path

let initWebRoutes = (app) => {
  // path website or server
  router.get("/", (req, res) => {
    return res.send("hello world, i am luanMaster");
  });
  router.get("/home", Home.getHomePage);
  router.get("/post", Home.postCRUD);
  router.post("/post-file", Home.postfile);
  router.get("/all", Home.getfinall);
  router.get("/edit_CRUD", Home.edit_CRUDbyID);
  router.post("/put_userById", Home.put_userById);
  router.get("/delete_CRUD", Home.delete_CRUD);
  router.post("/api/login", userController.handleLoginApi);
  router.get("/api/get_All_user", userController.handlegetAlluser);
  router.post("/api/create_One_user", userController.handlecreateOneuser);
  router.get("/api/delete_One_user", userController.handledeleteOneuser);
  router.post("/api/update_One_user", userController.handleupdateOneuser);
  router.get("/api/allcode", userController.handlegetAllcode);
  // // informations doctor
  router.get("/api/top_doctor", doctorController.handleTOPdoctor);
  return app.use("/", router); // funcion with return the routers define above
};

module.exports = initWebRoutes;
