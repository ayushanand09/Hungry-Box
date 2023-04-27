const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorHander");
const ApiFeatures = require("../utils/apifeatures");

//Create Product --> Admin 
exports.createProduct = async (req,res,next) => {
    
    const{name , price, stock} = req.body;
    if(!name || !price || !stock){
        return res.status(422).json({
            error: "Please fill all the required fields"
        })
    }

    try {
        const product = new Product({name , price, stock});
        // console.log(product);
        await product.save();
        if(!product){
            return res.status(500).json({
                success: false,
                message: "Product not created"
            })
        }
        else{
            return res.status(201).json({
                success: true,
                product
            })
        }
    } catch (error) {
        console.log(error)
    }

}

// Get All Products --> USER
exports.getAllProducts = async (req,res) =>{

    const products = await Product.find();
    res.status(200).json({
        success: true,
        products,
    })
}

// Get Product Details
exports.getProductDetails = async (req,res,next) => {
    const product = await Product.findById(req.params.id);
    
    if(!product){
        return res.status(500).json({
            success: false,
            message: "Product not found"
        })
    }

    //Another method using middleware
    // if(!product){
    //     return next(ErrorHander("Product not found",404))
    // }

    res.status(200).json({
        success: true,
        product
    })
}

// Get Product Details by name
exports.getProductDetailsName = async (req,res,next) => {
    const product = await Product.find({name: req.params.name});
    
    if(!product){
        return res.status(500).json({
            success: false,
            message: "Product not found"
        })
    }

    //Another method using middleware
    // if(!product){
    //     return next(ErrorHander("Product not found",404))
    // }

    res.status(200).json({
        success: true,
        product
    })
}


// Update Product --> ADMIN
exports.updateProduct = async (req,res, next) => {
    let product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success: false,
            message: "Product not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true,useFindAndModify: false}) 
    res.status(200).json({
        success: true,
        product
    })

}


// Delete a product --> ADMIN
exports.deleteProduct = async (req,res,next) => {
    const product = await Product.findById(req.params.id);
    // const product = await Product.find({name: req.params.name});
    // const productId = await Product.findById(product.id);
    // console.log("pr: ", product);
    // console.log("prid: ", productId);

    if(!product){
        return res.status(500).json({
            success: false,
            message: "Product not found"
        })
    }
    // await productId.remove()
    await product.remove();
    
    res.status(200).json({
        success: true,
        message: "Product deleted successfully"
    })
}

