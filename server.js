var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
//this allows app to accept request payloads
app.use(bodyParser.json());

var apiController = require('./controllers/apiController.js');
var booksIndexController = require('./controllers/booksIndexController.js')
var booksAuthorController = require('./controllers/booksAuthorController')

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/templates/:name', function templates(req, res) {
  var name = req.params.name;
  res.sendFile(__dirname + '/views/template/' + name + '.html');
});


app.get('/api', controllers.api.index);

app.get('/api/books', controllers.books.index);


app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
