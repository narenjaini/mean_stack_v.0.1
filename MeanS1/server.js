var express = require("express");
var app = express();
var mongojs = require('mongojs');
var db = mongojs('NewContactList', ['NewContactList']);

app.use(express.static(__dirname + '/public'));

app.get('/personalContactList', function(req, res){
	console.log('I get a request..');

	db.NewContactList.find(function(err, docs){
		console.log(docs);
		res.json(docs);
	});	

	
});

app.listen(9005);
console.log("app is listening to port 9005 ....");

