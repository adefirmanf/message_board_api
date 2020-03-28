const db = require('../../../db')

class Message {
  async GetAll(spec) {
    try {
      const fetch = await db.query(`SELECT * FROM "message"`)
      return fetch
    } catch (err) {
      throw err
    }
  }
  async GetById(spec) {
    try {
      const fetch = await db.query(`SELECT * FROM "message" WHERE id = $1`, [spec.message_id])
      return fetch
    } catch (err) {
      throw err
    }
  }
  async Post(spec) {
    try {
      const fetch = await db.query(`INSERT INTO "message" VALUES (DEFAULT, $1, $2, DEFAULT, DEFAULT, DEFAULT)`,
        [spec.user_id, spec.value])
      return fetch
    }
    catch (err) {
      throw err
    }
  }
}

module.exports = Message