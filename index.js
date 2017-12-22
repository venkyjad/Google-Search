var express = require('express');
var app = express();
var url = 'mongodb://vjtest:vj123@ds157653.mlab.com:57653/vokal';

var mangoose = require('mongoose');


	
var port = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/public'));



mangoose.connect(url);


app.listen(port);