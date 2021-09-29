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
	{ timestamps: true, trim: true }
);

const Blog = mongoose.model('Blog', blogScheme);

module.exports = Blog;
