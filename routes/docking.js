exports.docking = function (req, res) {
	console.log('Request docking');
	console.log(req.query);
	res.send(req.query.echostr);
};