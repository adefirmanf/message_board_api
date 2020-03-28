const assert = require('assert')
const db = require('../../db/')
const { voteApi } = require('.')

describe("Vote message test", () => {
  let seed = {
    user_id: "03713c7c-7102-11ea-bc55-0242ac130003",
    message: [`Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,

      `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, 
    sunt in culpa qui officia deserunt mollit anim id est laborum."`]
  }
  let messageId = [];

  before(async () => {
    console.info("Generating seed of messages...")
    const result1 = await db.query(`INSERT INTO "message" VALUES (DEFAULT, $1, $2, DEFAULT, DEFAULT, DEFAULT) RETURNING id`, [
      seed.user_id, seed.message[0]
    ])
    messageId.push(result1.rows[0].id)

    const result2 = await db.query(`INSERT INTO "message" VALUES (DEFAULT, $1, $2, DEFAULT, DEFAULT, DEFAULT) RETURNING id`, [
      seed.user_id, seed.message[1]
    ])
    messageId.push(result2.rows[0].id)
  })

  it("Should pass when vote up message", async () => {
    const results = await voteApi.VOTE_UP_FOR_MESSAGE({
      user_id: seed.user_id,
      message_id: messageId[0]
    })
    assert.equal(results.rows[0].total_vote, 1)
  })

  it("Should pass when vote down message", async () => {
    const results = await voteApi.VOTE_DOWN_FOR_MESSAGE({
      user_id: seed.user_id,
      message_id: messageId[1]
    })
    assert.equal(results.rows[0].total_vote, -1)
  })

  it("Should fail when vote up message with same user_id", async () => {
    await voteApi.VOTE_UP_FOR_MESSAGE({
      user_id: seed.user_id,
      message_id: messageId[0]
    })
    const results = await voteApi.VOTE_UP_FOR_MESSAGE({
      user_id: seed.user_id,
      message_id: messageId[0]
    })
    assert.equal(results.rows[0].total_vote, 1)
  })

  it("Should fail when vote down message with same user_id", async () => {
    await voteApi.VOTE_DOWN_FOR_MESSAGE({
      user_id: seed.user_id,
      message_id: messageId[1]
    })
    const results = await voteApi.VOTE_DOWN_FOR_MESSAGE({
      user_id: seed.user_id,
      message_id: messageId[1]
    })
    assert.equal(results.rows[0].total_vote, -2)
  })

  after(async () => {
    console.info("Cleaning seed of message & vote_event_message...")
    await db.query(`DELETE FROM "message" WHERE user_uuid = $1`, [
      seed.user_id])
    await db.query(`DELETE FROM "vote_event_message" WHERE user_uuid = $1`, [
      seed.user_id])
  })
})

describe("Vote comment test", () => {
  let seed = {
    user_id: "03713c7c-7102-11ea-bc55-0242ac130003",
    message_id: [1, 2],
    value: [`Nice dude`, `Cool. You had a great job!`]
  }
  let commentId = [];
  before(async () => {
    console.info("Generating seed of comments...")
    const result1 = await db.query(`INSERT INTO "comment" VALUES (DEFAULT, $1, $2, $3, DEFAULT, DEFAULT, DEFAULT) RETURNING id`, [
      seed.message_id[0], seed.user_id, seed.value[0]
    ])
    commentId.push(result1.rows[0].id)

    const result2 = await db.query(`INSERT INTO "comment" VALUES (DEFAULT, $1, $2, $3, DEFAULT, DEFAULT, DEFAULT) RETURNING id`, [
      seed.message_id[0], seed.user_id, seed.value[1]
    ])
    commentId.push(result2.rows[0].id)
  })

  it("Should pass when vote up comment", async () => {
    const results = await voteApi.VOTE_UP_FOR_COMMENT({
      user_id: seed.user_id,
      comment_id: commentId[0]
    })
    assert.equal(results.rows[0].total_vote, 1)
  })

  it("Should pass when vote down message", async () => {
    const results = await voteApi.VOTE_DOWN_FOR_COMMENT({
      user_id: seed.user_id,
      comment_id: commentId[1]
    })
    assert.equal(results.rows[0].total_vote, -1)
  })

  it("Should fail when vote up message with same user_id", async () => {
    await voteApi.VOTE_UP_FOR_COMMENT({
      user_id: seed.user_id,
      comment_id: commentId[0]
    })
    const results = await voteApi.VOTE_UP_FOR_COMMENT({
      user_id: seed.user_id,
      comment_id: commentId[0]
    })
    assert.equal(results.rows[0].total_vote, 1)
  })

  it("Should fail when vote down message with same user_id", async () => {
    await voteApi.VOTE_DOWN_FOR_COMMENT({
      user_id: seed.user_id,
      comment_id: commentId[1]
    })
    const results = await voteApi.VOTE_DOWN_FOR_COMMENT({
      user_id: seed.user_id,
      comment_id: commentId[1]
    })
    assert.equal(results.rows[0].total_vote, -2)
  })

  after(async () => {
    console.info("Cleaning seed of comment & vote_event_comment...")
    await db.query(`DELETE FROM "comment" WHERE user_uuid = $1`, [
      seed.user_id])
    await db.query(`DELETE FROM "vote_event_comment" WHERE user_uuid = $1`, [
      seed.user_id])
  })
})