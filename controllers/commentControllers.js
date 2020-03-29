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
      user_id: req.body.user_id, // Todo : get from session
      message_id: req.params.message_id,
      value: req.body.comment
    })
    _commentPostByMessageId(service, req, res)
  }
}

function _commentGetByAllRender(data, req, res) {
  const results = data.rows.map(n => n)
  res.status(200).json({
    status: "ok",
    data: results
  })
}

function _commentGetByMessageIdRender(data, req, res) {
  if (data.rowCount < 1) {
    res.status(404).json({
      status: "not found",
      data: {
        error: `message with id ${req.params.message_id} not found`
      }
    })
  }
  const results = data.rows.map(n => n)
  res.status(200).json({
    status: "ok",
    data: results
  })
}

function _commentPostByMessageId(data, req, res) {
  res.status(201).json({
    status: "ok",
    data: {
      comment: req.body.comment
    }
  })
}