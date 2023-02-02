const path = require('path')
const fs = require('fs');
const produtoRequest = require('../requests/produtoRequest')

const produtoJson = path.join(__dirname, '../products.json');
const produtos = JSON.parse(fs.readFileSync(produtoJson))

const produtosControllers = {
    index: (req, res) => {
        produtoRequest.getProduto()
            .then((protudosRetornados) => {

                let produto = protudosRetornados.data;
                let categoria = req.query.categoria

                //

                if (!categoria)
                    res.render('produtos', { produtos: produtos })

                else {
                    let resultado = produtos.filter(p => p.categoria == categoria)
                    res.render('produtos', produto, { produtos: resultado })

                }
            })
            .catch((err) => {
                //console.log(err)
                res.render('error', { msg: "Produto não encontrado", err: err });
            })
    },

    //Edit
    edit: (req, res) => {
        let id = req.params.id
        let productToEdit = products.find(product => product.id == id)
        produtoRequest.getProduto(id)
            .then((protudosRetornados) => {
                let produto = protudosRetornados.data
                res.render('pageProductEdit', produto, { productToEdit })
            })
            .catch((err) => {
                // console.log(error)
                res.render('error', { msg: "Produto não encontrado", err: err });
            })
    },
    //Update POST
    update: (req, res) => {
        let id = req.params.id;
        let productToEdit = products.find(product => product.id == id)
        let image;

        produtoRequest.updateProduto(id)
            .then((protudosRetornados) => {

                let produto = protudosRetornados.data
                res.render('pageProductEdit', produto, { productToEdit })
            })
        if (req.files[0] != undefined) {
            image = req.files[0].filename
        } else {
            image = productToEdit.image
        }
        productToEdit = {
            id: productToEdit.id,
            ...req.body,
            image: image,
        }

    },

    //Create
    create: (req, res) => {
        const msgSucesso = "Produto criado com sucesso!"
        const msgFalha = "Produto não criado. Tente novamente."
        let user = {
            nome: req.body.name,
            email: req.body.email,
            password: req.body.password,
            newsLetter: req.body.newsLetter
        }
        let produto = user
        produtoRequest.createProduto(produto)

            .then((produtoExiste) => {
                if (produtoExiste != undefined) {
                    res.render('produtos', json({ msg: msgSucesso }))
                }
            })
            .catch(err => {
                res.render('error', json({ msg: msgFalha, err: err }));
            })
    },

    //DELETE
    destroy: (req, res) => {
        let id = req.params.id

        produtoRequest.deleteProduto(id)

            .then((protudoRetornado) => {

                Produto.destroy({ where: { id: id } })
                let produto = protudoRetornado.data

                res.render(produto, json({ msg: 'Produto excluído com sucesso!' }))
            })
            .catch((err) => {
                // console.log(error)
                res.render('error', { msg: "Produto não encontrado!", err: err });
            })
    }

}
module.exports = produtosControllers;
