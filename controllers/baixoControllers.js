const path = require('path')

const baixoControllers = {
    index: (req, res) => {
        

        res.render('baixo')
    }
}
module.exports = baixoControllers