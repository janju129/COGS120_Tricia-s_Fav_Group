
exports.viewPriority = function(req, res) {
	console.log("Second Screen App Page");
	res.render("priority");
}

exports.viewAbout = function(req, res) {
	console.log("About App Page");
	res.render("about");
}

exports.viewMenu = function(req, res) {
	console.log("Second Page");
	res.render("secondpage");
}

exports.viewLogin = function(req, res) {
	console.log("Login");
	res.render("loginpage");
}
var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);
	res.render('index', data);
};