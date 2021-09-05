
const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/connectDB');

const User = db.define('User', {
  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true

},
email:DataTypes.STRING,
password:{
  type:DataTypes.STRING,
  allowNull:false
},
firstName: {
  type: DataTypes.STRING,
  allowNull: false
},
lastName: {
  type: DataTypes.STRING
  // allowNull defaults to true
}, 
address:DataTypes.STRING,
gender:DataTypes.BOOLEAN,
roleId:DataTypes.STRING,
phonenumber:DataTypes.STRING,
positionId:DataTypes.STRING,
image:DataTypes.STRING
}

);
db.sync();//create table user 
// module.exports=class Products{
//   constructor(){

//   }
//   static FetchAll(){
//     return new Promise((resolve,reject)=>{
//       product.findAll({raw:true})
//               .then(listProducts=> resolve(listProducts))
//     });
//   }
// }
module.exports= User;