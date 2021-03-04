'use strict';
const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true //'Please enter Title'
  },
  subtitle:{
    type:String,
  //required: 'Please enter subtitle',
  },
  tags: {
    type: [{
      type: String,
      enum: ['general info blog','Food blog', 'travelling blog', 'fitness blog']
    }],
    default: ['general info blog']
  },
  content:{
    type:String,
    required:true //'Content can not be empty!'
  },
 /*  user:{
    type:mongoose.Schema.ObjectId,
    ref:'User',
    required:true //'Post must belong to user'
  } */
});

const Pst = module.exports = mongoose.model('Post', postSchema);