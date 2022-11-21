require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')
var cors = require('cors')

//express app 
const app = express()

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
app.use(cors()) 
app.use(express.json())
app.use('/api/user', userRoutes)

//routes 
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'})
})
//listen for requests

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })