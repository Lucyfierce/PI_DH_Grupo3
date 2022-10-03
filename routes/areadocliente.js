const express = require('express')
const router = express.Router()

const areadoclienteControllers = require('../controllers/areadoclienteControllers')
router.get('/', areadoclienteControllers.index)

module.exports = router