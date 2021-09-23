/*****************
 * Global Object *
 * ************ */

console.log(global);

setTimeout(() => {
	console.log('in te time Out');
	clearInterval(init);
}, 4000);

const init = setInterval(() => {
	console.log('Interval');
}, 1000);
