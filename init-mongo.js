// init-mongo.js
db = db.getSiblingDB('testdb');
db.createCollection('users');
db.users.insertMany([
  { name: "Alice", age: 30, city: "NYC" },
  { name: "Bob", age: 25, city: "SF" }
]);