const mongoose = require('mongoose');
// Schema must be defined for associations to work
const Schema = mongoose.Schema;

const ProductSchema = new mongoose.Schema({
	id: {
		type: Number,
		trim: true,
		unique: true
	},
	title: {
		type: String,
		trim: true,
		required: [true, 'Title is required'],
		maxlength: [150, 'Max length 150 characters']
	},
	
	price: {
		type: Number,
		trim: true,
		required: [true, 'Price is required'],
		min: 1
	},

	image: {
		type: String,
		trim: true,
		required: [true, 'Image is required']
	}

},{ timestamps: true });

mongoose.model('Product', ProductSchema);