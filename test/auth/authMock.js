module.exports = {
  HAS_ROWS_RETURN: () => {
    return {
      "rowCount": 1,
      "rows": [
        {
          "uuid_": "9842ff7b-a18a-4ec3-a918-efdfcf6db4a8",
          "username": "ade",
          "password": "$2b$10$.DDfB.U8sy6120z7xQWW1uknqNgiAiwHqE0cJlLnwNNWSR5lnJu",
          "created_at": "2020-03-28T23:03:45.599Z",
          "updated_at": "2020-03-28T23:03:45.599Z"
        }
      ]
    }

  },
  NO_ROWS_RETURN: () => {
    return {
      "rowCount": 0,
      "rows": []
    }
  }
}
