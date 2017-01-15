//connect us to a running MongoDB server
const MongoClient = require('mongodb').MongoClient;



var dataBase = "TodoApp";
//connecting to a database
//connects to the database /TodoApp, if no such db exists it auto creates it
MongoClient.connect(`mongodb://localhost:27017/${dataBase}`, (err, db)=>{
	if(err){
		//return or 'else' - so if an error happens, it won't continue
		return console.log(`Unable to connect. Error: ${err}`);
	}

	console.log(`Connected to MongoDB server. Database: ${ dataBase}.`);


	db.collection('Todos').insertOne({
			text: `Something to do`,
			completed: false
		}, (err, result)=>{
			if(err){
				return console.log("Could not add document to collection. Error:", err);
			}


		console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
	});

	//close the db
	db.close();
});

