const express = require('express');
const blogController = require('../controllers/blogController');

const router = express.Router();

// * main file come from index
router.get('/', blogController.blog_index);

// * Post method from FORM
router.post('/', blogController.blog_create_post);

// * createa a new blog post
router.get('/create', blogController.blog_create_get);

// * request single blog
router.get('/:id', blogController.blog_details);

// * request comes from front-end as a delete method by using fetch we handle it and send back a json answer
// * json answer was handle it  front-end
router.delete('/:id', blogController.blog_delete);

module.exports = router;
