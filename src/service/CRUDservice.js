const bcrypt = require('bcryptjs');
var User= require("../models/user")
const  salt = bcrypt.genSaltSync(10);
let createNewUser=async(data)=>{
    return new Promise(async(resolve,reject)=>{
        try{
            let haspassword = await hashUserPassword(data.password);
            await User.create({
                email:data.email,
                password:haspassword,
                firstName:data.firstname,
                lastName: data.lastname,
                address:data.address,
                gender:data.gender === "1"? true:false,
                roleId:data.roleId,
                phonenumber:data.phonenumber,
                positionId:null,
                image:          null  })
                resolve("create succeful");
        }catch(e){
            reject(e);
        }
    
      });
    

}
let hashUserPassword =(password)=>{
    return new Promise(async(resolve,reject)=>{
       
        try{
            let hash = await bcrypt.hashSync(password, salt);
            resolve(hash);
        }catch(e){
            reject
        }

    
    })
}
module.exports={
    createNewUser:createNewUser
}