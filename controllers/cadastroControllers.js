const path = require('path')

const cadastroControllers = {
    index: (req, res) => {
        res.render('cadastro')
    }
}
module.exports = cadastroControllers