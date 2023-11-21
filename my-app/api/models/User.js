const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const UserSchema = new Schema({
  fname: { type: String, required: true, minlength: 4},
  lname: { type: String, required: true},
  username: { type: String, required: true, minlength: 4},
  email: { type: String, required: true },
  password: { type: String, required: true },
  profileImage: { type: String,  required: true}
});


const UserModel = model('User', UserSchema);

module.exports = UserModel;