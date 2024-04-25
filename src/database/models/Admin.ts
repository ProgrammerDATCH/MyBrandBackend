import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
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
    }
});

const Admin = mongoose.model("Admin", adminSchema);
export default Admin;