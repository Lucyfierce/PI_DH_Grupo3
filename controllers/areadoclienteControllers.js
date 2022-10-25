const fs = require('fs');
const path = require('path');


const usuariosFilePath = path.join(__dirname, '../data/cadastroClientes.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));

const areadoclienteControllers = {
    index: (req, res) => {
   res.render('areadoclientelogin')
   },

    viewForm: (req, res) =>{
        return res.render('cadastro')
    },
    
    salvarForm: (req, res) =>{
        // let errors = validationResult(req)
        // if (!errors.isEmpty()){
        //     return res.render('areadoclientelogin', {errors: errors.errors})
        // }
        console.log(req.body)

        let novoUsuario = {
            id: usuarios[usuarios.length -1].id + 1,
            nome: req.body.nomeCadastro,
            email: req.body.emailCadastro,
            password: req.body.passwordCadastro,

        }
        usuarios.push(novoUsuario)
        fs.writeFileSync(usuariosFilePath, JSON.stringify(usuarios, null, ' '))
        res.redirect('/')
    },

    
}
    



module.exports = areadoclienteControllers