const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

mongoose.connect('mongodb://localhost:27017/test', {});

const UserSchema = new mongoose.Schema({
  username: { type: String },
  password: {
    type: String,
    set(val){
      return bcryptjs.hashSync(val, 10);
    },
  },
})

const User = mongoose.model('user', UserSchema);
// User.db.dropCollection('user').then(r => console.log(r)).catch(err => console.log(err))

module.exports = { User };