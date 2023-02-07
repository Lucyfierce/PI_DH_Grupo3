const path = require("path");

const indexControllers = {
  index: (req, res) => {
    let message = req.query.sucesso;

    res.render("index", { message: message ?? false });
  },
};

module.exports = indexControllers;
