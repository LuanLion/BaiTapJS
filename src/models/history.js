const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/connectDB');

const History= db.define('histories', {
  // Model attributes are defined here
  id:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      allowNull:false,
      primaryKey:true

  },
  
  patienId:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  doctocId:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  desciption:{
    type:DataTypes.TEXT
  },
  files:{
    type:DataTypes.TEXT
  }
 
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
module.exports= History;