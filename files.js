const fs = require('fs');

// Reading files

/* fs.readFile('./docs/hello.txt', (err, data) => {
	if (err) {
		console.error(err);
	}

	console.log(data.toString());
}); */

// writing files

/* fs.writeFile('./docs/hello.txt', 'hola juan', () => {
	console.log('File was written');
}); */

// Directories

if (!fs.existsSync('./assets')) {
	fs.mkdir('./assets', (err) => {
		if (err) {
			console.log('Ops! tuvimos un error', err);
		}
		console.log('Folder created');
	});
} else {
	fs.rmdir('./assets', (err) => {
		if (err) {
			console.log('error removing folder', err);
		}
		console.log('folder deleted');
	});
}

// Deleting files
if (fs.existsSync('./docs/blog.txt')) {
	fs.unlink('./docs/blog.txt', (err) => {
		if (err) {
			console.log(err);
		}
		console.log('file deleted');
	});
}

// Promisifying
const getFile = (fileName) => {
	return new Promise((resolve, reject) => {
		fs.readFile(fileName, (err, data) => {
			if (err) {
				reject(err);
				console.log('desde el error en if');
				return;
			}
			resolve(data);
		});
	});
};

getFile('./docs/hello.txt')
	.then((data) => console.log(data.toString()))
	.catch(console.error);

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
