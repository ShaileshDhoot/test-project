const Sequelize= require('sequelize');

const sequelize = require('../util/database');

const sellerData = sequelize.define('sellerdata', {
  ID:{
    type: Sequelize.INTEGER,
    autoIncrement: true,        
    allowNull: false,
    primaryKey: true
  },
  Product_Detail:{
    type:Sequelize.STRING,
    allowNull: false
  } ,
  Product_Price:{
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = sellerData
