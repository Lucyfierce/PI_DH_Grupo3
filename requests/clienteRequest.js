const axios = require('axios');
const def = require('./default');

const url = "cliente"; 

const clienteRequest = {

    getCliente: () => axios({
        ...def,
        method: 'get',
        url: `${url}/`
    }),

    getCliente: (id) => axios({
        ...def,
        method: 'get',
        url: `${url}/${id}`
    }),

    createCliente: (cliente) => axios({
        ...def,
        method: 'post',
        data: {
            ...cliente
        },
        url: `${url}/`
    }),

    updateCliente: (id) => axios({
        ...def,
        method: 'update',
        url: `${url}/${id}`
    }),

    deleteCliente: (id) => axios({
        ...def,
        method: 'delete',
        url: `${url}/${id}`
    })
};

module.exports = clienteRequest;