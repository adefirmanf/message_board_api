const request = require('supertest')
const app = require('../..')
const sinon = require('sinon')
const { voteApi } = require('../../internal/votes')
const mock = require('./voteMock')

describe("Comment API E2E Test", () => {

  beforeEach(async () => {
    process.env.RANDOM_TEST_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkXyI6Ijk4NDJmZjdiLWExOGEtNGVjMy1hOTE4LWVmZGZjZjZkYjRhOCIsInVzZXJuYW1lIjoiYWRlIiwicGFzc3dvcmQiOiIkMmIkMTAkLkREZkIuVThzeTYxMjB6N3hRV1cxdWtucU5naS9BaXdIcUUwY0psTG53Tk5XU1I1bG4vSnUiLCJjcmVhdGVkX2F0IjoiMjAyMC0wMy0yOFQyMzowMzo0NS41OTlaIiwidXBkYXRlZF9hdCI6IjIwMjAtMDMtMjhUMjM6MDM6NDUuNTk5WiIsImlhdCI6MTU4NTQ5ODgxM30._Fo52g42-2t-e2d1_vAqK6wLxs7DkQIGizrpwRzMpbI"
  })

  it("Should return ok when vote up message /vote/message/:id/up", async () => {
    await sinon.stub(voteApi, "VOTE_UP_FOR_MESSAGE").returns(mock.ROWCOUNT_AFFECTED_RETURN())
    await request(app).post("/vote/message/37/up/").set("Authorization", `Bearer ${process.env.RANDOM_TEST_TOKEN}`).expect(200)
  })
  it("Should return ok when vote down message /vote/message/:id/down", async () => {
    await sinon.stub(voteApi, "VOTE_DOWN_FOR_MESSAGE").returns(mock.ROWCOUNT_AFFECTED_RETURN())
    await request(app).post("/vote/message/37/down/").set("Authorization", `Bearer ${process.env.RANDOM_TEST_TOKEN}`).expect(200)
  })
  it("Should return ok when vote up comment /vote/comment/:id/up/", async () => {
    await sinon.stub(voteApi, "VOTE_UP_FOR_COMMENT").returns(mock.ROWCOUNT_AFFECTED_RETURN())
    await request(app).post("/vote/comment/12/up/").set("Authorization", `Bearer ${process.env.RANDOM_TEST_TOKEN}`).expect(200)
  })
  it("Should return ok when vote down comment /vote/comment/:id/down/", async () => {
    await sinon.stub(voteApi, "VOTE_DOWN_FOR_COMMENT").returns(mock.ROWCOUNT_AFFECTED_RETURN())
    await request(app).post("/vote/comment/12/down/").set("Authorization", `Bearer ${process.env.RANDOM_TEST_TOKEN}`).expect(200)
  })
  afterEach(() => {
    sinon.restore()
  })
})