const mongoose = require('mongoose');


const user = mongoose.Schema(
  {
    username: String,
    password: String
  }
);

module.exports = mongoose.connect('User', user)
