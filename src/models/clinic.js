const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/connectDB');

const Clinics = db.define('Clinics', {
  // Model attributes are defined here
  id:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      allowNull:false,
      primaryKey:true

  },
  name:{
    type:DataTypes.STRING
  },
  
  address:{
    type:DataTypes.STRING,
    allowNull:false
  },
  description :{
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }, 
  
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
module.exports= Clinics;