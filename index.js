const app = require('express')()
const bodyParser = require('body-parser')

const authRouter = require('./routes/auth')
const userRouter = require('./routes/user')
const messageRouter = require('./routes/message')
const commentRouter = require('./routes/comment')

app.use(bodyParser.json({
  type: "application/json"
}))

app.use("/auth", authRouter)
app.use("/user", userRouter)
app.use("/message", messageRouter)
app.use("/comment", commentRouter)

// Check if application has been run 
app.use("/ping", (_, res) => {
  res.json("pong!")
})

app.listen(3000, () => {
  console.log(`Port is listening on 3000`)
})