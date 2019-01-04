const express = require('express');
const app = express();

const models = require('./models');

app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.get('/', function(req, res) {
  //FIND ALL EXAMPLE
  // models.user.findAll().then(results => {
  //   results.forEach(function(index) {
  //     console.log(index.id, index.firstName);
  //   });
  // });
});

// create a user example
models.user
  .create({ firstName: 'Sam', lastName: 'Luedke' })
  .then(function(user) {
    console.log(user);
  });

// Query full table
// models.user.findAll().then(results => {
//   const r = results;
//   console.log(r);
// });

// Query single row from table
models.user.findAll().then(results => {
  const r = results[0];
  console.log(r.id, r.firstName);
});

//Query using WHERE clause
// models.user.findAll({ where: { firstName: 'Veronica' } }).then(results => {
//   results.forEach(function(index) {
//     console.log(index.id, index.firstName);
//   });
// });

app.listen(3000);
