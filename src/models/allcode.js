const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/connectDB');

const Allcodes = db.define('allcodes', {
  // Model attributes are defined here
  id:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      allowNull:false,
      primaryKey:true

  },
  
  key:{
    type:DataTypes.STRING,
    allowNull:false
  },
  type :{
    type: DataTypes.STRING,
    allowNull: false
  },
  valueEN: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }, 
  valueVN: {
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
module.exports= Allcodes;