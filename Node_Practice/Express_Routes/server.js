// Load express
const express = require('express')
const fruitRoutes = require('./Routes/fruitRoutes')
const meatRoutes = require('./Routes/meatRoutes')
const veggieRoutes = require('./Routes/veggieRoutes')

// Creates our express app (object)
const app = express()

// Identify our port
const port = 5000

// set up/configure view engine, rendered in jsx
app.set('view engine', 'jsx')
// specify the file extension
app.engine('jsx', require('express-react-views').createEngine())

//middleware
app.use(express.urlencoded({extended:false}))


// app.use('/meats', meatRoutes)

//when you add a parameter (:variableName)
// app.get('/index/:name', (req, res) => {
//     res.send("hello" + req.params.name )
// } )
//Now use the routes -- app.use statements
//.use allows the server to access the route files from just the server.js instead of going to each file individually


app.use('/fruits', fruitRoutes)
// app.use('/veggies', veggieRoutes)
// app.use('/meats', meatRoutes)
// app.use('/api/fruits', fruitRoutes)
// app.use('/api/veggies', veggieRoutes)
// app.use('/api/meats', meatRoutes)


// Listen to port
app.listen(port, () => {
    console.log('Listening on port: ', port)
})