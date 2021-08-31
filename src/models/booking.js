const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/connectDB');

const Booking= db.define('booking', {
  // Model attributes are defined here
  id:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      allowNull:false,
      primaryKey:true

  },
  
  statusId:{
    type:DataTypes.STRING,
    allowNull:false
  },
  doctorId:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  patientId: {
    type: DataTypes.INTEGER
    // allowNull defaults to true
  }, 
  date:{
    type: DataTypes.DATE
    // allowNull defaults to true
  }, 
  timeType:{
      type:DataTypes.STRING
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
module.exports= Booking;