const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const blogScheme = new Scheme(
	{
		title: {
			type: String,
			required: true,
		},
		snippet: {
			type: String,
			required: true,
		},
		body: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const Blog = mongoose.model('Blogs', blogScheme);

module.exports = Blog;
