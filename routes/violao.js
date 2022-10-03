const express = require('express')
const router = express.Router()

const violaoControllers = require('../controllers/violaoControllers')
router.get('/', violaoControllers.index)

module.exports = router