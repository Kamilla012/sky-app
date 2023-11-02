const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const UserSchema = new Schema({
  username: { type: String, required: true, minlength: 4},
  password: { type: String, required: true },
});


const UserModel = model('Users', UserSchema);

module.exports = UserModel;