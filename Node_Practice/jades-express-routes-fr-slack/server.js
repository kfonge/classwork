// Load express
const express = require('express')
const mongoose = require('mongoose');

// Bring in our packaged routes
const fruitRoutes = require('./routes/fruitRoutes')

require('dotenv').config()

// Creates our express app (object)
const app = express()

// Identify our port
const port = process.env.PORT

// setup our view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// Middleware
app.use(express.urlencoded({extended:false}))
app.use(express.static("public"))

// ?name=kiwi&color=green&readyToEat=value

app.use('/fruits', fruitRoutes)

mongoose.connect(process.env.MONGO_DB);
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB!')
})

// Listen to port
app.listen(port, () => {
    console.log('Listening on port: ', port)
})



