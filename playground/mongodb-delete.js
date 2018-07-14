// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/Users', (err, client) =>{
  if (err) {
    return console.log('Unable to connect to the servers');
  }
  console.log('connect to the mongodb servers');
  const db = client.db('Users');


//
// //delete many
//   db.collection('users').deleteMany({age: 22}).then((result)=>{
//     console.log(result);
//   });
//
// // delete one
//  db.collection('users').deleteOne({age:23}).then((result)=>{
//    console.log(result);
//  });

//  find one and delete
 db.collection('users').findOneAndDelete({age:23}).then((result)=>{
   console.log(result);
   console.log(JSON.stringify(result, undefined, 2));
 });



  client.close();

 });
