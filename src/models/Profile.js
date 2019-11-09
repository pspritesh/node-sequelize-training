const Sequelize = require('sequelize')

const sequelize = require('../config/dbconfig')

const Profile = sequelize.define('profile', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  fname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  mname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lname: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Profile