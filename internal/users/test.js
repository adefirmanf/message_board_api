const assert = require('assert')
const { userApi } = require('.')
const db = require('../../db')
const crypter = require('../../helpers/crypter')

describe("Auth test", () => {
  const seed = [{
    uuid_: "03713c7c-7102-11ea-bc55-0242ac130003",
    username: "Johndoe",
    password: "admin"
  }, {
    uuid_: "93bf0750-5dd2-4a95-8933-17efd9954814",
    username: "Johndoe123",
    password: "admin123"
  }]
  before(async () => {
    console.info("Generating seed of user...")
    await db.query(`INSERT INTO "user" VALUES ($1, $2, $3, DEFAULT, DEFAULT)`, [
      seed[0].uuid_, seed[0].username, crypter.hash(seed[0].password)
    ])
    await db.query(`INSERT INTO "user" VALUES ($1, $2, $3, DEFAULT, DEFAULT)`, [
      seed[1].uuid_, seed[1].username, crypter.hash(seed[1].password)
    ])
  })
  it("Should pass when get all users", async () => {
    const results = await userApi.GetAll()
    assert.ok(results.rows.length > 0)
  })
  it("Should pass when get user by id", async () => {
    const results = await userApi.GetById({
      user_id: seed[0].uuid_
    })
    assert.equal(results.rows.length, 1)
  })
  it("Should pass when create user", async () => {
    const results = await userApi.Create({
      username: seed[0].username,
      password: seed[0].password
    })
    assert.equal(results.rowCount, 1)
  })
  after(async () => {
    console.info("Cleaning seed of user...")
    await db.query(`DELETE FROM "user" WHERE username = $1`, [
      seed[0].username])
    await db.query(`DELETE FROM "user" WHERE username = $1`, [
      seed[1].username])
  })
})
