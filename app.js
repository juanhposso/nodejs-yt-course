const express = require('express');

// * moongose to handle and connect our data-Base
const moongose = require('mongoose');

// * routing Blogs
const blogRouter = require('./routes/blogsRoutes');

// * express APP
const app = express();

// * connect to mongoDB
const dbMongito =
	'mongodb+srv://juanito:test1234@cursonodetest.bmb0w.mongodb.net/cursoNodeTest?retryWrites=true&w=majority';

moongose
	.connect(dbMongito)
	.then((resolve) => {
		// * lister for a request
		console.log(' > Conected to DB');
		app.listen(3000);
	})
	.catch((error) => console.error(error));

// * register view engine
app.set('view engine', 'ejs');

// * middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

/* // * add and save into the DB
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

// * get a JSON format result of DB
app.get('/all-blog', (req, res) => {
	Blog.find()
		.then((resultado) => {
			res.send(resultado);
		})
		.catch(console.error);
}); */

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

// * routes BLOGS endpoints
app.use('/blogs', blogRouter);

// * 404
app.use((req, res) => {
	res.status(404).render('404', { title: '404' });
});
