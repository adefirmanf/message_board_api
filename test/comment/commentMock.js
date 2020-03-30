module.exports = {
  HAS_ROWS_RETURN: () => {
    return {
      rowCount: 12,
      oid: null,
      rows:
        [{
          id: 47,
          message_id: 134,
          user_uuid: '35ef58d4-d30c-41b2-b3b9-2ff2494a84c0',
          value: 'test123',
          total_vote: 2,
          created_at: "2020 - 03 - 29T07: 26: 49.866Z",
          updated_at: "2020 - 03 - 29T07: 30: 58.877Z"
        },
        {
          id: 46,
          message_id: 134,
          user_uuid: '35ef58d4-d30c-41b2-b3b9-2ff2494a84c0',
          value: 'zxczxc',
          total_vote: 4,
          created_at: "2020 - 03 - 29T07: 24: 21.034Z",
          updated_at: "2020 - 03 - 29T07: 31: 01.133Z"
        },
        {
          id: 45,
          message_id: 134,
          user_uuid: '35ef58d4-d30c-41b2-b3b9-2ff2494a84c0',
          value: 'zcvxcv',
          total_vote: 1,
          created_at: "2020 - 03 - 29T07: 16: 36.403Z",
          updated_at: "2020 - 03 - 29T07: 31: 03.425Z"
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
