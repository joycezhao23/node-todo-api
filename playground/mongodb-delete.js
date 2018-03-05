//const MongoClient = require('mongodb').MongoClient;
//destructuring below
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Uable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  db.collection('Users').deleteMany({name: 'aa'}).then((res) => {
    console.log(res);
  });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((res) => {
  //   console.log(res);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
  //   console.log(res);
  // });
  db.collection('Users').findOneAndDelete({_id: new ObjectID('5a9ce1ea02b74817d30ed628')})
    .then((res)=> {
      console.log(res);
  });

  //db.close();
});
