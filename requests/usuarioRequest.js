const axios = require('axios')
const def = require('./default')

const url = 'usuario'
const usuarioRequest = {
  create: (usuario) => axios({
    ...def,
    method: 'post',
    data: {
      ...usuario
    },
    url: `${url}`
  })
}

module.exports = usuarioRequest
