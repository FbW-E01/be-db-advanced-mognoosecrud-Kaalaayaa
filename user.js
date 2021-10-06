import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    email: String,
    password: {
        type: String,
        minlength: 8
    },
    role: {
        type : String,
        enum : ["User", "Admin", "Editor"],
        default: "User"}
})

const User = mongoose.model("testusers2", userSchema)

export default User
