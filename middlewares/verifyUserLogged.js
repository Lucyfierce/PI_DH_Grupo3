function admin(req, res, next) {
  let user = req.session.userLogged;
  if (user) {
    next();
  } else {
    res.redirect("/areadocliente?unauthorized=true");

  }
}

module.exports = admin;
