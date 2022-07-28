const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const db = require('./config/db')
const port = process.env.PORT || 5000
// Require router
const usersRouter = require('./app/router/users.router')
// set up middelware necessary
app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))
app.use(express.urlencoded({extended: true}))
// Connect databse
db.connect()
// Middleware router
app.use('/users', usersRouter)

//
app.listen(port, ()=> console.log('Server is running at port 5000'))