module.exports = ( req, res, next ) => {
  console.log(1111111111, req.session)
  if (req.session.userid) {
    console.log('yup')
    next();
  }
  else{
    console.log('nooo')
    res.redirect("http://localhost:3000/")
  }
};
