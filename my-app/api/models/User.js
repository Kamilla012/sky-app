const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const UserSchema = new Schema({
  fname: { type: String },
  lname: { type: String },
  username: { type: String, minlength: 4},
  email: { type: String },
  password: { type: String},
  profileImage: { type: String},
  likedPosts: [{type: Schema.Types.ObjectId, ref: 'Post'}],
});


const UserModel = model('User', UserSchema);

module.exports = UserModel;