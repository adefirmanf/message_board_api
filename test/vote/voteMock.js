
module.exports = {
  ROWCOUNT_AFFECTED_RETURN: () => {
    return {
      rowCount: 1,
      oid: null,
      rows: [{ total_vote: 21 }],
    }
  }
}
