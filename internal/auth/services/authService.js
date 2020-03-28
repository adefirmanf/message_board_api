const db = require('../../../db')
const crypter = require('../../../helpers/crypter')

class Auth {
  async Login(spec) {
    try {
      const fetch = await db.query(`SELECT * FROM "user" WHERE username=$1 and password=$2`,
        [spec.username, crypter.hash(spec.password)])
      return fetch
    } catch (err) {
      throw err
    }
  }
}

module.exports = Auth