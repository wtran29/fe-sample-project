const mongoose = require('mongoose');

// Schema must be defined for associations to work
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({

	shopperId: {
		type: Number,
		trim: true
		
	}

},{ timestamps: true });

mongoose.model('User', UserSchema);