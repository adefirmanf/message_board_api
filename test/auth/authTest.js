const request = require('supertest')
const assert = require('assert')
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
      .then(response => {
        assert.strictEqual(response.body.message, "ok")
        assert.strictEqual(response.body.data.user_id, "9842ff7b-a18a-4ec3-a918-efdfcf6db4a8")
        assert.strictEqual(response.body.data.username, "ade")
        assert.ok(response.body.data.token.length > 10)
      })

  })
  it("Should return 401 when invalid user login", async () => {
    await sinon.stub(authApi, "Login").returns(mock.NO_ROWS_RETURN())
    await request(app).post("/auth/login")
      .send({
        username: "ade",
        password: "xzxczxcz"
      })
      .expect(401)
      .then(response => {
        assert.strictEqual(response.body.message, "invalid authorization")
        assert.strictEqual(response.body.data.error, "username or password incorrect")
      })
  })
  afterEach(() => {
    sinon.restore()
  })
})