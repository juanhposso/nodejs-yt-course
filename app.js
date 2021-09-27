const express = require('express');

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

/* app.use((req, res, next) => {
	console.log('New request made:');
	console.log('host: ', req.hostname);
	console.log('path: ', req.path);
	console.log('method: ', req.method);
	next();
}); */

app.use(express.static('public'));

// * Request main index
app.get('/', (req, res) => {
	const blogs = [
		{
			title: 'Yoshi finds eggs',
			snippet: 'Lorem ipsum dolor sit amet consectetur',
		},
		{
			title: 'Mario finds stars',
			snippet: 'Lorem ipsum dolor sit amet consectetur',
		},
		{
			title: 'How to defeat bowser',
			snippet: 'Lorem ipsum dolor sit amet consectetur',
		},
	];
	const nombre = 'Juanito';
	res.render('index', { title: 'Home', blogs, name: nombre });
});

// * request /about
app.get('/about', (req, res) => {
	res.render('about', { title: 'about' });
});

// * Redirects
app.get('/about-us', (req, res) => {
	res.redirect('/about');
});

// *
app.get('/blogs/create', (req, res) => {
	res.render('create', { title: 'create a new blog' });
});

// * 404
app.use((req, res) => {
	res.status(404).render('404', { title: '404' });
});
