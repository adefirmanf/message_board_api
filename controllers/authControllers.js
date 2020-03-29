const { authApi } = require('../internal/auth/index')
const jwt = require('jsonwebtoken')

module.exports = {
  AUTH_LOGIN: async (req, res) => {
    const service = await authApi.Login({
      username: req.body.username,
      password: req.body.password
    })
    loginRender(service, req, res)
  },
  AUTH_LOGOUT: (req, res) => {
    res.json("NOT IMPLEMENTED AUTH LOGOUT")
  },
  AUTH_EXPIRED: (req, res) => {
    res.json("NOT IMPLEMENTED AUTH EXPIRED")
  }
}

function loginRender(service, req, res) {
  // Invalid authorization
  if (service.rows.length < 1) {
    return res.status(401).json({
      message: "invalid authorization",
      data: {
        error: "username or password incorrect"
      }
    })
  }
  return res.json({
    message: "ok",
    data: {
      user_id: service.rows[0].uuid_,
      username: req.body.username,
      token: jwt.sign({
        ...service.rows[0]
      }, "secret")
    }
  })
}
function logoutRender(message) {
  return {
    status: "OK",
    token: "jwt token goes here"
  }
}