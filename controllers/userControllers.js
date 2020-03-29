const { userApi } = require('../internal/users')

module.exports = {
  USER_GET_ALL: async (req, res) => {
    const service = await userApi.GetAll()
    _userGetAllRender(service, req, res)
  },
  USER_GET_BY_ID: async (req, res) => {
    const service = await userApi.GetById({
      user_id: req.params.id
    })
    _userGetByIdRender(service, req, res)
  },
  USER_CREATE: async (req, res) => {
    const service = await userApi.Create({
      username: req.body.username,
      password: req.body.password
    })
    _userCreateRender(service, req, res)
  }
}

function _userGetAllRender(data, req, res) {
  const results = data.rows.map(n => n)
  res.status(200).json({
    message: "ok",
    data: results
  })
}

function _userGetByIdRender(data, req, res) {
  if (data.rowCount < 1) {
    return res.status(404).json({
      message: "not found",
      data: {
        error: `user with id ${req.params.id} not found`
      }
    })
  }
  const results = data.rows.map(n => n)
  res.status(200).json({
    message: "ok",
    data: results
  })
}

function _userCreateRender(data, req, res) {
  if (data.rowCount < 1) {
    return res.status(400).json({
      message: "bad request",
      data: {
        error: "duplicate username"
      }
    })
  }
  res.status(201).json({
    message: "ok",
    data: {
      target: "/auth/login",
      redirect: true
    }
  })
}
