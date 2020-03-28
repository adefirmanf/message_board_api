const assert = require('assert')
const crypter = require('../../helpers/crypter/')
const db = require('../../db/')
const { messageApi } = require('.')

describe("Message test", () => {
  let seed = {
    user_id: "03713c7c-7102-11ea-bc55-0242ac130003",
    username: "Johndoe",
    password: "admin",
    message: [`Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,

      `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, 
    sunt in culpa qui officia deserunt mollit anim id est laborum."`]
  }
  let messageId;

  before(async () => {
    console.info("Generating seed of messages...")
    await db.query(`INSERT INTO "message" VALUES (DEFAULT, $1, $2, DEFAULT, DEFAULT, DEFAULT)`, [
      seed.user_id, seed.message[0]
    ])

    await db.query(`INSERT INTO "message" VALUES (DEFAULT, $1, $2, DEFAULT, DEFAULT, DEFAULT)`, [
      seed.user_id, seed.message[1]
    ])
  })

  it("Should pass when get all message", async () => {
    const results = await messageApi.GetAll()
    messageId = results.rows[0].id
    assert.ok(results.rows.length > 0)
  })

  it("Should pass when get message by valid id", async () => {
    const results = await messageApi.GetById({
      message_id: messageId
    })
    assert.ok(results.rows.length > 0)
  })

  it("Should fail when get message by invalid id", async () => {
    const results = await messageApi.GetById({
      message_id: 99
    })
    assert.equal(results.rows.length, 0)
  })

  it("Should pass when post message", async () => {
    const results = await messageApi.Post({
      user_id: seed.user_id,
      value: seed.message[1]
    })
    assert.equal(results.rowCount, 1)
  })

  after(async () => {
    console.info("Cleaning seed of message...")
    const Results = await db.query(`DELETE FROM "message" WHERE user_uuid = $1`, [
      seed.user_id])
  })
})
