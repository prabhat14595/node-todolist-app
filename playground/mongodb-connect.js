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

  // db.collection('todos').insertOne({
  //   text: 'something to do list',
  //   completed: false
  // },(err, result) => {
  //   if (err) {
  //     return console.log('unable to add data to servers');
  //   }
  //   console.log(JSON.stringify(result.ops), undefined, 2);
  // });
  //
  // db.collection('users').insertOne({
  //   name: 'prabhat',
  //   age: 22,
  //   location: 'location azamgarh'
  // }, (err, result)=>{
  //   if (err) {
  //     return console.log('unable to make it');
  //   }
  //   console.log(JSON.stringify(result.ops), undefined, 2);
  //
  // });


  client.close();

 });
