const axios = require('axios');
const def = require('./default');

const url = "produto"; //contexto de negocio

const produtoRequest = {

    getProduto: () => axios({
        ...def,
        method: 'get',
        url: `${url}/`
    }),

    getProdutoId: (id) => axios({
        ...def,
        method: 'get',
        url: `${url}/${id}`
    }),

    getProdutoCategory: (id) => axios({
        ...def,
        method: 'get',
        url: `${url}/categoria/${id}`
    }),

    createProduto: () => axios({
        ...def,
        method: 'post',
        data: {
            ...produto
        },
        url: `${url}/`
    }),

    updateProduto: (id) => axios({
        ...def,
        method: 'update',
        url: `${url}/${id}`
    }),

    deleteProduto: (id) => axios({
        ...def,
        method: 'delete',
        url: `${url}/${id}`
    })
};

module.exports = produtoRequest;