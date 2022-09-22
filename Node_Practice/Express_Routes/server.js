// Load express
const express = require('express')
// const fruitRoutes = require('./Routes/fruitRoutes')
const meatRoutes = require('./Routes/meatRoutes')
// const veggieRoutes = require('./Routes/veggieRoutes')

// Creates our express app (object)
const app = express()

// Identify our port
const port = 5000


// Listen to port
app.listen(port, () => {
    console.log('Listening on port: ', port)
})

//Now use the routes -- app.use statements
//.use allows the server to access the route files from just the server.js instead of going to each file individually

// app.use('/api/fruits', fruitRoutes)
// app.use('/api/veggies', veggieRoutes)
app.use('/api/meats', meatRoutes)
