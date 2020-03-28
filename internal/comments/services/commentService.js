const db = require('../../../db')

class Comment {
  async GetAll(spec) {
    try {
      const fetch = await db.query(`SELECT * FROM "comment"`)
      return fetch
    } catch (err) {
      throw err
    }
  }
  async GetByMessageId(spec) {
    try {
      const fetch = await db.query(`SELECT * FROM "comment" WHERE message_id = $1`, [spec.message_id])
      return fetch
    } catch (err) {
      throw err
    }
  }
  async PostByMessageId(spec) {
    try {
      const fetch = await db.query(`INSERT INTO "comment" VALUES (DEFAULT, $1, $2, $3, DEFAULT, DEFAULT)`,
        [spec.message_id, spec.user_id, spec.value])
      return fetch
    }
    catch (err) {
      throw err
    }
  }
}

module.exports = Comment