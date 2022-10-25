const fs = require('fs');
const path = require('path');
const {validationResult} = require('express-validator')

const usuariosFilePath = path.join(__dirname, '../data/cadastroClientes.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));

const areadoclienteControllers = {
    index: (req, res) => {
   res.render('areadoclientelogin')
   },

    viewForm: (req, res) =>{
        return res.render('areadoclientelogin')
    },
    
    salvarForm: (req, res) =>{
        let errors = validationResult(req)
        if (!errors.isEmpty()){
            return res.render('areadoclientelogin', {erros: errors.errors})
        }

        let usuario = {
            id: usuarios[usuarios.length -1].id + 1,
            usuarios: usuarios,
            // req.body,
        }
        usuarios.push(novoUsuario)
        fs.writeFileSync(usuariosFilePath, JSON.stringify(usuarios, null, ' '))
        res.redirect('/')
    },
}
        // console.log('login', req.body)
        // res.redirect('/')    

    
    

module.exports = areadoclienteControllers