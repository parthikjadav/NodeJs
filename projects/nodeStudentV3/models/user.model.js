const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,  
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    }
})

const user = mongoose.model("userSchema", userSchema);

module.exports = user;