const models = require('./models.js');
let Volunteers = models.Volunteers;
let Organizations = models.Organizations;
let Opportunities = models.Opportunities;

const getVolunteers = function(callback, limit) {
  Volunteers.find({}, function (err, volData) {
    if (err) {
      throw err;
    }

    callback(volData);
  }).limit(limit);
};

const getOrganizations = function(callback, limit) {
  Organizations.find({}, function (err, orgData) {
    if (err) {
      throw err;
    }

    callback(orgData);
  }).limit(limit);
};

const getOpportunities = function(callback, limit) {
  Opportunities.find({}, function (err, oppsData) {
    if (err) {
      throw err;
    }

    callback(oppsData);
  }).limit(limit);
};

const getSession_Id = function(session_id, callback){
  Organizations.count({session_id: session_id}, function(err, data) {
    if(err) throw err;
    data ? callback(true) : callback(false);
  });
}

module.exports.getVolunteers = getVolunteers;
module.exports.getOrganizations = getOrganizations;
module.exports.getOpportunities = getOpportunities;
module.exports.getSession_Id = getSession_Id;