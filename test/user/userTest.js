const request = require('supertest')
const app = require('../..')

describe("User API E2E Test", () => {
  before(() => {
    require('./userMock')
  })

  it("Should return ok when get all user /user", async () => {
    await request(app).get("/user").expect(200)
  })
})