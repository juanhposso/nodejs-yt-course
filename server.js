const http = require('http');

const server = http.createServer((req, res) => {
	// set header content type
	//res.setHeader('content-type', 'text/plain');
	res.write('hello juan');
	res.end();
});

server.listen(3000, () => {
	console.log('> Server is listening on port 3000');
});
