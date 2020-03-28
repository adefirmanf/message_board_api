const validator = require('validatorjs')

module.exports = {
  validate: (data, object) => {
    const Validate = new validator(data, object)
    if (Validate.passes()) {
      return data
    } else {
      throw new Error(JSON.stringify(Validate.errors.all()))
    }
  },
  isRequired: (rules) => {
    if (rules) {
      return `required|${rules}`
    } else {
      return `required`
    }
  },
  isString: () => 'string'
}