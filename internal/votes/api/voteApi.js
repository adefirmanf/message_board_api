const { validate, isRequired } = require('../../../helpers/validator')
const VoteService = require('../services/voteService')

module.exports = {
  VOTE_UP_FOR_MESSAGE: (data) => {
    validate(data, {
      user_id: isRequired(),
      message_id: isRequired()
    })
    return new VoteService().UpMessage(data)
  },
  VOTE_DOWN_FOR_MESSAGE: (data) => {
    validate(data, {
      user_id: isRequired(),
      message_id: isRequired(),
    })
    return new VoteService().DownMessage(data)
  },
  VOTE_UP_FOR_COMMENT: (data) => {
    validate(data, {
      user_id: isRequired(),
      comment_id: isRequired(),
    })
    return new VoteService().UpComment(data)
  },
  VOTE_DOWN_FOR_COMMENT: (data) => {
    validate(data, {
      user_id: isRequired(),
      comment_id: isRequired(),
    })
    return new VoteService().DownComment(data)
  },
}