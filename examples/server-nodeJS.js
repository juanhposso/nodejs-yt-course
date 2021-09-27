const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	// set header content type
	res.setHeader('content-type', 'text/html');

	let path = '/views/';

	switch (req.url) {
		case '/':
			path += 'index.html';
			res.statusCode = 200;
			break;
		case '/about':
			path += 'about.html';
			res.statusCode = 200;

			break;
		case '/about-me':
			res.statusCode = 301;
			res.setHeader('Location', '/about');
			res.end();

			break;
		default:
			path += 'error404.html';
			res.statusCode = 404;
			break;
	}

	// send HTML file
	fs.readFile(__dirname + path, (err, data) => {
		if (!err) {
			res.end(data);
		}
	});
});

server.listen(3000, () => {
	console.log('> Server is listening on port 3000');
});
