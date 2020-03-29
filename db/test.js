const db = require('.')
const assert = require('assert')

describe("DB Connection", () => {
  it("Should connect to 5432", async () => {
    const q = await db.query(`SELECT NOW()`)
    assert.equal(Object.keys(q.rows[0])[0], "now")
  })
})