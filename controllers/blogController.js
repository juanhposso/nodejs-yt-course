const Blog = require('../model/blog');

// ! blog_index, blog_details, blog_create_get, blog_create_post, blog_delete

const blog_index = (req, res) => {
	Blog.find()
		.sort({ createdAt: -1 }) // sort it out from new to old
		.then((resultado) => {
			res.render('index', { title: 'All blogs', blogs: resultado });
		})
		.catch(console.error);
};

const blog_details = (req, res) => {
	const id = req.params.id;
	Blog.findById(id)
		.then((resultado) => {
			res.render('details', { blog: resultado, title: 'Blog detail' });
		})
		.catch(console.error);
};

const blog_create_get = (req, res) => {
	res.render('create', { title: 'create a new blog' });
};

const blog_create_post = (req, res) => {
	const blog = new Blog(req.body);

	blog
		.save()
		.then((resultado) => {
			res.redirect('/');
		})
		.catch(console.error);
};

const blog_delete = (req, res) => {
	const id = req.params.id;

	Blog.findByIdAndDelete(id)
		.then((result) => {
			res.json({ redirect: '/blogs' });
		})
		.catch((err) => console.error(err));
};

module.exports = {
	blog_index,
	blog_details,
	blog_create_get,
	blog_create_post,
	blog_delete,
};
