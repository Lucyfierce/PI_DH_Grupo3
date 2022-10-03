const path = require('path')

const guitarraControllers = {
    index: (req, res) => {
        res.render('guitarra')
    }
}
module.exports = guitarraControllers