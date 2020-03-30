describe("Service Test [DB Connection required]", () => {
  require('../internal/auth/test')
  require('../internal/users/test')
  require('../internal/messages/test')
  require('../internal/comments/test')
  require('../internal/votes/test')
})

describe("E2E Test", () => {
  require('./auth/authTest')
  require('./user/userTest')
  require('./message/messageTest')
  require('./comment/commentTest')
  require('./vote/voteTest')
})
