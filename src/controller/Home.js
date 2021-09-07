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
let getfinall=async(req,res)=>{
    let finall= await CRUDservice.getfinall();
    console.log(finall)
    return res.render('displayCRUD.ejs',{
        dataTable:finall
    })
}
module.exports ={
    getHomePage:getHomePage,
    postCRUD:postCRUD,
    postfile:postfile,
    getfinall:getfinall
}