// var createError = require('http-errors');
const express = require('express')
const app = express()
const fs = require('fs');
const path = require('path')

const routerIndex = require('./routes/index')
const routerSobrenos = require('./routes/sobrenos')
const routerCarrinho = require('./routes/carrinho')
const routerCadastro = require('./routes/cadastro')
const routerAreadocliente = require('./routes/areadocliente')
const routerProdutos = require('./routes/produtos')
const routerPesquisa = require('./routes/pesquisa')


app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public'))) 
app.set('view engine', 'ejs')

app.use('/', routerIndex)
app.use('/sobrenos', routerSobrenos)
app.use('/carrinho', routerCarrinho )
app.use('/cadastro', routerCadastro)
app.use('/areadoclientelogin', routerAreadocliente)
//app.use('/areadoclientelogin/criar', routerAreadocliente)
app.use('/produtos', routerProdutos)
app.use('/pesquisa', routerPesquisa);



// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     next(createError(404));
//   });

//   // error handler
// app.use(function(err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
  
//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
//   });
  
//   module.exports = app;
  

app.listen(3000, ()=> {console.log('Na porta 3000')})