'use strict';

const express = require('express');
const postController = require('../Controllers/postController');
//const Post = require('../models/postModel');


const router = express.Router();

/* router.get('/', (req, res, next) =>{
    res.send('retriving posts');
}); */
/* 
router.post('/', (req, res, next) =>{
    let newPost =new Post({
      title:'hello33333',
      subtitle:'hii3333',
      tags:'Food blog',
      content:'wooh oooooooooo nnnnnnyeeeee3333'
    });
    newPost.save(function(err, post) {
        if(err){
            res.json(err);
        }
        else{
            res.json({msg:'success to add'});  
        }
    });  
});

router.get('/', (req, res, next) =>{
    Post.find(function(err, post) {
        if(err){
            res.json(err);
        }
        else{
            res.json(post);  
        }
    });  
});
router.delete('/:id', (req, res, next) =>{
    Post.remove({_id: req.params.id },function(err, post) {
        if(err){
            res.json(err);
        }
        else{
            res.json(post);  
        }
    });  
});
 */
router
  .route('/')
  .get(postController.getAllBlogPosts)
  .post(postController.createPost);

router
  .route('/:id')
  .get(postController.getPost)
  .patch(postController.updatePost)
  .delete(postController.deletePost);
 
module.exports = router;
