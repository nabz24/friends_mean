var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require('./server/config/mongoose.js');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public2'));

var routes = require('./server/config/routes.js')(app);

app.get('*', (req, res)=>{
  res.sendFile(path.resolve('/public2/index.html'));
});

app.listen(8000,() => {
  console.log("listening on 8000")
});
