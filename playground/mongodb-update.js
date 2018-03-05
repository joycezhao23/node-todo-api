//const MongoClient = require('mongodb').MongoClient;
//destructuring below
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Uable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5a9cebc2b1aba3f0b2169969")
  // }, {
  //   $set: {
  //     text: 'Eat dinner',
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((res) => {
  //   console.log(res);
  // })

  db.collection('Users').findOneAndUpdate({
    _id: 123
  }, {
    $set: {
      name: 'aa'
    },
    $inc: {
      age: -1,
    }
  }, {
    returnOriginal: false
  }).then((res) => {
    console.log(res);
  })

  //db.close();
});
