const mongoose = require('mongoose');
const Schema = mongoose.Schema


const userSchema = new Schema ({
  googleId: {
    required: false,
    type: String,
  },
  twitterId: {
    required: false,
    type: String,
  },
  githubId: {
    required: false,
    type: String,
  },
  username: {
    required: true,
    type: String,
  }
}
);

const User = mongoose.model('user', userSchema);

module.exports = User;
