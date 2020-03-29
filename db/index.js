const { Pool } = require('pg')

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "postgres",
  port: 5432
})

module.exports = {
  query: async (text, params) => {
    try {
      return await pool.query(text, params)
    }
    catch (err) {
      throw new Error(err)
    }
  },
  pool,
  // Useful for graceful shutdown
  poolEnd: async () => {
    pool.end().then(() => console.log("pool has ended"))
  }
}