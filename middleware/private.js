const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const getToken = req.headers.authorization
  if (!getToken) {
    return res.status(401).json({
      message: "invalid authorization",
      data: {
        error: "missing token"
      }
    })
  }
  try {
    const valid = jwt.verify(getToken.split(" ")[1], "secret")
    req.user_id = valid.uuid_
  }
  catch (err) {
    return res.status(401).json({
      message: "invalid authorization",
      data: {
        error: "invalid token"
      }
    })
  }
  next()
}
