import mongoose from "mongoose";

const blogchema = new mongoose.Schema({
    title: {
        type: "string",
        required: true
    },
    description: {
        type: "string",
        required: true
    },
    image: {
        type: "string",
        required: true
    }
});

const Blog = mongoose.model("Blog", blogchema);
export default Blog;