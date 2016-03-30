var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

//required so that entries without Object IDs can be assigned them by mongo
var ObjectId = require('mongodb').ObjectID;

//CONNECT TO THE SERVER
var url = 'mongodb://localhost:27017/seamless';

//test that server is working correctly
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to database server.");
  db.close();
});

//Restaurant Syntax:
// {
// 	name:
// 	buildingNumber:
// 	streetName:
// 	zipcode:
// 	borough:
// 	cuisine:
// }



var writeNewEntry = function(newEntry){
	MongoClient.connect(url, function(err, db) {
	    assert.equal(null, err);

	    db.collection('restaurants').insertOne({
	    	"name": newEntry.name.toString(),
	    	"address": {
	    		"building": newEntry.buildingNumber.toString(),
	    		"street": newEntry.streetName.toString(),
	    		"zipcode": newEntry.zipcode.toString()
	    	},
	    	"borough": newEntry.borough.toString(),
	    	"cuisine": newEntry.cuisine.toString()
	    }, function(err, result) {
		    assert.equal(err, null);

		    console.log("Inserted "+newEntry.name+" into the restaurants collection.");
		    db.close();
	    });
	});
}



var updateEntry = function(entry) {
   MongoClient.connect(url, function(err, db) {
	  	assert.equal(null, err);
	  	db.collection('restaurants').updateOne(
	  		//filter: the first record matching this will be updated
      		{ "name" : "Juni" },
      		//"update" document specifies the action to perform
		    {
		        $set: { "cuisine": "American (New)" },
		        $currentDate: { "lastModified": true }
		    }, function(err, results) {
		      console.log(results);
		      db.close();
   		});
   	});
};

var findRestaurantIDsByName = function(name) {
	var restaurantList = []

	MongoClient.connect(url, function(err, db) {
	  	assert.equal(null, err);

	    var cursor = db.collection('restaurants').find( { "name": name } );
	    
	    cursor.each(function(err, doc) {
	    	assert.equal(err, null);
	      	
	      	if (doc != null) {
	      		restaurantList.push(doc._id)
	      	} else {	     
		        db.close();
		        console.log(restaurantList)
		        if (restaurantList.length === 0){console.log("There were no restaurants with that name.")}
		        return restaurantList
	      	}
	   });

    });	
};

var findRestaurantByID = function(id) {
	var restaurant = null;

	MongoClient.connect(url, function(err, db) {
	  	assert.equal(null, err);

	    var cursor = db.collection('restaurants').find( { "_id": ObjectId(id) } );
	    
	    cursor.each(function(err, doc) {
	    	assert.equal(err, null);
	      	
	      	if (doc != null) {
	      		
	      		restaurant = doc
	        	
	      	} else {	     
		        db.close();
		        if (restaurant){
		        	console.log("Found "+ restaurant.name)
		        } else{
		        	console.log("ID "+id+" was not found.")
		        }
	      	}
	   });

    });	
};

var removeRestaurants = function(id) {
	MongoClient.connect(url, function(err, db) {
	  	assert.equal(null, err);
	    
	    db.collection('restaurants').deleteOne(
	    	//filter condition
	      	{ "_id": ObjectId(id) },
		    function(err, results) {
		         console.log(results);
		         db.close();
	      	}
	    );
	});
};

// findRestaurantIDsByName("Juni")
findRestaurantByID("56fc1d1c83c72c30e3e4aec3")
