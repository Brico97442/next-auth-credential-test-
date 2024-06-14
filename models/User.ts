import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, select: false },
    role: { type: String, default: 'user' },
    image: { type: String },
    //Google and github provider
    authProviderId: { type: String },
});