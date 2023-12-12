const mongoose = require('mongoose')
const {Schema, model} = mongoose

const PostSchema = new Schema({
    title:String,
    summary:String,
    content:String,
    cover:String,
    author:{type:Schema.Types.ObjectId, ref:'User'},
    likes: { type: Number, default: 0 },
<<<<<<< HEAD

=======
>>>>>>> e06f1c97c0b5519c1cfc8e3dc5ea82a8919ff8ff
},{
    timestamps: true,
}); 

const PostModel = model('Post', PostSchema)
module.exports = PostModel