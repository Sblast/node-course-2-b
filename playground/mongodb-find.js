//connect us to a running MongoDB server
const {MongoClient, ObjectID} = require('mongodb');



var dataBase = "TodoApp";
//connecting to a database
//connects to the database /TodoApp, if no such db exists it auto creates it
MongoClient.connect(`mongodb://localhost:27017/${dataBase}`, (err, db)=>{
	if(err){
		//return or 'else' - so if an error happens, it won't continue
		return console.log(`Unable to connect. Error: ${err}`);
	}

	console.log(`Connected to MongoDB server. Database: ${ dataBase}.`);

	//toArray() returns a promise
	// db.collection('Todos')
	// .find({_id: new ObjectID("587a38f4b8422a2884c818c8") })
	// .toArray().then((docs) => {
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err)=> {
	// 	console.log(`unable t o fetch`);
	// });
	// 
	// 
	db.collection('Todos')
	.find()
	.count().then((count) => {
		console.log(`Todos count ${count}`);
	}, (err)=> {
		console.log(`unable t o fetch`);
	});

	//close the connection to the db
	db.close();
});

