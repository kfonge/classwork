//Load Express then get access
const { application } = require('express')
const express = require('express')

//bringin our packaged route

const router = express.Router()

//Load our fruits data 
const fruits = require('../models/fruits')

// Setup "root" routes
// router.get('/', (req, res) => {
//     res.send('<h1>Hello World!</h1>')
// })


//Define middleware
application.use((req, res, next) => {
    console.log('I run for all routes')
    next()
})

// Setup "index" route, shows everything
router.get('/', (req, res) => {
    // res.send(fruits)
    //now that we have view engine, use res.render instead of send
    res.render('Index', { fruits: fruits })
})

// Setup "new" route
router.get('/new', (req, res) => {
    // res.send('<form>Create fruit</form>')
    res.render('New')
})

// Setup "create" route
// router.post('/', (req, res) => {
//     console.log(req.body)
//     res.send('Creating a new fruit! (in DB)')
// })
router.post('/', (req, res) => {
    if (req.body.readyToEat === "on") {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    fruits.push(req.body)
    res.redirect('/fruits')
})

//?name=value&name=value&name=value
// Setup "show" route  
router.get('/:index', (req, res) => {
    // res.send(fruits[req.params.index])
    res.render('Show', { fruit: fruits[req.params.index] })// this becomes "ths.props" in Show component of server file
})

// Setup "edit" route
router.get('/:index/edit', (req, res) => {
    res.send('<form>Edit fruit</form>')
})

// Setup "update" route
router.put('/:index', (req, res) => {
    res.send('Updating a fruit at index! (in DB)')
})

// Setup "destroy" route
router.delete('/:index', (req, res) => {
    res.send('Deleting a fruit at index! (in DB)')
})

module.exports = router