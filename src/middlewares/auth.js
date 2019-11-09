const jwt = require('jsonwebtoken')

exports.jwtAuth = (req, res, next) => {
  if (req.headers.authorization) {
    try {
      let decodedToken = jwt.verify(req.headers.authorization.split(" ")[1], process.env.APP_KEY)
      if (decodedToken) {
        req.userId = decodedToken.userId
        next()
      } else {
        return res.status(401).json('Not authenticated!')
      }
    } catch (error) {
      return res.status(401).json("Not authenticated!")
    }
  } else {
    return res.status(401).json('Not authenticated!')
  }
}
