'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
  name: {
    type: String,
    required: 'Please tell your name'
  },
  email:{
    type:String,
    required: 'Please provide your email',
    unique: true
  },
  password:{
    type:String,
    required: 'Please enter password'
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      // This only works on CREATE and SAVE!!!
      validator: function(el) {
        return el === this.password;
      },
      message: 'Passwords are not the same!'
    }
  },
});

module.exports = mongoose.model('User', userSchema);