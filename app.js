const express = require('express');
const app = express();

// * register view engine
app.set('view engine', 'ejs');

// * lister for a request
app.listen(3000);

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
