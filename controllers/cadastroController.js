const usuarioRequest = require('../requests/usuarioRequest')

const cadastroController = {
  index: async (req, res) => {
    let novoUsuario = {
      nome: req.body.nome,
      email: req.body.email,
      password: req.body.password,
      newsletter: req.body.newsletter == 'on' ? 1 : 0
    }
    console.log(novoUsuario)
    usuarioRequest.create(novoUsuario)
     .then(usuario =>{
      res.redirect('/')
     })
     .catch(error =>{
      console.log('erro de cadastro').json(error [error])
     })
  },
}

module.exports = cadastroController
