// const ErrorHander = require("../utils/errorHander");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.isAuthenticatedUser = async (req,res,next) => {

    try {
        const token = req.cookies.jwtoken;
        // console.log("jwt: ", token)
        const verifyToken = jwt.verify(token,process.env.JWT_SECRET);

        const rootUser = await User.findOne({_id:verifyToken._id, "tokens.token":token});
        // console.log("root user: ", rootUser)

        if(!rootUser){
            throw new Error('User not found')
        }
        
        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
        req.user = {role: "admin"};

        next();

    } catch (error) {
        res.status(401).send('Please Login to access this resource')
        console.log(error);
    }

    // if(!token){
    //     return next(new ErrorHander ("Please Login to access this resource", 401));
    // }

    // const decodedData = jwt.verify(token,process.env.JWT_SECRET);

    // req.user = await User.findById(decodedData.id)
    // next();
    
}


// exports.authorizeRoles = (...roles) => {
exports.authorizeRoles = (roles) => {
    // console.log("roles: ", roles)
    return (req,res,next) => {
        console.log("req", req.user.role)
        // if(!roles.includes(req.rootUser.role)) {
        // if(!roles.includes(req.rootUser.role)) {
        if(roles === req.user.role) {
        // if(roles === req.rootUser.role) {
            // return next (new ErrorHander(`Role : ${req.user.role} is not allowed to access this resource`,403));
            return new Error("error");
        }

        next();
    }
}

exports.authorizeCreateRole = (roles) => {
    return (req,res,next) => {
        // console.log(req.rootUser)
        // // if(!roles.includes(req.rootUser.role)) {
        // if(roles === req.rootUser.role) {
        // // return next (new ErrorHander(`Role : ${req.rootUser.role} is not allowed to access this resource`,403));
        // return new Error("error");
        // }

        next();
    }
}