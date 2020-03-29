const { authApi } = require('../internal/auth/index')
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
    message: "OK",
    data: {
      username: req.body.username
    }
  })
}
function logoutRender(message) {
  return {
    status: "OK",
    token: "jwt token goes here"
  }
}