//imort labari
const User = require("../models/user");

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
    // console.log(message)
    return res.render('HomePage.ejs')
}
let getfinall=async(req,res)=>{
    let finall= await CRUDservice.getfinall();
    console.log(finall)
    return res.render('displayCRUD.ejs',{
        dataTable:finall
    })
}
let edit_CRUDbyID=async(req,res)=>{
    let userId= req.query.id;
    if(userId){
        let userData = await CRUDservice.editCRUD(userId);
        return res.render('edit_CRUDbyId.ejs',{
            dataTable:userData
        })
    }

}
let put_userById=async(req,res)=>{
    let data= req.body;
    console.log("user with id: "+data.id)
    let update= await CRUDservice.edited_userById(data);
    return res.render('displayCRUD.ejs',{
        dataTable:update
    })
    
}
let delete_CRUD=async(req,res)=>{
    let data =req.query;
    console.log("user with id: "+data.id)
    let del = await CRUDservice.delete_CRUDbyId(data);

    return res.render('displayCRUD.ejs',{
        dataTable:del
    })

}
module.exports ={
    getHomePage:getHomePage,
    postCRUD:postCRUD,
    postfile:postfile,
    getfinall:getfinall,
    edit_CRUDbyID:edit_CRUDbyID,
    put_userById:put_userById,
    delete_CRUD:delete_CRUD
}