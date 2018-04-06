module.exports = ( req, res, next ) => {
  console.log(1111111111, req.session)
  if (req.session.userId) return next();
  res.redirect("http://localhost:3001/")
};
