const mongoose = require('mongoose');
const User = mongoose.model('User');
const express = require('express-session');


module.exports = {
	login: (req, res)=>{
		console.log('in controllers/users.controller');
		console.log('finding shopperId');
		User.findOne({ shopperId: req.body.shopperId })
		.exec((err,login)=>{
			if(err){
				console.log('shopperId exists', err);
				res.json(true);
			}
			else{
				//create shopperId
				let newUser = new User(req.body);
				newUser.shopperId = Math.floor(Math.random() * 99999) + 1;
				newUser.save((err)=>{
					if(err){
						console.log('error saving to models.user: ', err);
					}
					if(Object.keys(user.shopperId).includes(user.shopperId)){
						user.shopperId = Math.floor(Math.random() * 99999) + 1;
					}
					else{
						console.log('creating session id');
						req.session.user_id = newUser._id;
						console.log('successfully registered user', newUser._id);
						console.log('user: ', newUser);
						res.json(newUser);	
					}
				})
			}
			
		})
	},
	session: (req,res)=>{
		console.log('in controllers/users.controller');
		console.log('finding sessionID');
		if(req.session.user_id == undefined){

			// req.session.user_id = user._id;
			res.json({
				errors: {
					session: {
						message: 'Could not get session'}}
			});
		}
		else{
			User.findById({_id: req.session.user_id}, (err,currentUser)=>{
				if(err){
					console.log('error finding sessionID: ', err);
					res.json(false);
				}
				else {
					console.log('found sessionID: ',currentUser);
					res.json(currentUser);
				}
			})
		}
	}
}