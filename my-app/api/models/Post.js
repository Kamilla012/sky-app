const mongoose = require('mongoose')
const {Schema, model} = mongoose

const PostSchema = new Schema({
    title: String,
    summary: String,
    content: String,
    cover: String,
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    likes: [
        {
            user: { type: Schema.Types.ObjectId, ref: 'User' },
        },
    ],
}, {
    timestamps: true,
});

PostSchema.methods.like = async function (userId) {
    if (!this.likes.some(like => like.user.equals(userId))) {
        this.likes.push({ user: userId });
        await this.save();
    }
};

PostSchema.methods.unlike = async function (userId) {
    this.likes = this.likes.filter(like => !like.user.equals(userId));
    await this.save();
};

const PostModel = model('Post', PostSchema);
module.exports = PostModel;


