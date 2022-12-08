const express = require('express')
const Controller = require('../controller/controller')
const router = express.Router()

router.get('/add', Controller.addCategory)
router.post('/add', Controller.postAddCategory)

router.get('/:id/delete', Controller.destroy)

module.exports = router