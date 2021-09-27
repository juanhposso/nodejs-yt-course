const express = require('express');
const app = express();

// * register view engine
app.set('view engine', 'ejs');

// * lister for a request
app.listen(3000);

// * Request main index
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/index.html');
});

// * request /about
app.get('/about', (req, res) => {
	res.sendFile(__dirname + '/views/about.html');
});

// * Redirects
app.get('/about-us', (req, res) => {
	res.redirect('/about');
});

// * 404
app.use((req, res) => {
	res.status(404).sendFile(__dirname + '/views/error404.html');
});
