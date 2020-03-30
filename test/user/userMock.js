const sinon = require('sinon')
const users = require('../../internal/users/services/userService')
module.exports = {
  HAS_ROWS_RETURN: () => {
    return {
      "rowCount": 1,
      "rows": [
        {
          "uuid_": "9842ff7b-a18a-4ec3-a918-efdfcf6db4a8",
          "username": "ade12345",
          "created_at": "2020-03-28T23:03:45.599Z",
          "updated_at": "2020-03-28T23:03:45.599Z"
        },
        {
          "uuid_": "7cd8c92f-d9df-4ba9-83b0-6e1945f9d8ca",
          "username": "johndoe",
          "created_at": "2020-03-28T23:07:35.975Z",
          "updated_at": "2020-03-28T23:07:35.975Z"
        }
      ]
    }
  },
  NO_ROWS_RETURN: () => {
    return {
      "rowCount": 0,
      "rows": []
    }
  },
  ROWCOUNT_AFFECTED_RETURN: () => {
    return {
      command: 'INSERT',
      rowCount: 1,
      oid: 0,
      rows: []
    }
  }
}
