const db = require('../../../db')
const crypter = require('../../../helpers/crypter')

class Comment {
  async GetAll(spec) {
    try {
      const fetch = await db.query(`SELECT "uuid_", "username", "created_at", "updated_at" FROM "user"`)
      return fetch
    } catch (err) {
      throw err
    }
  }
  async GetById(spec) {
    try {
      const fetch = await db.query(`SELECT "uuid_", "username", "created_at", "updated_at" FROM "user" WHERE uuid_ = $1`, [spec.user_id])
      return fetch
    } catch (err) {
      throw err
    }
  }
  async Create(spec) {
    try {
      const fetch = await db.query(`INSERT INTO "user" VALUES (DEFAULT, $1, $2, DEFAULT, DEFAULT)`,
        [spec.username, crypter.hash(spec.password)])
      return fetch
    }
    catch (err) {
      throw err
    }
  }
}

module.exports = Comment