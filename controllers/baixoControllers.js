const path = require('path')
const produtos = require('../public/js/produtos')

const baixoControllers = {
    index: (req, res) => {
        let categoria = req.query.categoria
        console.log(categoria)
        console.log(produtos)

        if (!categoria)
        res.render('baixo', {produtos: produtos})
        
        else{
            let resultado = produtos.filter(p => p.category == categoria) 
        res.render('baixo',{produtos : resultado})

        }

    }
}
module.exports = baixoControllers