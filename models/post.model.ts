import {Schema, model, models} from 'mongoose';

// Define the schema for comments
const CommentSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
}, {timestamps: true});

// Define the schema for posts
const PostSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    userImagUrl: {
        type: String,
    },
    caption: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    like: {
        type: Number,
        default: 0,
    },
    comments: {
        type: Number,
        default: 0
    },
}, {timestamps: true});

// Create the Post model if it doesn't already exist
const Post = models.Post || model('Post', PostSchema);

export default Post;
