const express = require('express');
const app = express();

app.listen(3000);

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (req, res) => {
	res.sendFile(__dirname + '/views/about.html');
});
