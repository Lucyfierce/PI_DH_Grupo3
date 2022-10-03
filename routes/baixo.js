const express = require('express')
const router = express.Router()

const baixoControllers = require('../controllers/baixoControllers')
router.get('/', baixoControllers.index)

module.exports = router