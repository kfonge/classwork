//Load express
const express = require('express')
const port = 3000
//create app
const app = express()
const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter"]

//Define routes (when ready)
app.get('/:index', (req, res) => {
    // console.log(req.params)
    if (plants[req.params.index]) {
        res.send(plants[req.params.index])
    } else {
        res.send("cannot find anything at index:")
    }})
//Listen to port 3000--specify port as first argument
app.listen(3000, () => {
    console.log('Listening on port ')
})

//example with multiple params

app.get('/hello/:firstname/:lastname', (req, res) => {
    console.log(req.params)
    res.send('hello ' + req.params.firstname + ' ' + req.params.lastname)
})

//example with query

app.get'/howdy/:firstname', (req res)