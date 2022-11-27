require('dotenv').config()
// ----------------------------------------------------------------
/*
const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')
var cors = require('cors')
*/
// ----------------------------------------------------------------

const express = require('express')
const cors = require('cors')

// Connecting to the Database and start the Server
//                 const dotenv = requre('dotenv')
const userRoutes = require('./routes/user')

// ----------------------------------------------------------------
/*
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
    res.json({mssg: 'Hello, and Welcome!'})
})
//listen for requests

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log(`Listening on PORT ${process.env.PORT}. Congratulations.`)
    })
  })
  .catch((error) => {
    console.log(error)
  })
*/
// ----------------------------------------------------------------

// Get access to the MongoDB Atlas client
const mongoose = require('mongoose')

// If our PORT = 4000 is unavailable, it will default to 5000
const port = process.env.PORT || 5000



// This is used to make our server
const APP = express()

// This is what 'express' needs to use
APP.use(cors())
// So our server can accept JSON in the body of a request (IDK)
APP.use(express.json())


// It is customary to use /api/v#/...
APP.use('/api/user', userRoutes)

// In case someone goes to a page/route that does not exist
APP.use('*', (req, res) => res.status(404).json({ Error: 'This page does not exist.'}))

APP.use('/availability', require('./routes/availability.route'))
APP.use('/reserve', require('./routes/reserve.route'))



// Now to actually establish a connection
mongoose.connect(
    process.env.MONGO_URI,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(async client => {

        // This is how we start the WEBSERVER (after the DB is connected)
        APP.listen(port, () => {
            console.log(`Listening on Port ${port}. Congratulations.`)
        })
    })
    // If there is an error... 
    .catch(err => {
        console.error(err.stack)
        process.exit(1)
    })


// Now export 'APP' as a module
module.exports = APP

// ----------------------------------------------------------------
