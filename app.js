const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.get('/', function(req, res) {
  res.render('home', {
    pageTitle: 'Home',
    pageID: 'Home'
  });
});

app.listen(3000);
