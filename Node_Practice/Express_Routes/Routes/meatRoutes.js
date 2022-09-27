//Load Express then get access
const express = require('express')

//Load our meats data 
const meats = require('../models/meats')

//bring in our packaged route

const router = express.Router()

// Setup "root" routes
// router.get('/', (req, res) => {
//     res.send('<h1>Hello World!</h1>')
// })

// Setup "index" route
router.get('/', (req, res) => {
    res.render('meats/Index', {meats: meats})
})

// Setup "new" route
router.get('/new', (req, res) => {
    res.send('<form>Create meat</form>')
})

// Setup "create" route
router.post('/', (req, res) => {
    res.send('Creating a new meat! (in DB)')
})


// Setup "edit" route
router.get('/:index/edit', (req, res) => {
    res.send('<form>Edit meat</form>')
})

// // Setup "update" route
// router.put('/:index', (req, res) => {
//     res.send('Updating a meat at index! (in DB)')
// })

// // Setup "destroy" route
// router.delete('/:index', (req, res) => {
//     res.send('Deleting a meat at index! (in DB)')
// })

// Setup "show" route  
//note, ":index" is a place holder for anything client enters into browser
// this is also true for ".index" on 35

router.get('/:index', (req, res) => {
    res.send(meats[req.params.index])
})

module.exports = router