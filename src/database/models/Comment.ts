import mongoose from "mongoose";

const commentchema = new mongoose.Schema({
    name: {
        type: "string",
        required: true
    },
    email: {
        type: "string",
        required: true
    },
    comment: {
        type: "string",
        required: true
    },
    blogId: {
        type: "string",
        required: true
    }
});

const Comment = mongoose.model("Comment", commentchema);
export default Comment;