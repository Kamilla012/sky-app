const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const UserSchema = new Schema({
  username: { type: String, minlength: 4},
  email: { type: String },
  password: { type: String},
  profileImage: { type: String}
});


const UserModel = model('User', UserSchema);

module.exports = UserModel;