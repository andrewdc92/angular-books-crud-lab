var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
//this allows app to accept request payloads
app.use(bodyParser.json());

var controllers = require('./controllers');

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/templates/:name', function templates(req, res) {
  var name = req.params.name;
  res.sendFile(__dirname + '/views/template/' + name + '.html');
});


app.get('/api', controllers.api.index);

app.get('/api/books', controllers.books.index);
