const fs = require("fs");
const path = require("path");

const db = require("../database/models");
const Usuario = db.Usuario;

const usuariosFilePath = path.join(__dirname, "../data/cadastroClientes.json");
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, "utf-8"));

const areadoclienteControllers = {
  index: (req, res) => {
    res.render("areadoclientelogin");
  },

  viewForm: (req, res) => {
    return res.render("cadastro");
  },
  login: (req, res) => {
    let usuario = req.body.email;
    let senha = req.body.password;
    let usuarioEncontrado = usuarios.find((usr) => usr.email == usuario);
    if (usuarioEncontrado) {
      if (usuarioEncontrado.password === senha) {
        req.session.userLogged = usuario;
        res.redirect("/");
      } else {
        let errors = [];
        errors.push("Usuario nao encontrado");
        res.render("index", { errors, usuarioEncontrado });
      }
    }
  },

  salvarForm: (req, res) => {
    // let errors = validationResult(req)
    // if (!errors.isEmpty()){
    //     return res.render('areadoclientelogin', {errors: errors.errors})
    // }
    console.log(req.body);

    let novoUsuario = {
      nome: req.body.nomeCadastro,
      email: req.body.emailCadastro,
      password: req.body.passwordCadastro,
      newsletter: req.body.newsletter == 'on' ? 1 : 0, //se estiver check salva 1 senão 0.
    };
    //usuarios.push(novoUsuario);
    //fs.writeFileSync(usuariosFilePath, JSON.stringify(usuarios, null, ' '))
    Usuario.create(novoUsuario)
      .catch((erro) => console.error(erro)) //erro conexao com o banco console.
      .then(res.redirect("/"));
  },
};

module.exports = areadoclienteControllers;
