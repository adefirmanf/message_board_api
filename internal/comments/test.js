const assert = require('assert')
const db = require('../../db/')
const { commentApi } = require('.')

describe("Comment test", () => {
  let seed = {
    user_id: "03713c7c-7102-11ea-bc55-0242ac130003",
    message_id: [1, 2, 3],
    value: ["Nice articles", "Perfect", "Thanks for sharing!"]
  }
  let messageId;

  before(async () => {
    console.info("Generating seed of messages...")
    await db.query(`INSERT INTO "comment" VALUES (DEFAULT, $1, $2, $3, DEFAULT, DEFAULT, DEFAULT)`, [
      seed.message_id[0], seed.user_id, seed.value[0]
    ])

    await db.query(`INSERT INTO "comment" VALUES (DEFAULT, $1, $2, $3, DEFAULT, DEFAULT, DEFAULT)`, [
      seed.message_id[1], seed.user_id, seed.value[1]
    ])
  })

  it("Should pass when get all message", async () => {
    const results = await commentApi.GetAll()
    messageId = results.rows[0].id
    assert.ok(results.rows.length > 0)
  })

  it("Should pass when get message by valid id", async () => {
    const results = await commentApi.GetByMessageId({
      message_id: messageId
    })
    assert.ok(results.rows.length > 0)
  })

  it("Should fail when get message by invalid id", async () => {
    const results = await commentApi.GetByMessageId({
      message_id: 99
    })
    assert.equal(results.rows.length, 0)
  })

  it("Should pass when post message", async () => {
    const results = await commentApi.PostByMessageId({
      user_id: seed.user_id,
      message_id: seed.message_id[0],
      value: seed.value[2]
    })
    assert.equal(results.rowCount, 1)
  })

  after(async () => {
    console.info("Cleaning seed of message...")
    const Results = await db.query(`DELETE FROM "comment" WHERE user_uuid = $1`, [
      seed.user_id])
  })
})
