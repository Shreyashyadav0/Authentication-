const {Sequelize} = require("sequelize");

const createDB = new Sequelize("test-db", "user", "pass",{
   dialect:"sqlite",
   host:"./config/db.splite",
});

module.exports= createDB;  