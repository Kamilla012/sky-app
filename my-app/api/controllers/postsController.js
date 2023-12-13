
const PostModel = require('../models/Post');

async function updateLikeCount(postId, isLiked) {
    const post = await PostModel.findById(postId);

    if (!post) {
        throw new Error('Post not found');
    }

    // Aktualizacja liczby polubień
    post.likes = isLiked ? post.likes + 1 : post.likes - 1;

    // Zapisanie zmian w bazie danych
    await post.save();

    return post;
}

module.exports = {
    updateLikeCount,
};
