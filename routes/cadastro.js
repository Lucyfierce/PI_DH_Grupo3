const express = require('express')
const router = express.Router()

const cadastroControllers = require('../controllers/cadastroControllers')
router.get('/', cadastroControllers.index)

router.get('/criar', cadastroControllers.viewForm)
router.post('/criar', cadastroControllers.salvarForm)

module.exports = router