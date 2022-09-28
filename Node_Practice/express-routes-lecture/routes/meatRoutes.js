// Load express
const express = require('express')

// Create a special router object for our routes
const router = express.Router()

// Loading our Model of meat
const Meat = require('../models/meat')

// Bring in seed data
const seed = require('../models/seed')

// Bring in controller functions (destructure methods)
const { 
    findAllMeats, 
    showNewView, 
    createNewMeat,
    seedStarterData,
    showOneMeat,
    showEditView,
    updateOneMeat,
    deleteOneMeat
} = require('../controllers/meatController')

// Bring in controller object (with methods attached)
// const meatController = require('../controllers/meatController')
// Example: router.get('/', meatController.findAllMeats)


// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

// Setup "index" route
router.get('/', findAllMeats)

// Setup "new" route
router.get('/new', showNewView)

// Setup "destroy" route
router.delete('/:id', deleteOneMeat)

// Setup "update" route
router.put('/:id', updateOneMeat)

// Setup "create" route
router.post('/', createNewMeat)

// Setup "edit" route
router.get('/:id/edit', showEditView)

// Setup "show" route  
router.get('/:id', showOneMeat)

// Setup "seed" route
router.get('/seed', seedStarterData)


module.exports = router

////////////MY CODING ALONG FOR MEAT ROUTES FROM EARLIER THIS WEEK/////////////
// //Load Express then get access
// const express = require('express')

// //Load our meats data 
// const meats = require('../models/meats')

// //bring in our packaged route

// const router = express.Router()

// // Setup "root" routes
// // router.get('/', (req, res) => {
// //     res.send('<h1>Hello World!</h1>')
// // })

// // Setup "index" route
// router.get('/', (req, res) => {
//     res.render('meats/Index', {meats: meats})
// })

// // Setup "new" route
// router.get('/new', (req, res) => {
//     res.send('<form>Create meat</form>')
// })

// // // Setup "destroy" route
// // router.delete('/:index', (req, res) => {
// //     res.send('Deleting a meat at index! (in DB)')
// // })

// // // Setup "update" route
// // router.put('/:index', (req, res) => {
// //     res.send('Updating a meat at index! (in DB)')
// // })

// // Setup "create" route
// router.post('/', (req, res) => {
//     res.send('Creating a new meat! (in DB)')
// })


// // Setup "edit" route
// router.get('/:index/edit', (req, res) => {
//     res.send('<form>Edit meat</form>')
// })



// // Setup "show" route  
// //note, ":index" is a place holder for anything client enters into browser
// // this is also true for ".index" on 35

// router.get('/:index', (req, res) => {
//     res.send(meats[req.params.index])
// })

// module.exports = router