//const path = require('path')

const areadoclienteControllers = {
    index: (req, res) => {
   res.render('areadoclientelogin')
   },

    viewForm: (req, res) =>{
        return res.render('areadoclientelogin')
    },
    
    salvarForm: (req, res) =>{
        
        console.log(req.body)
        res.redirect('/')    
    },
    
    
}
module.exports = areadoclienteControllers