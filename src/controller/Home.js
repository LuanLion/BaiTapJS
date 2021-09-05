//imort labari
const User = require("../models/user");
let db= require("../models/user")
let CRUDservice=require("../service/CRUDservice")
let getHomePage =(req,res)=>{
        return res.render('HomePage.ejs');
}
let postCRUD=(req,res)=>{
    // console.log(req.body);
    return res.render('Post-CRUD.ejs');
    
}
let postfile=async(req,res)=>{
   let message= await CRUDservice.createNewUser(req.body)
    console.log(message)
    return res.render('HomePage.ejs')
}
module.exports ={
    getHomePage:getHomePage,
    postCRUD:postCRUD,
    postfile:postfile
}