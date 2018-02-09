
exports.viewPriority = function(req, res) {
	console.log("Second Screen App Page");
	res.render("priority");
}

exports.viewAbout = function(req, res) {
	console.log("About App Page");
	res.render("about");
}

exports.viewMenu = function(req, res) {
	console.log("Menu Page");
	res.render("menu");
}