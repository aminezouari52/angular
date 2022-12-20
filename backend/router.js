const express = require('express')
const controller = require('./controller')

const router = express.Router()

router.get('/', controller.get)
router.post('/add', controller.add)
router.post('/update/:id', controller.update)
router.delete('/delete/:id', controller.delete)

module.exports = router
