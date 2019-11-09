const Sequelize = require('sequelize')

const sequelize = require('../config/dbconfig')

const userProducts = sequelize.define('userProducts', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }
})

module.exports = userProducts
