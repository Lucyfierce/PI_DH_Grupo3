const express = require('express')
const router = express.Router()

const carrinhoControllers = require('../controllers/carrinhoControllers')
router.get('/', carrinhoControllers.index)

module.exports = router