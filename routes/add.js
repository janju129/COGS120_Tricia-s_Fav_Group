var data = require("../data.json");

exports.addFriend = function(req, res) {  
	var newFriend = { 
		"name": req.query.name, 
		"description": req.query.description, 
		};
	data.friends.push(newFriend);
	console.log(data.friends);
	res.render('index', data);
}