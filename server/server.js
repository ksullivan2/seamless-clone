var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var database = require('../database.js')

//app.use(bodyParser());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './../')));

app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});

app.get('/', function(req,res) {
  res.send('test');
  //res.sendFile('/index.html');
});

app.get('/:name', function (req, res) {
  var restaurant = database.findRestaurantByName(req.param('name'));
  res.json(restaurant);
})

app.post('/createRestaurant', function (req, res) {
  res.send(req.body);
  console.log(req.body);
})
