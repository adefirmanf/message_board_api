const db = require('../../../db')

class Vote {
  async UpMessage(spec) {
    const client = await db.pool.connect()
    try {
      await client.query("BEGIN")
      await client.query(`INSERT INTO "vote_event_message" VALUES (DEFAULT, $1, $2, $3)`,
        [spec.user_id, spec.message_id, 1]
      )
      const results = await client.query(`UPDATE "message" SET "total_vote" = "total_vote" + 1, "updated_at" = now() WHERE "id"=$1 RETURNING total_vote`,
        [spec.message_id])
      await client.query("COMMIT")
      return results
    } catch (err) {
      await client.query("ROLLBACK")
      throw err
    } finally {
      await client.release()
    }
  }
  async DownMessage(spec) {
    const client = await db.pool.connect()
    try {
      await client.query("BEGIN")
      await client.query(`INSERT INTO "vote_event_message" VALUES (DEFAULT, $1, $2, $3)`,
        [spec.user_id, spec.message_id, -1]
      )
      const results = await client.query(`UPDATE "message" SET "total_vote" = "total_vote" - 1, "updated_at" = now() WHERE "id"=$1 RETURNING total_vote`,
        [spec.message_id])
      await client.query("COMMIT")
      return results
    } catch (err) {
      await client.query("ROLLBACK")
      throw err
    } finally {
      await client.release()
    }
  }
  async UpComment(spec) {
    const client = await db.pool.connect()
    try {
      await client.query("BEGIN")
      await client.query(`INSERT INTO "vote_event_comment" VALUES (DEFAULT, $1, $2, $3)`,
        [spec.user_id, spec.comment_id, 1]
      )
      const results = await client.query(`UPDATE "comment" SET "total_vote" = "total_vote" + 1, "updated_at" = now() WHERE "id"=$1 RETURNING total_vote`,
        [spec.comment_id])

      await client.query("COMMIT")
      return results
    } catch (err) {
      await client.query("ROLLBACK")
      throw err
    } finally {
      await client.release()
    }
  }
  async DownComment(spec) {
    const client = await db.pool.connect()
    try {
      await client.query("BEGIN")
      await client.query(`INSERT INTO "vote_event_comment" VALUES (DEFAULT, $1, $2, $3)`,
        [spec.user_id, spec.comment_id, -1]
      )
      const results = await client.query(`UPDATE "comment" SET "total_vote" = "total_vote" - 1, "updated_at" = now() WHERE "id"=$1 RETURNING total_vote`,
        [spec.comment_id])

      await client.query("COMMIT")
      return results
    } catch (err) {
      await client.query("ROLLBACK")
      throw err
    } finally {
      await client.release()
    }
  }
}

module.exports = Vote