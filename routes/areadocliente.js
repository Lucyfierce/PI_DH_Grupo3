const express = require('express')
const router = express.Router()

const areadoclienteControllers = require('../controllers/areadoclienteControllers')
router.get('/', areadoclienteControllers.index)

router.get('/areadoclientelogin/criar', areadoclienteControllers.viewForm)
router.post('/areadoclientelogin/criar', areadoclienteControllers.salvarForm)


module.exports = router

