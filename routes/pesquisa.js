const express = require('express');
const router = express.Router();
const pesquisaControllers = require('../controllers/pesquisaControllers');

router.get('/', pesquisaControllers.index);
router.post('/', pesquisaControllers.pesquisar);



module.exports = router;