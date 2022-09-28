//Load Express then get access
// const application  = require('express')
const express = require('express')

//bringing our packaged route

const router = express.Router()

//Load our fruits data 
// const fruits = require('../models/fruits')
const Fruit = require('../models/Fruit')

    //to make post request with data, use create method
    //create takes 2 args: 1)data to send and 2) callback function 



//I.D.U.C.E.S
//index, delete, update, create, edit, show

// Setup "root" routes
// router.get('/', (req, res) => {
//     res.send('<h1>Hello World!</h1>')
// })




// Setup "index" route, shows everything
router.get('/', (req, res) => {
    // res.send(fruits)
    //now that we have view engine, use res.render instead of send
    

    Fruit.find({}, (err, foundFruit) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('fruits/Index', { fruits: foundFruit})
        }
    })
    // res.render('fruits/Index', { fruits: fruits })
})


// Setup "new" route
router.get('/new', (req, res) => {
    // res.send('<form>Create fruit</form>')
    res.render('fruits/New')
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
    // fruits.push(req.body)
    //req.body must be defined in a router method
    Fruit.create(req.body, (err, createdFruit) => {
        res.json(createdFruit)
    })
    // res.redirect('/fruits')
})

//?name=value&name=value&name=value
// Setup "show" route  
router.get('/:id', (req, res) => {
    // res.send(fruits[req.params.index])

    //findById accepts two arguments:
    //  1st: id of document in database
    //  2nd: callback
    Fruit.findById(req.params.id, (err, foundFruit) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('fruits/Show', {fruit: foundFruit})
        }
    })
    // res.render('fruits/Show', { fruit: fruits[req.params.index] })// this becomes "ths.props" in Show component of server file
})

// Setup "edit" route
router.get('/:id/edit', (req, res) => {
    res.send('<form>Edit fruit</form>')
})

// Setup "update" route
router.put('/:id', (req, res) => {
    res.send('Updating a fruit at index! (in DB)')
})

// Setup "delete" route
router.delete('/:id', (req, res) => {
    // res.send('Deleting a fruit at index! (in DB)')
    Fruit.findByIdAndDelete(req.params.id, (err, deleteFruit) => {
        if (err) {
          res.status(400).json(err)
        } else {
            res.status(200).redirect('/fruits')
      }
    })
})

module.exports = router