const ErrorHandler = require("../utils/errorHander");

module.exports = (err,req,res,next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal server error";

    //Wrong MongoDB Id error
    if(err.name === "Cast Error"){
        const message = `Resource not found. Invalid: ${err.path}`;
        err = new ErrorHandler(message,400);
    }


    //Mongoose duplicate key error
    if(err.code === 11000){
        const  message =  `Duplicate ${Object.keys(err.keyValue)} entered`
        err = new ErrorHandler(message,400);
    }

    //Wrong JSON webtoken(Jwt) error
    if(err.name === "JsonWebTokenError"){
        const message = `Json web token is invalid, Try again`;
        err = new ErrorHandler(message,400);
    }

    //JWT Expire error
    if(err.name === "TokenExpiredError"){
        const message = `Json web token is expired, Try again`;
        err = new ErrorHandler(message,400);
    }


    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
}

