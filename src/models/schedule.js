const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/connectDB');

const schedule = db.define('schedules', {
  // Model attributes are defined here
  id:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      allowNull:false,
      primaryKey:true

  },
  
  cunrrentNumber:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  maxNumber :{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE
    // allowNull defaults to true
  }, 
  timeType: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }, 
  doctorId:{
      type:DataTypes.INTEGER
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
module.exports= schedule;