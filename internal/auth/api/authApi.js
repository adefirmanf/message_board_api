const { validate, isRequired } = require('../../../helpers/validator')
const AuthService = require('../services/authService')

module.exports = {
  Login: (data) => {
    validate(data, {
      username: isRequired(),
      password: isRequired()
    })
    return new AuthService().Login(data)
  },
  Logout: (data) => {
    validate(data, {
      username: isRequired()
    })
  }
}