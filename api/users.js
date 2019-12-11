const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', function(req, res) {
  user = new User({
    name: 'ebrahim',
    age: 25
  });

  user.save();

  res.json({ msg: 'the user has been saved' });
});

module.exports = router;
