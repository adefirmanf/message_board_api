const { commentApi } = require('../internal/comments'
)
module.exports = {
  COMMENT_GET_BY_ALL: async (req, res) => {
    const service = await commentApi.GetAll()
    _commentGetByAllRender(service, req, res)
  },
  COMMENT_GET_BY_MESSAGE_ID: async (req, res) => {
    const service = await commentApi.GetByMessageId({
      message_id: req.params.message_id
    })
    _commentGetByMessageIdRender(service, req, res)
  },
  COMMENT_POST_BY_MESSAGE_ID: async (req, res) => {
    const service = await commentApi.PostByMessageId({
      user_id: req.user_id, // Todo : get from session
      message_id: req.params.message_id,
      value: req.body.comment
    })
    _commentPostByMessageId(service, req, res)
  }
}

function _commentGetByAllRender(data, req, res) {
  const results = data.rows.map(n => n)
  res.status(200).json({
    message: "ok",
    data: results
  })
}

function _commentGetByMessageIdRender(data, req, res) {
  const results = data.rows.map(n => n)
  res.status(200).json({
    message: "ok",
    data: results
  })
}

function _commentPostByMessageId(data, req, res) {
  res.status(201).json({
    message: "ok",
    data: {
      id: data.rows[0].id,
      comment: req.body.comment
    }
  })
}