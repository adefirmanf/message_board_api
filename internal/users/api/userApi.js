const { validate, isRequired } = require('../../../helpers/validator')
const UserService = require('../services/userService')

module.exports = {
  GetAll: (data) => {
    return new UserService().GetAll()
  },
  GetById: (data) => {
    validate(data, {
      user_id: isRequired()
    })
    return new UserService().GetById(data)
  },
  Create: (data) => {
    validate(data, {
      username: isRequired(),
      password: isRequired()
    })
    return new UserService().Create(data)
  }
}