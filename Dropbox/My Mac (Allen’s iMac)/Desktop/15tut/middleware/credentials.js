const allowerOrigins = require('../config/allowedOrigins')

const credentials = (req, res, next) => {
  const origin = req.header.origin
  if(allowerOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Credentials', true)
  }
  next()
}

module.exports = credentials
