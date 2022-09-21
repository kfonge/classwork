//load express
const express = require('express')
//create express app
const app = express()

//Define a "root" route (home page)


//Pass it two arguments: the first is the path "/"
//and the secod is the callback with our homies "req" and 


//set up get request to homepage
app.get('/', (req, res) => {
    res.send('<h1> Hello Express!</h1>')
})
app.get('/home', function (req, res) {
    res.send('<h1>Home Page</h1>')
})
//Tell our app to listen on port 3000
//for HTTP requests from clients

app.listen( 3000, () => {
    console.log('Listening on port 3000')
})

//configure the app

const fs = require('fs') // this engine requires the fs module like we did Saturday
app.engine('madeline', (filePath, options, callback) => { // define the view engine called hypatia
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    // this is an extremely simple view engine we'll be more complex later
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#','<div>'+ options.content + '</div>' )
    return callback(null, rendered)
  })
})
app.set('views', './views') // specify the views directory
app.set('view engine', 'madeline') // register the hypatia view engine