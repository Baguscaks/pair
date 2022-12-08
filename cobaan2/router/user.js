const express = require('express')
const Controller = require('../controller/controller')
const router = express.Router()

router.get('/', Controller.homePageUser)
router.get('/:id/detail', Controller.userDetail)

module.exports = router