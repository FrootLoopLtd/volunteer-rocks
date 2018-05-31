var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/volunteer');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Volunteer Database is connected');
});