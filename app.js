const express = require('express');
const Blog = require('./model/blog');

// * moongose to handle and connect our data-Base
const moongose = require('mongoose');

// * express APP
const app = express();

// * connect to mongoDB
const dbMongito =
	'mongodb+srv://juanito:test1234@cursonodetest.bmb0w.mongodb.net/cursoNodeTest?retryWrites=true&w=majority';

moongose
	.connect(dbMongito)
	.then((resolve) => {
		// * lister for a request
		console.log('Conected to DB');
		app.listen(3000);
	})
	.catch((error) => console.error(error));

// * register view engine
app.set('view engine', 'ejs');

// * middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// * add and save into the DB
app.get('/add-blog', (req, res) => {
	const blog = new Blog({
		title: 'juancho carrancho',
		snippet: 'tengo 50',
		body: 'jijijijij',
	});

	blog
		.save()
		.then((resolve) => {
			console.log(resolve.title, ' Se guardo correctamente');
			res.redirect('/');
		})
		.catch(console.error);
});

// * shows JSON format what it is on the DB
app.get('/all-blog', (req, res) => {
	Blog.find()
		.then((resultado) => {
			res.send(resultado);
		})
		.catch(console.error);
});

/************************************
 * 			Router app 					*
 * **********************************/

// * Request main index
app.get('/', (req, res) => {
	res.redirect('blogs');
});

// * request /about
app.get('/about', (req, res) => {
	res.render('about', { title: 'about' });
});

// * Redirects
app.get('/about-us', (req, res) => {
	res.redirect('/about');
});

// * createa a new blog post
app.get('/blogs/create', (req, res) => {
	res.render('create', { title: 'create a new blog' });
});

// * main file come from index
app.get('/blogs', (req, res) => {
	Blog.find()
		.sort({ createdAt: -1 }) // sort it out from new to old
		.then((resultado) => {
			res.render('index', { title: 'All blogs', blogs: resultado });
		})
		.catch(console.error);
});

// * Post method from FORM
app.post('/blogs', (req, res) => {
	const blog = new Blog(req.body);

	blog
		.save()
		.then((resultado) => {
			res.redirect('/');
		})
		.catch(console.error);
});

// * request single blog
app.get('/blogs/:id', (req, res) => {
	const id = req.params.id;
	Blog.findById(id)
		.then((resultado) => {
			res.render('details', { blog: resultado, title: 'Blog detail' });
		})
		.catch(console.error);
});

// * request comes from front-end as a delete method by using fetch we handle it and send back a json answer
// * json answer was handle it  front-end
app.delete('/blogs/:id', (req, res) => {
	const id = req.params.id;

	Blog.findByIdAndDelete(id)
		.then((result) => {
			res.json({ redirect: '/blogs' });
		})
		.catch((err) => console.error(err));
});

// * 404
app.use((req, res) => {
	res.status(404).render('404', { title: '404' });
});
