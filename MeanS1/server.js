var express = require("express");
var app = express();
var mongojs = require('mongojs');
var db = mongojs('NewContactList', ['NewContactList']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/personalContactList', function(req, res){
	console.log('I get a request..');

	db.NewContactList.find(function(err, docs){
		console.log(docs);
		res.json(docs);
	});	
	
});


app.post('/personalContactList', function(req, res){
	console.log(req.body);
	db.NewContactList.insert(req.body, function(err, doc){
		res.json(doc);
	});
});

app.listen(9005);
console.log("app is listening to port 9005 ....");

