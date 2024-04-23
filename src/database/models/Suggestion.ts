import mongoose from "mongoose";

const suggestionSchema = new mongoose.Schema({
    name: {
        type: "string",
        required: true
    },
    email: {
        type: "string",
        required: true
    },
    subject: {
        type: "string",
        required: true
    },
    message: {
        type: "string",
        required: true
    }
});

const Suggestion = mongoose.model("Suggestion", suggestionSchema);
export default Suggestion;