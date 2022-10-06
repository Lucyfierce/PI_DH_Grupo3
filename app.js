const express = require('express')
const app = express()
const path = require('path')


const routerIndex = require('./routes/index')
const routerSobrenos = require('./routes/sobrenos')
const routerCarrinho = require('./routes/carrinho')
const routerCadastro = require('./routes/cadastro')
const routerAreadocliente = require('./routes/areadocliente')
const routerBaixo = require('./routes/baixo')
const routerGuitarra = require('./routes/guitarra')
const routerViolao = require('./routes/violao')

app.use('/', routerIndex)
app.use('/sobrenos', routerSobrenos)
app.use('/carrinho', routerCarrinho )
app.use('/cadastro', routerCadastro)
app.use('/areadoclientelogin', routerAreadocliente)
app.use('/baixo', routerBaixo)
app.use('/guitarra', routerGuitarra)
app.use('/violao', routerViolao)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public'))) 
app.listen(3000, ()=> {console.log('Na porta 3000')})