
exports.viewPriority = function(req, res) {
	console.log("Second App Page");
	res.render("priority");
}

exports.viewAbout = function(req, res) {
	console.log("About App Page");
	res.render("about");
}