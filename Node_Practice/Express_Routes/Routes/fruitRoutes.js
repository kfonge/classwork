//Load Express then get access
const express = require('express')

//bringin our packaged route

const router = express.Router()

//Load our fruits data 
const fruits = require('../models/fruits')

// Setup "root" routes
router.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

// Setup "index" route
router.get('/fruits', (req, res) => {
    res.send(fruits)
})

// Setup "new" route
router.get('/fruits/new', (req, res) => {
    res.send('<form>Create fruit</form>')
})

// Setup "create" route
router.post('/fruits', (req, res) => {
    res.send('Creating a new fruit! (in DB)')
})

// Setup "show" route  
router.get('/fruits/:index', (req, res) => {
    res.send(fruits[req.params.index])
})

// Setup "edit" route
router.get('/fruits/:index/edit', (req, res) => {
    res.send('<form>Edit fruit</form>')
})

// Setup "update" route
router.put('/fruits/:index', (req, res) => {
    res.send('Updating a fruit at index! (in DB)')
})

// Setup "destroy" route
router.delete('/fruits/:index', (req, res) => {
    res.send('Deleting a fruit at index! (in DB)')
})

module.exports = fruits