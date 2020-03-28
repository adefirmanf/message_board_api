const db = require('../../../db')

class Auth {
  async Login(spec) {
    try {
      const fetch = await db.query(`SELECT * FROM "user" WHERE username=$1 and password=$2`,
        [spec.username, spec.password])
      return fetch
    } catch (err) {
      throw err
    }
  }
}

module.exports = Auth