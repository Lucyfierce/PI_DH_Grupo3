const express = require('express')
const router = express.Router()
const {body, check} = require('express-validator')

const cadastroController = require('../controllers/cadastroController')

router.get('/', cadastroController.index)
router.post('/usuario', cadastroController.index)




module.exports = router;



