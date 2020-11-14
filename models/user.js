const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    idCard: {
        type: Number,
        required: true,
        unique: true
    },
    semester: {
        type: String,
        required: true
    },
    classes: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    },
    prove: {
        type: Boolean,
        default: false
    },
    image: {
        type: String
    },
    candidate1: {
        type: Boolean,
        default: false
    },
    candidate2: {
        type: Boolean,
        default: false
    },
    votes: {
        type: Number,
        default: 0
    },
    voted1: {
        type: Boolean,
        default: false
    },
    voted2: {
        type: Boolean,
        default: false
    },
    deadline: {
        type: Date
    }
})

const User = mongoose.model("User", userSchema);

module.exports = User;