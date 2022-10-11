const path = require('path')

const cadastroControllers = {
    index: (req, res) => {
        res.render('cadastro')
    },
    
    viewForm: (req, res) =>{
        return res.render('cadastro')
    },
    
    salvarForm: (req, res) =>{
        console.log(req.body)
        res.redirect('/confCadastro')    
    },
}
module.exports = cadastroControllers