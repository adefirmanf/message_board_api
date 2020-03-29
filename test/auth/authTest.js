const request = require('supertest')
const app = require('../..')
const sinon = require('sinon')

const { authApi } = require('../../internal/auth')
const mock = require('./authMock')

describe("Auth API E2E Test", () => {

  it("Should return 200 when user login", async () => {
    await sinon.stub(authApi, "Login").returns(mock.HAS_ROWS_RETURN())
    await request(app).post("/auth/login")
      .send({
        username: "ade",
        password: "xzxczxcz"
      })
      .expect(200)
  })
  it("Should return 401 when user login", async () => {
    await sinon.stub(authApi, "Login").returns(mock.NO_ROWS_RETURN())
    await request(app).post("/auth/login")
      .send({
        username: "ade",
        password: "xzxczxcz"
      })
      .expect(401)
  })
  afterEach(() => {
    sinon.restore()
  })
})