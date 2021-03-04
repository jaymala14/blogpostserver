'use strict';

var mongoose = require('mongoose');
const Post = require('../models/postModel');
// Post = mongoose.model('Post');

exports.createPost = function(req, res){
   
    var newPost = new Post({
      title:'hello',
      subtitle:'hii',
      tags:'general info blog',
      content:'wooh oooooooooo nnnnnnyeeeee'
    });
    newPost.save(function(err, post) {
        if(err)
            res.send(err);
        res.json(post);  
    });  
};

exports.updatePost = function(req, res) {
    Post.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, post) {
      if (err)
        res.send(err);
      res.json(post);
    });
};

exports.deletePost = function(req, res) {
    console.log(req.params.id);
    Post.deleteOne({
       _id: req.params.id
    }, function(err, post) {
        if (err){
            res.send(err);
        }
        else{
            res.json({ message: 'successfully deleted  post' });
        }
    });
};

exports.getAllBlogPosts = function(req, res) {
    Post.find({}, function(err, posts) {
        if (err)
        res.send(err);
        res.json(posts);
    });
};

exports.getPost = function(req, res) {
    Post.findById(req.params.id, function(err, post) {
        if (err)
        res.send(err);
        res.json(post);
    });
};
exports.getPostsByTag = function(req, res) {
    Post.find({tag:req.params.tag}, function(err, post) {
        if (err)
        res.send(err);
        res.json(post);
    });
};

