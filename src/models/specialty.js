const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/connectDB');

const Specialty = db.define('Specialties', {
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
  image:{
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
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
module.exports= Specialty;