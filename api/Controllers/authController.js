var mongoose = require('mongoose');
const User = require('../models/userModel');

exports.signup = catchAsync(async (req, res, next) => {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm
    });
    newUser.save(function(err, post) {
      if(err)
          res.send(err);
      res.json(post);  
  });  
  });
  
exports.login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;
  
    // 1) Check if email and password exist
    if (!email || !password) {
      return next(new AppError('Please provide email and password!', 400));
    }
    // 2) Check if user exists && password is correct
    const user = await User.findOne({ email }, function(err, post) {
      if (err)
      res.send(err);
      res.send("LoggedIn");
  });
 
  });

function catchAsync(fn){
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
}


  