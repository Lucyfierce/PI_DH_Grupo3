const path = require('path')

const areadoclienteControllers = {
    index: (req, res) => {
        res.render('areadoclientelogin')
    },
    
    viewForm: (req, res) =>{
        return res.render('areadoclienteLogin')
    },

    salvarForm: (req, res) =>{
        let {email, password} = req.body;

        // console.log(req.body)

        // res.send("") //o que deve aparecer para o cliente apos login?
        res.redirect('/')
    },

    

}
module.exports = areadoclienteControllers