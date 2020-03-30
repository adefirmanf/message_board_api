const request = require('supertest')
const app = require('../..')
const sinon = require('sinon')
const { messageApi } = require('../../internal/messages')

const mock = require('./messageMock')

describe("Message API E2E Test", () => {

  beforeEach(async () => {
    process.env.RANDOM_TEST_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkXyI6Ijk4NDJmZjdiLWExOGEtNGVjMy1hOTE4LWVmZGZjZjZkYjRhOCIsInVzZXJuYW1lIjoiYWRlIiwicGFzc3dvcmQiOiIkMmIkMTAkLkREZkIuVThzeTYxMjB6N3hRV1cxdWtucU5naS9BaXdIcUUwY0psTG53Tk5XU1I1bG4vSnUiLCJjcmVhdGVkX2F0IjoiMjAyMC0wMy0yOFQyMzowMzo0NS41OTlaIiwidXBkYXRlZF9hdCI6IjIwMjAtMDMtMjhUMjM6MDM6NDUuNTk5WiIsImlhdCI6MTU4NTQ5ODgxM30._Fo52g42-2t-e2d1_vAqK6wLxs7DkQIGizrpwRzMpbI"
  })

  it("Should return ok when get all message /message", async () => {
    await sinon.stub(messageApi, "GetAll").returns(mock.HAS_ROWS_RETURN())
    await request(app).get("/message").set("Authorization", `Bearer ${process.env.RANDOM_TEST_TOKEN}`).expect(200)
  })
  it("Should return ok when get all user even no message in resource /message", async () => {
    await sinon.stub(messageApi, "GetAll").returns(mock.NO_ROWS_RETURN())
    await request(app).get("/message").set("Authorization", `Bearer ${process.env.RANDOM_TEST_TOKEN}`).expect(200)
  })
  it("Should return ok when get specific message /message/:id", async () => {
    await sinon.stub(messageApi, "GetById").returns(mock.HAS_ROWS_RETURN())
    await request(app).get("/message/134").set("Authorization", `Bearer ${process.env.RANDOM_TEST_TOKEN}`).expect(200)
  })
  it("Should return fail when get invalid specific message /message:id", async () => {
    await sinon.stub(messageApi, "GetById").returns(mock.NO_ROWS_RETURN())
    await request(app).get("/message/7cd8c92f-d9df-4ba9-83b0-6e1945f9d8ca").set("Authorization", `Bearer ${process.env.RANDOM_TEST_TOKEN}`).expect(404)
  })
  it("Should return ok when create message /message", async () => {
    await sinon.stub(messageApi, "Post").returns(mock.ROWCOUNT_AFFECTED_RETURN())
    await request(app).post("/message/", {
      message: "Lorem ipsum dolor sir amet"
    }).set("Authorization", `Bearer ${process.env.RANDOM_TEST_TOKEN}`).expect(201)
  })
  afterEach(() => {
    sinon.restore()
  })
})