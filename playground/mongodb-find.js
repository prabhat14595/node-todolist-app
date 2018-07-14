// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/Users', (err, client) =>{
  if (err) {
    return console.log('Unable to connect to the servers');
  }
  console.log('connect to the mongodb servers');
  const db = client.db('Users');

  db.collection('users').find({age: 23}).toArray().then((docs)=>{
     // console.log('users');
    console.log(JSON.stringify(docs, undefined, 2));
  },(err)=> {
    console.log('unable to fetch data');
  });


   // client.close();

 });
