const request = require('supertest')
const app = require('../..')
const sinon = require('sinon')
const { commentApi } = require('../../internal/comments')

const mock = require('./commentMock')

describe("Comment API E2E Test", () => {

  beforeEach(async () => {
    process.env.RANDOM_TEST_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkXyI6Ijk4NDJmZjdiLWExOGEtNGVjMy1hOTE4LWVmZGZjZjZkYjRhOCIsInVzZXJuYW1lIjoiYWRlIiwicGFzc3dvcmQiOiIkMmIkMTAkLkREZkIuVThzeTYxMjB6N3hRV1cxdWtucU5naS9BaXdIcUUwY0psTG53Tk5XU1I1bG4vSnUiLCJjcmVhdGVkX2F0IjoiMjAyMC0wMy0yOFQyMzowMzo0NS41OTlaIiwidXBkYXRlZF9hdCI6IjIwMjAtMDMtMjhUMjM6MDM6NDUuNTk5WiIsImlhdCI6MTU4NTQ5ODgxM30._Fo52g42-2t-e2d1_vAqK6wLxs7DkQIGizrpwRzMpbI"
  })

  it("Should return ok when get all comment /comment", async () => {
    await sinon.stub(commentApi, "GetAll").returns(mock.HAS_ROWS_RETURN())
    await request(app).get("/comment").set("Authorization", `Bearer ${process.env.RANDOM_TEST_TOKEN}`).expect(200)
  })
  it("Should return ok when get all user even no comment in resource /comment", async () => {
    await sinon.stub(commentApi, "GetAll").returns(mock.NO_ROWS_RETURN())
    await request(app).get("/comment").set("Authorization", `Bearer ${process.env.RANDOM_TEST_TOKEN}`).expect(200)
  })
  it("Should return ok when get specific comment /comment/message/:id", async () => {
    await sinon.stub(commentApi, "GetByMessageId").returns(mock.HAS_ROWS_RETURN())
    await request(app).get("/comment/message/134").set("Authorization", `Bearer ${process.env.RANDOM_TEST_TOKEN}`).expect(200)
  })
  it("Should return ok when get invalid specific comment /comment/message/:id", async () => {
    await sinon.stub(commentApi, "GetByMessageId").returns(mock.NO_ROWS_RETURN())
    await request(app).get("/comment/message/7cd8c92f-d9df-4ba9-83b0-6e1945f9d8ca").set("Authorization", `Bearer ${process.env.RANDOM_TEST_TOKEN}`).expect(200)
  })
  it("Should return ok when create comment /comment", async () => {
    await sinon.stub(commentApi, "PostByMessageId").returns(mock.ROWCOUNT_AFFECTED_RETURN())
    await request(app).post("/comment/message/134", {
      comment: "Lorem ipsum dolor sir amet"
    }).set("Authorization", `Bearer ${process.env.RANDOM_TEST_TOKEN}`).expect(201)
  })
  afterEach(() => {
    sinon.restore()
  })
})