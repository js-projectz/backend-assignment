import mongoose from "mongoose";

// Create a new schema
const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phonenumber: {type:Number, required: true},
        password: { type: String, required: true },
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;