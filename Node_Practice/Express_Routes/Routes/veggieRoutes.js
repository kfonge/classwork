//Load Express then get access
const express = require('express')

//bring in our packaged route

const router = express.Router()

//Load our veggies data 
const veggies = require('../models/veggies')

// Setup "root" routes
router.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

// Setup "index" route
router.get('/veggies', (req, res) => {
    res.send(veggies)
})

// Setup "new" route
router.get('/veggies/new', (req, res) => {
    res.send('<form>Create veggie</form>')
})

// Setup "create" route
router.post('/veggies', (req, res) => {
    res.send('Creating a new veggie! (in DB)')
})

// Setup "show" route  
router.get('/veggies/:index', (req, res) => {
    res.send(veggies[req.params.index])
})

// Setup "edit" route
router.get('/veggies/:index/edit', (req, res) => {
    res.send('<form>Edit veggie</form>')
})

// Setup "update" route
router.put('/veggies/:index', (req, res) => {
    res.send('Updating a veggie at index! (in DB)')
})

// Setup "destroy" route
router.delete('/veggies/:index', (req, res) => {
    res.send('Deleting a veggie at index! (in DB)')
})