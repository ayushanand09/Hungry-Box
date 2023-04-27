const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    orderItems:[
        {
            name:{
                type: String,
                required: true,
            },
            price:{
                type: Number,
                required: true,
            },
            quantity:{
                type: Number,
                required: true,
            },
            product:{
                type:mongoose.Schema.ObjectId,
                ref: "Product",
                required: true,
            },
        },
    ],
    
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },

    paymentInfo:{
        id:{
            type: String,
            required: true
        }
    },
    orderStatus: {
        type: String,
        required: true,
        default: "Processing",
    },
    paidAt:{
        type: Date,
        required: true,
    },
    itemPrice:{
        type: Number,
        required: true,
        default: 0
    }
});

module.exports = mongoose.model("Order",orderSchema);