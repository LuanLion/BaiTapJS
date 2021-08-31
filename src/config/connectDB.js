const { Sequelize } = require('sequelize');

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('db', 'root', null, {
  host: 'localhost',
  dialect: 'mysql'
});

//check connect db
// let connectDB = async()=>{
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }

// module.exports = connectDB;
let connectDB=()=>{
  sequelize.authenticate()
  .then(()=>console.log("ket noi thanh cong"));

}

module.exports=connectDB;