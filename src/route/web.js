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
  //test Home
  router.get("/home", Home.getHomePage);
  router.get("/post", Home.postCRUD);
  router.post("/post-file", Home.postfile);
  router.get("/all", Home.getfinall);
  router.get("/edit_CRUD", Home.edit_CRUDbyID);
  router.post("/put_userById", Home.put_userById);
  router.get("/delete_CRUD", Home.delete_CRUD);
  // API user
  router.post("/api/login", userController.handleLoginApi);
  router.get("/api/get_All_user", userController.handlegetAlluser);
  router.post("/api/create_One_user", userController.handlecreateOneuser);
  router.get("/api/delete_One_user", userController.handledeleteOneuser);
  router.post("/api/update_One_user", userController.handleupdateOneuser);
  router.get("/api/allcode", userController.handlegetAllcode);

  // // API doctor
  router.get("/api/top_doctor", doctorController.handleTOPdoctor);
  router.get("/api/get_All_doctor", doctorController.handlegetAlldoctor);
  router.post("/api/save_Info_doctor", doctorController.handleSaveInfodoctor);
  router.get("/api/get_Info_doctor", doctorController.handlegetInfodoctor);
  router.post(
    "/api/save_Schedule_doctor",
    doctorController.handlesaveScheduledoctor
  );

  return app.use("/", router); // funcion with return the routers define above
};
router.get("/api/get_All_Schedule", doctorController.handlegetAllschedule);

module.exports = initWebRoutes;
