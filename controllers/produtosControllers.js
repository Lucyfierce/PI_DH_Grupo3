const path = require('path')
const produtos = require('../public/js/produtos')

const produtosControllers = {
    index: (req, res) => {
        let categoria = req.query.categoria
        console.log(categoria)
        console.log(produtos)

        if (!categoria)
        res.render('produtos', {produtos: produtos})
        
        else{
            let resultado = produtos.filter(p => p.category == categoria) 
        res.render('produtos',{produtos : resultado})

        }

    }
}
module.exports = produtosControllers
