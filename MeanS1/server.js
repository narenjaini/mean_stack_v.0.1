var express = require("express");
var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(9005);
console.log("app is listening to port 9005 ....")