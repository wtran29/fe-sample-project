const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const User = mongoose.model('User');

module.exports = {
	index: (req,res)=>{
		console.log('in controllers/products.controller');
		console.log('retrieving all products')
		Product.find({})
		.exec((err,collection)=>{
			if(err){
				console.log('error retrieving all products: ',err);
				res.json(err);
			}
			else{
				console.log('successfully retrieved products');
				res.json(collection);
			}
		})
	},
	create: (req,res)=>{
		console.log('in controllers/products.controller');
		console.log('declaring new product');
		let product = new Product(req.body);
		
		
		console.log('creating new product: ', product);
		product.save((err, product)=>{
			if(err){
				console.log('error saving to models.product: ', err);
				res.json(err);
			}
			else{
				console.log('successfully created product');
				res.json(true);
			}
		})
	},
	
	// remove by specific id related to product
	destroy: (req,res)=>{
		console.log('in controllers/products.controller');
		console.log('deleting product');
		Product.remove(req.body, (err,deleteProduct)=>{
			if(err){
				console.log('error deleting: ', err);
				res.json(err);
			}
			else{
				console.log('successfully deleted product');
				res.json(true);
			}
		})
	},

	update: (req,res)=>{
		console.log('in controllers/products.controller');
		console.log('updating product');
		Product.findByIdAndUpdate(req.body._id, req.body, (err)=>{
			if(err){
				console.log('error updating product');
				res.json(err);
			}
			else{
				console.log('successfully updated product');
				res.json(true);
			}
		})
	},
	destroy: (req,res)=>{
		console.log('in controllers/products.controller');
		console.log('deleting product');
		Product.remove(req.body, (err,deleteProduct)=>{
			if(err){
				console.log('error deleting: ', err);
				res.json(err);
			}
			else{
				console.log('successfully deleted product');
				res.json(true);
			}
		})
	},
}