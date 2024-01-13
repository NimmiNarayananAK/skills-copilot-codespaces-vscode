// Create web server
var express = require('express');
var router = express.Router();
var db = require('../db');

// Get all comments
router.get('/', function(req, res, next) {
  db('comments').select()
    .then(function (comments) {
      res.json(comments);
    });
});

// Get single comment by id
router.get('/:id', function(req, res, next) {
  db('comments').select()
    .where({id: req.params.id})
    .then(function (comments) {
      res.json(comments);
    });
});

// Get all comments for a post
router.get('/post/:id', function(req, res, next) {
  db('comments').select()
    .where({post_id: req.params.id})
    .then(function (comments) {
      res.json(comments);
    });
});

// Add new comment
router.post('/', function(req, res, next) {
  db('comments').insert(req.body)
    .then(function (commentId) {
      res.json(commentId);
    });
});

// Update comment
router.put('/:id', function(req, res, next) {
  db('comments').update(req.body)
    .where({id: req.params.id})
    .then(function (updatedComment) {
      res.json(updatedComment);
    });
});

// Delete comment
router.delete('/:id', function(req, res, next) {
  db('comments').del()
    .where({id: req.params.id})
    .then(function (deletedComment) {
      res.json(deletedComment);
    });
});

module.exports = router;