const fs = require("fs");
const path = require("path");

const db = require("../database/models");
const Usuario = db.Usuario;

const clienteRequest = require("../requests/clienteRequest");

const usuariosFilePath = path.join(__dirname, "../data/cadastroClientes.json");
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, "utf-8"));

const areadoclienteControllers = {
  index: (req, res) => {
    res.render("areadoclientelogin", { errors: [] });
  },

  viewForm: (req, res) => {
    return res.render("cadastro");
  },
  login: (req, res) => {
    let usuario = {
      email: req.body.email,
      password: req.body.password,
    };

    clienteRequest
      .getCliente(usuario)
      .then((result) => {
        let usuarioEncontrado = result.data;
        if (usuarioEncontrado) {
          req.session.userLogged = usuario;
          res.redirect("/carrinho");
        }

        // let usuarioEncontrado = result.data;
        //  if (usuarioEncontrado) {
        //    if (usuarioEncontrado.password === usuario.password) {
        //      req.session.userLogged = usuario;
        //      res.redirect("/carrinho");
        //    } else {
        //      let errors = [];
        //      errors.push("Usuario nao encontrado");
        //      res.render("index", { errors, usuarioEncontrado });
        //    }
        //  }
      })
      .catch((err) => {
        let errors = [];
        errors.push("unauthorized");
        errors.push("unauthorized");
        res.render("areadoclientelogin", { errors: ["errors"] });

      });
  },

  salvarForm: (req, res) => {
    // let errors = validationResult(req)
    // if (!errors.isEmpty()){
    //     return res.render('areadoclientelogin', {errors: errors.errors})
    // }
    console.log(req.body);

    let novoUsuario = {
      name: req.body.nomeCadastro,
      email: req.body.emailCadastro,
      password: req.body.passwordCadastro,
      newsletter: req.body.newsletter == "on" ? 1 : 0, //se estiver check salva 1 senão 0.
    };

    clienteRequest
      .createCliente(novoUsuario)
      .then((result) => {
        console.log("sucesso");
        res.redirect("/?sucesso=true");
      })
      .catch((err) => {
        console.log(err);
        res.redirect("/?sucesso=false");
      });

    //usuarios.push(novoUsuario);
    //fs.writeFileSync(usuariosFilePath, JSON.stringify(usuarios, null, ' '))
    // Usuario.create(novoUsuario)
    //   .catch((erro) => console.error(erro)) //erro conexao com o banco console.
    //   .then(res.redirect("/"));
  },
};

module.exports = areadoclienteControllers;
