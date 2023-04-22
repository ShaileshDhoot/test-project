const Sequelize = require('sequelize')

const sequelize = new Sequelize('seller-page', 'admin' ,'root', {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize

