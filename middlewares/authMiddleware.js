module.exports.isLogged = (req, res, next) => {
  if(!req.isAuthenticated()){
      req.flash('error','Ops! você não tem permisssão para acessar');
      res.redirect('/users/login');
      return;
  }
  next();
}