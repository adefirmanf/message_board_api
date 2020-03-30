const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')

const authRouter = require('./routes/authRoutes')
const userRouter = require('./routes/userRoutes')
const messageRouter = require('./routes/messageRoutes')
const commentRouter = require('./routes/commentRoutes')
const voteRouter = require('./routes/voteRoutes')

app.use(bodyParser.json({
  type: "application/json"
}))

app.use(cors())

app.use("/auth", authRouter)
app.use("/user", userRouter)
app.use("/message", messageRouter)
app.use("/comment", commentRouter)
app.use("/vote", voteRouter)

// Check if application has been run 
app.use("/ping", (_, res) => {
  res.json("pong!")
})

app.listen(3000, () => {
  console.log(`Port is listening on 3000`)
})

module.exports = app