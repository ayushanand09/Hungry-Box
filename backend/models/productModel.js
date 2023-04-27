const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter product name"],
        trim: true
    },
    price: {
        type: Number,
        required: [true, "Please enter the price of the product"],
        maxLength: [2, "Cannot exceed 99 rs"]
    },
    stock: {
        type: Number,
        required: [true, "Please enter the stock of the product"],
        maxLength: [2, "Cannot exceed 99 quantities of a product"],
        default: 1
    },
    publishedAt: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        // required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Product", productSchema);