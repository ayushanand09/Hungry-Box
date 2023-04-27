const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    comment:{
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Feedback",feedbackSchema);