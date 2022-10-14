const path = require('path');

let pesquisaControllers = {
    index: (req, res) => {
        res.render('pesquisa')
    },
    pesquisar: (req,res)=>{
        console.log('oii')
    }
}






module.exports = pesquisaControllers;