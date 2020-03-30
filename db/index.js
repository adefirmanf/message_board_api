const { Pool } = require('pg')

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT
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