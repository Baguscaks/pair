const express = require('express')
const Controller = require('../controller/controller')
const router = express.Router()
const user = require('./user')
const category = require('./category')

// router.get('/', (req, res) => {
//     res.send('Hello World! dari router')
// })

router.get('/', Controller.login)
router.use('/user', user)
router.use('/category', category)

module.exports = router