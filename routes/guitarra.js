const express = require('express')
const router = express.Router()

const guitarraControllers = require('../controllers/guitarraControllers')
router.get('/', guitarraControllers.index)

module.exports = router