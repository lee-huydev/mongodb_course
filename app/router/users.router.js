const express = require('express')
const router = express.Router()
const usersController = require('../controller/users.controller')


router.patch('/:params', usersController.put)
router.delete('/:_id', usersController.del)
router.get('/', usersController.index)
router.post('/', usersController.post)


module.exports = router