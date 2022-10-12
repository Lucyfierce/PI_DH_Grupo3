const express = require('express')
const router = express.Router()

const produtosControllers = require('../controllers/produtosControllers')
router.get('/', produtosControllers.index)

module.exports = router