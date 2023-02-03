const axios = require('axios');
const def = require('./default');

const url = "produto"; //contexto de negocio

const produtoRequest = {

    getProduto: () => axios({
        ...def,
        method: 'get',
        url: `${url}/`
    }),

    getProduto: (id) => axios({
        ...def,
        method: 'get',
        url: `${url}/${id}`
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