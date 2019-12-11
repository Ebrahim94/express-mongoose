const express = require('express');
const mongoDB = require('./config/db');

mongoDB();

const app = express();

app.use('/', require('./api/users'));

app.listen(5000, function(req, res) {
  console.log('you are connected on port 5000');
});
