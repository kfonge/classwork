// Load express
const express = require("express")
const methodOverride = require("method-override")

// Bring in mongoConfig function
const mongoConfig = require("./config")

// Bring in our packaged routes
const fruitRoutes = require("./routes/fruitRoutes")
const meatRoutes = require("./Routes/meatRoutes")
const veggieRoutes = require("./Routes/veggieRoutes")

require("dotenv").config()

// Creates our express app (object)
const app = express()

// Identify our port
const port = process.env.PORT

// setup our view engine
app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())

// Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"))
app.use(methodOverride("_method"))

app.use("/fruits", fruitRoutes)
app.use("/vegetables", veggieRoutes)
app.use("/meats", meatRoutes)
// Listen to port
app.listen(port, () => console.log("Listening on port: ", port))

// Connect to DB
mongoConfig()
