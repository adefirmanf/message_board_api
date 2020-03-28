const { validate, isRequired } = require('../../../helpers/validator')
const CommentService = require('../services/commentService')

module.exports = {
  GetAll: () => {
    return new CommentService().GetAll()
  },
  GetByMessageId: (data) => {
    validate(data, {
      message_id: isRequired()
    })
    return new CommentService().GetByMessageId(data)
  },
  PostByMessageId: (data) => {
    validate(data, {
      user_id: isRequired(),
      message_id: isRequired(),
      value: isRequired()
    })
    return new CommentService().PostByMessageId(data)
  }
}