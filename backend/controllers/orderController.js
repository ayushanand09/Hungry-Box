const Order = require("../models/orderModel");
const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorHander");
// const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//Create new order
exports.newOrder = async (req,res,next) => {
    const{orderItems, paymentInfo, itemPrice, totalPrice} = req.body; 

    const order = await Order.create({orderItems, paymentInfo, itemPrice, paidAt:Date.now(), user:req.user._id});

    res.status(201).json({
        success: true,
        message: "Order is created",
        order,
    });
};

//Get Single Order
exports.getSingleOrder = async (req,res,next) => {
    const order = await Order.findById(req.params.id).populate(
        "user",
        "name email"
    );

    if(!order){
        return next(new ErrorHander(`Order does not exit with the id: ${req.params.id}`,404))
    }

    res.status(200).json({
        success: true,
        order,
    });
};

//Get Logged-in user orders
exports.myOrders = async (req,res,next) => {
    const orders = await Order.find({user:req.user._id});

    res.status(200).json({
        success: true,
        orders,
    });
};

//Get all orders -- ADMIN
exports.allOrders = async (req,res,next) => {
    const orders = await Order.find();

    let totalAmt = 0;
    orders.forEach(order=>{
        totalAmt+=order.totalPrice;
    });

    res.status(200).json({
        success: true,
        totalAmt,
        orders,
    });
};

//Update Quantity -- ADMIN
exports.updateStockAmt = async (req,res,next) => {
    const order = await Order.findById(req.params.id);

    if (!order) {
        return next(new ErrorHander(`Order not found with the Id:${req.params.id}`, 404));
    }

    if (order.orderStatus === "Delivered") {
        return next(new ErrorHander("You have already delivered this order", 400));
    }

    if (req.body.status === "Shipped") {
        order.orderItems.forEach(async (ord) => {
          await updateStockAmount(ord.product, ord.quantity);
        });
    }
    
    order.orderStatus = req.body.status;

    // if (req.body.status === "Delivered") {
    //     order.deliveredAt = Date.now();
    // }

    await order.save({validateBeforeSave: false});

    res.status(200).json({
        success: true,
    });
}

async function updateStockAmount(id,quantity){
    const product = await Product.findById(id);
    
    product.stock-=quantity;

    await product.save();
}

//Delete orders -- ADMIN
exports.deleteOrder = async (req,res,next) => {
    const order = await Order.findById(req.params.id);

    if(!order){
        return next(new ErrorHander(`Order not found with this id: ${req.params.id}`,404));
    }

    await order.remove();

    res.status(200).json({
        success: true,
        message: "Order removed",
    });
};