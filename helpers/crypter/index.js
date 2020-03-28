const bcrypt = require('bcrypt')

class Crypter {
  static generateSalt(rounds) {
    return bcrypt.genSaltSync(rounds)
  }
  static hash(string) {
    return bcrypt.hashSync(string, "$2b$10$.DDfB.U8sy6120z7xQWW188xjpoqiw12HqRTyyOZ01aAMki74619Mp")
  }
  static compare(plain, hashfromdb) {
    return bcrypt.compareSync(plain, hashfromdb)
  }
}

module.exports = Crypter;