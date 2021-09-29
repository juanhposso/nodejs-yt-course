const express = require('express');
const Blog = require('../model/blog');

const router = express.Router();

// * main file come from index
router.get('/', (req, res) => {
	Blog.find()
		.sort({ createdAt: -1 }) // sort it out from new to old
		.then((resultado) => {
			res.render('index', { title: 'All blogs', blogs: resultado });
		})
		.catch(console.error);
});

// * Post method from FORM
router.post('/', (req, res) => {
	const blog = new Blog(req.body);

	blog
		.save()
		.then((resultado) => {
			res.redirect('/');
		})
		.catch(console.error);
});

// * createa a new blog post
router.get('/create', (req, res) => {
	res.render('create', { title: 'create a new blog' });
});

// * request single blog
router.get('/:id', (req, res) => {
	const id = req.params.id;
	Blog.findById(id)
		.then((resultado) => {
			res.render('details', { blog: resultado, title: 'Blog detail' });
		})
		.catch(console.error);
});

// * request comes from front-end as a delete method by using fetch we handle it and send back a json answer
// * json answer was handle it  front-end
router.delete('/:id', (req, res) => {
	const id = req.params.id;

	Blog.findByIdAndDelete(id)
		.then((result) => {
			res.json({ redirect: '/blogs' });
		})
		.catch((err) => console.error(err));
});

module.exports = router;
