const { voteApi } = require('../internal/votes')

module.exports = {
  VOTE_UP_FOR_MESSAGE: async (req, res) => {
    const service = await voteApi.VOTE_UP_FOR_MESSAGE({
      user_id: req.user_id,
      message_id: req.params.message_id
    })
    _voteUpForMessageRender(service, req, res)
  },
  VOTE_DOWN_FOR_MESSAGE: async (req, res) => {
    const service = await voteApi.VOTE_DOWN_FOR_MESSAGE({
      user_id: req.user_id,
      message_id: req.params.message_id
    })
    _voteDownForMessageRender(service, req, res)
  },
  VOTE_UP_FOR_COMMENT: async (req, res) => {
    const service = await voteApi.VOTE_UP_FOR_COMMENT({
      user_id: req.user_id,
      comment_id: req.params.comment_id
    })
    _voteUpForCommentRender(service, req, res)
  },
  VOTE_DOWN_FOR_COMMENT: async (req, res) => {
    const service = await voteApi.VOTE_DOWN_FOR_COMMENT({
      user_id: req.user_id,
      comment_id: req.params.comment_id
    })
    _voteDownForCommentRender(service, req, res)
  }
}

function _voteUpForMessageRender(data, req, res) {
  if (data.rowCount < 1) {
    return res.status(500).json({
      status: "error",
      data: {
        message: "unknown error",
      }
    })
  }
  res.status(200).json({
    status: "ok",
    data: {
      total_vote: data.rows[0].total_vote
    }
  })
}

function _voteDownForMessageRender(data, req, res) {
  if (data.rowCount < 1) {
    return res.status(500).json({
      status: "error",
      data: {
        message: "unknown error",
      }
    })
  }
  res.status(200).json({
    status: "ok",
    data: {
      total_vote: data.rows[0].total_vote
    }
  })
}

function _voteUpForCommentRender(data, req, res) {
  if (data.rowCount < 1) {
    return res.status(500).json({
      status: "error",
      data: {
        message: "unknown error",
      }
    })
  }
  res.status(200).json({
    status: "ok",
    data: {
      total_vote: data.rows[0].total_vote
    }
  })
}

function _voteDownForCommentRender(data, req, res) {
  if (data.rowCount < 1) {
    return res.status(500).json({
      status: "error",
      data: {
        message: "unknown error",
      }
    })
  }
  res.status(200).json({
    status: "ok",
    data: {
      total_vote: data.rows[0].total_vote
    }
  })
}