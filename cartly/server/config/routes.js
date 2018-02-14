const users = require('../controllers/users.controller');
const products = require('../controllers/products.controller');
const path = require('path');

module.exports=(app)=>{
	// users
	app.post('/users/login', users.login);
	app.get('/users/current', users.session);
	

	// products
	// app.get('/products/index', products.index);
	// app.post('/products/create', products.create);
	

	app.all('*', (req,res,next)=>{
		res.sendFile(path.resolve('./public/dist/index.html'))
	});
}