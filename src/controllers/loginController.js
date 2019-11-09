const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const SequelizeUser = require('../models/User')

exports.jwtLogin = async (req, res) => {
  try {
    const sequelizeUsers = await SequelizeUser.findAll({ where:{username: req.body.username }})
    let token = ''
    if (sequelizeUsers && sequelizeUsers[0] && await bcrypt.compare(req.body.password, sequelizeUsers[0].password)) {
      token = jwt.sign(
        {
          username: sequelizeUsers[0].username,
          userId: sequelizeUsers[0].id
        },
        process.env.APP_KEY,
        { expiresIn: '1h' }
      )
    }
    if (token) {
      return res.json({ token: token })
    } else {
      return res.status(404).json('User not found!')
    }
  } catch (error) {
    console.error(error)
    return res.status(500).json("Something went wrong!")
  }
}
