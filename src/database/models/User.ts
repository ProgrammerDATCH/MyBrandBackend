import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: "string",
        required: true
    },
    email: {
        type: "string",
        required: true,
        unique: true
    },
    password: {
        type: "string",
        required: true
    },
    isVerified: {
        type: "boolean",
        required: true,
        default: false
    }
});

const User = mongoose.model("User", userSchema);
export default User;