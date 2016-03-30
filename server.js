var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

//CONNECT TO THE SERVER
var url = 'mongodb://localhost:27017/seamless';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  db.close();
});

//UNCLEAR WHY THIS IS REQUIRED YET
var ObjectId = require('mongodb').ObjectID;

var newEntry = {
      "address" : {
         "street" : "2 Avenue",
         "zipcode" : "10075",
         "building" : "1480",
         "coord" : [ -73.9557413, 40.7720266 ]
      },
      "borough" : "Manhattan",
      "cuisine" : "Italian",
      "grades" : [
         {
            "date" : new Date("2014-10-01T00:00:00Z"),
            "grade" : "A",
            "score" : 11
         },
         {
            "date" : new Date("2014-01-16T00:00:00Z"),
            "grade" : "B",
            "score" : 17
         }
      ],
      "name" : "Vella",
      "restaurant_id" : "41704620"
   }

var writeOne = function(newEntry){
	MongoClient.connect(url, function(err, db) {
		//assert.equal(expected, actual, error)
		//this statement says that we expect no error
	    assert.equal(null, err);

	    db.collection('restaurants').insertOne(newEntry, function(err, result) {
		    assert.equal(err, null);
		    
		    console.log("Inserted a document into the restaurants collection.");
		    db.close();
	    });
	});
}

writeOne(newEntry)
