const db = require('../../../db')

class Comment {
  async GetAll(spec) {
    try {
      const fetch = await db.query(`SELECT * FROM "comment" order by created_at desc`)
      return fetch
    } catch (err) {
      throw err
    }
  }
  async GetByMessageId(spec) {
    try {
      const fetch = await db.query(`SELECT * FROM "comment" WHERE message_id = $1 order by created_at desc`, [spec.message_id])
      return fetch
    } catch (err) {
      throw err
    }
  }
  async PostByMessageId(spec) {
    try {
      const fetch = await db.query(`INSERT INTO "comment" VALUES (DEFAULT, $1, $2, $3, DEFAULT, DEFAULT) RETURNING id `,
        [spec.message_id, spec.user_id, spec.value])
      return fetch
    }
    catch (err) {
      throw err
    }
  }
}

module.exports = Comment