const path = require('path')

const carrinhoControllers = {
    index: (req, res) => {
        res.render('carrinho')
    }
}

module.exports = carrinhoControllers