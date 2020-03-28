const assert = require('assert')
const { authApi } = require('.')
const db = require('../../db')
const crypter = require('../../helpers/crypter')

describe("Auth test", () => {
  const seed = {
    username: "Johndoe",
    password: "admin"
  }
  before(async () => {
    console.info("Generating seed of user...")
    await db.query(`INSERT INTO "user" VALUES (DEFAULT, $1, $2, DEFAULT, DEFAULT)`, [
      seed.username, crypter.hash(seed.password)
    ])
  })
  it("Should pass when login with valid username & password", async () => {
    const results = await authApi.Login({
      username: seed.username,
      password: seed.password
    })
    assert.equal(results.rows.length, 1)
  })
  it("Should fail when login with invalid username or password", async () => {
    const results = await authApi.Login({
      username: "invalid user",
      password: crypter.hash("invalid user")
    })
    assert.equal(results.rows.length, 0)
  })
  after(async () => {
    console.info("Cleaning seed of user...")
    const Results = await db.query(`DELETE FROM "user" WHERE username = $1`, [
      seed.username])
  })
})
