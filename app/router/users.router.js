const express = require('express')
const router = express.Router()
const usersController = require('../controller/users.controller')


router.put('/:params', usersController.put)
router.delete('/:_id', usersController.del)
router.get('/', usersController.index)
router.post('/', usersController.post)


module.exports = router