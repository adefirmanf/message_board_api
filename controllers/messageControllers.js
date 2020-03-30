const { messageApi } = require('../internal/messages')

module.exports = {
  MESSAGE_GET_ALL: async (req, res) => {
    const service = await messageApi.GetAll()
    _messageGetAll(service, req, res)
  },
  MESSAGE_GET_BY_ID: async (req, res) => {
    const service = await messageApi.GetById({
      message_id: req.params.id
    })
    _messageGetById(service, req, res)
  },
  MESSAGE_POST: async (req, res) => {
    const service = await messageApi.Post({
      user_id: req.user_id, // Todo : Get from recent session 
      value: req.body.message
    })
    _messagePostRender(service, req, res)
  }
}

function _messageGetAll(data, req, res) {
  const results = data.rows.map(n => n)
  return res.status(200).json({
    status: "ok",
    data: results
  })
}

function _messageGetById(data, req, res) {
  if (data.rowCount < 1) {
    return res.status(404).json({
      status: "not found",
      data: {
        error: `message with id ${req.params.id} not found`
      }
    })
  }
  const results = data.rows.map(n => n)
  return res.status(200).json({
    status: "ok",
    data: results
  })
}

function _messagePostRender(data, req, res) {
  if (data.rowCount < 1) {
    return res.status(500).json({
      status: "error",
      data: {
        error: "unknown error"
      }
    })
  }
  return res.status(201).json({
    status: "ok",
    data: {
      id: data.rows[0].id,
      message: req.body.message
    }
  })
}
