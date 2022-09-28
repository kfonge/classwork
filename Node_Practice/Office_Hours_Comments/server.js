// STEP 1 //Load Express
const express = require("express")

//STEP 2// Install express in terminal
// npm i express for access to express modules
// npm init -y for package.json
// check package.json to verify name of index



//Identify (packaged?) Routes

// Creates our express app (object)
const app = express()

// Setup new Route for Request and Response
// app.get with 2 parameters
// 1: file path 
// 2: callbackfunction with homies

app.get('/', (req, res) => { 
    res.send (
        `<h1> List of Comments Received</h1> 
        
        <form> 
        <label htmlFor="comment">Leave a Comment:</label>
        <input type="text" id="comment" name="name" />
        </form>`

    )
})




//Identify the port
const port = 3000;

//Listen on port
app.listen(port, () => console.log("Listening on port: ", port))
