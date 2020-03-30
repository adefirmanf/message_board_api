module.exports = {
  HAS_ROWS_RETURN: () => {
    return {
      rowCount: 19,
      oid: null,
      rows:
        [{
          id: 134,
          user_uuid: '35ef58d4-d30c-41b2-b3b9-2ff2494a84c0',
          value: 'Hello world with bug fixed',
          total_vote: 3,
          created_at: "2020 - 03 - 29T06: 18: 19.916Z",
          updated_at: "2020 - 03 - 29T07: 46: 56.633Z"
        },
        {
          id: 133,
          user_uuid: '35ef58d4-d30c-41b2-b3b9-2ff2494a84c0',
          value: 'zxczxczxczxczxc',
          total_vote: 0,
          created_at: "2020 - 03 - 29T06: 17: 40.665Z",
          updated_at: "2020 - 03 - 29T06: 17: 40.665Z"
        },
        {
          id: 132,
          user_uuid: '35ef58d4-d30c-41b2-b3b9-2ff2494a84c0',
          value: 'zxczxczxc',
          total_vote: 0,
          created_at: "2020 - 03 - 29T06: 17: 18.833Z",
          updated_at: "2020 - 03 - 29T06: 17: 18.833Z"
        }]
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
      rows: [{
        id: 132
      }]
    }
  }
}
