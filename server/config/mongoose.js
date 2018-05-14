console.log("Mongoose connection loading")
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var fs = require('fs');
var path = require('path');



// mongoose.connect('mongodb://localhost/full_friends');
mongoose.connect('mongodb://nabz:nabz@ds221990.mlab.com:21990/friends_mean');
var models_path = path.join(__dirname, './../models');
fs.readdirSync(models_path).forEach(function(file){
  if(file.indexOf('js')>= 0){
    require(models_path + '/' + file);
  }
});
