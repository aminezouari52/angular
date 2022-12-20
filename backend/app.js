const express = require('express')
const bodyParser = require('body-parser')
const userRouter = require('./router')

const app = express()

app.use(bodyParser.json())

app.use('/api/users', userRouter)

module.exports = app
