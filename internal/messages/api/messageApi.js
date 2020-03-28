const { validate, isRequired } = require('../../../helpers/validator')
const MessageService = require('../services/messageService')

module.exports = {
  GetAll: () => {
    return new MessageService().GetAll()
  },
  GetById: (data) => {
    validate(data, {
      message_id: isRequired()
    })
    return new MessageService().GetById(data)
  },
  Post: (data) => {
    validate(data, {
      user_id: isRequired(),
      value: isRequired()
    })
    return new MessageService().Post(data)
  }
}