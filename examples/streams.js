const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog2.txt');
const writeStream = fs.createWriteStream('./docs/blog3.txt');

/* readStream.on('data', (chunk) => {
	console.log('---------NEW CHUNK--------');
	console.log(chunk);
	writeStream.write('\n-------New CHUNK------\n');
	writeStream.write(chunk);
}); */

// Piping
readStream.pipe(writeStream);

console.log('iniciar');

console.log(nombre);
let nombre = 'juan';
console.log('termine');
