const express = require('express')
const router = express.Router()

const carrinhoControllers = require('../controllers/carrinhoControllers')
router.get('/', carrinhoControllers.index)
router.get('/checkout', carrinhoControllers.getCheckoutPage)

module.exports = router