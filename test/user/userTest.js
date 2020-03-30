const request = require('supertest')
const app = require('../..')
const sinon = require('sinon')
const { userApi } = require('../../internal/users')
const { authApi } = require('../../internal/auth')

const mock = require('./userMock')

describe("User API E2E Test", () => {

  beforeEach(async () => {
    process.env.RANDOM_TEST_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkXyI6Ijk4NDJmZjdiLWExOGEtNGVjMy1hOTE4LWVmZGZjZjZkYjRhOCIsInVzZXJuYW1lIjoiYWRlIiwicGFzc3dvcmQiOiIkMmIkMTAkLkREZkIuVThzeTYxMjB6N3hRV1cxdWtucU5naS9BaXdIcUUwY0psTG53Tk5XU1I1bG4vSnUiLCJjcmVhdGVkX2F0IjoiMjAyMC0wMy0yOFQyMzowMzo0NS41OTlaIiwidXBkYXRlZF9hdCI6IjIwMjAtMDMtMjhUMjM6MDM6NDUuNTk5WiIsImlhdCI6MTU4NTQ5ODgxM30._Fo52g42-2t-e2d1_vAqK6wLxs7DkQIGizrpwRzMpbI"
  })

  it("Should return ok when get all user /user", async () => {
    await sinon.stub(userApi, "GetAll").returns(mock.HAS_ROWS_RETURN())
    await request(app).get("/user").set("Authorization", `Bearer ${process.env.RANDOM_TEST_TOKEN}`).expect(200)
  })
  it("Should return ok when get all user even no user in resource /user", async () => {
    await sinon.stub(userApi, "GetAll").returns(mock.NO_ROWS_RETURN())
    await request(app).get("/user").set("Authorization", `Bearer ${process.env.RANDOM_TEST_TOKEN}`).expect(200)
  })
  it("Should return ok when get specific user /user:id", async () => {
    await sinon.stub(userApi, "GetById").returns(mock.HAS_ROWS_RETURN())
    await request(app).get("/user/7cd8c92f-d9df-4ba9-83b0-6e1945f9d8ca").set("Authorization", `Bearer ${process.env.RANDOM_TEST_TOKEN}`).expect(200)
  })
  it("Should return fail when get invalid specific user /user:id", async () => {
    await sinon.stub(userApi, "GetById").returns(mock.NO_ROWS_RETURN())
    await request(app).get("/user/7cd8c92f-d9df-4ba9-83b0-6e1945f9d8ca").set("Authorization", `Bearer ${process.env.RANDOM_TEST_TOKEN}`).expect(404)
  })
  it("Should return ok when create user /user", async () => {
    await sinon.stub(userApi, "Create").returns(mock.ROWCOUNT_AFFECTED_RETURN())
    await request(app).post("/user/", {
      username: "johndoe",
      password: "secret123"
    }).expect(201)
  })
  afterEach(() => {
    sinon.restore()
  })
})