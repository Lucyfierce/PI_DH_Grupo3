const express = require('express')
const router = express.Router()


const areadoclienteControllers = require('../controllers/areadoclienteControllers')
router.get('/', areadoclienteControllers.index)

router.get('/criar', areadoclienteControllers.viewForm)
router.post('/criar', areadoclienteControllers.salvarForm)

// router.get('/criar', areadoclienteControllers.criar)


module.exports = router;



