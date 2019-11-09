const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  'dialect': process.env.DB_CONNECTION,
  'host': process.env.DB_HOST,
  // 'operatorsAliases': false,
  'pool': {
    'max': 5,
    'min': 0,
    'acquire': 30000,
    'idle': 10000
  },
  'define': {
    'timestamps': true,
    'underscored': true
  },
  'logging': false
})

sequelize.authenticate()
  .then(() => {
    console.log(`Connection has been established successfully using sequelize ORM with '${process.env.DB_NAME}' database.`);
  })
  .catch(err => {
    console.error(`Unable to connect to the database => ${err}`);
    return;
  });

module.exports = sequelize
