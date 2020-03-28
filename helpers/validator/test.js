const guard = require('.')
const assert = require('assert')

describe("Guard test", () => {
  it("Should pass when property is exist", () => {
    const user = {
      username: "John Doe",
      password: "johndoe123"
    }
    const rules = {
      username: guard.isRequired(),
      password: guard.isRequired()
    }
    guard.validate(user, rules)
  })
  it("Should error when property missing", () => {
    const user = {}
    const rules = {
      username: guard.isRequired(),
      password: guard.isRequired()
    }
    assert.throws(() => guard.validate(user, rules), /Error/)
  })
})