var mongoose = require('mongoose');
<<<<<<< HEAD

mongoose.connect('mongodb://localhost/volunteer');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('Volunteer Database is connected');
});

var volunteerSchema = mongoose.Schema({
  name: String
});

var Volunteers = mongoose.model('Volunteers', volunteerSchema);

var vol = new Volunteers({name: 'Linda'});
=======
mongoose.connect('mongodb://localhost/volunteer');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Volunteer Database is connected');
});
>>>>>>> 11cdcdad7c6778dea83c832ef84eb26ed8730d8d
