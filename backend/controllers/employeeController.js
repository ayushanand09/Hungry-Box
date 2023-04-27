const Emp = require("../models/employeeModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const express = require("express")
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.json());
app.use(cookieParser());

// //Register a user
exports.registerEmp = async (req,res,next) => {
    const {name, email, password, role} = req.body
    
    if(!name || !email || !password){
        return res.status(422).json({
            error: "Please fill all the required fields"
        })
    }
    try {
        const empExist = await Emp.findOne({ email:email });
        if(empExist){
            return res.status(422).json({error: "Email already registered"})
        }
        else{
            const emp = new Emp({name,email,password,role});
            await emp.save();

            res.status(201).json({message: "Employee registered successfully",
                                    role: role})
        }

    } catch (error) {
        console.log(error);
    }
};

// //Work from here
// exports.loginUser = async (req,res,next) => {

//     const {email, password} = req.body;
//     //checking if user has given both email and password
//     if(!email || !password){
//         return next(new ErrorHander("Please enter email and password",404))
//     }
//     const emp  = await Emp.findOne({email}).select("+ password");
//     if(!emp){
//         return next(new ErrorHander("Invalid email or passowrd",401));
//     }
//     const isPasswordMatched = emp.comparePassword(req.body.password);
//     if(!isPasswordMatched){
//         return next(new ErrorHander("Invalid email or passowrd",401));
//     }

//     //Using imported function
//     sendToken(emp,200,res);
// }

exports.loginUser = async (req,res,next) => {
    try {
        const {email, password} = req.body;
        
        //checking if user has given both email and password
        if(!email || !password){
            return next(new ErrorHander("Please enter email and password",400))
        }
        // const user  = await User.findOne({email}).select("+ password");
        const user  = await User.findOne({email:email});

        if(user){ 
            const isPasswordMatched = await bcrypt.compare(password,user.password);
            const token = await user.generateAuthToken();
            console.log(token);
            
            res.cookie("jwtoken",token, {
                expires: new Date(Date.now() + 5000000),
                httpOnly:true
            });

            if(!isPasswordMatched){
                res.status(400).json({message: "Invalid Credentials"});
            }

            else{
                res.json({message: "User sign in successfully"});
            }
        }
        else{
            res.status(400).json({message: "Invalid Credentials"});
        }
    } catch (error) {
        console.log(error);
    }
}

exports.showName = async (req,res,next) => {
    res.send(req.rootUser);
}

exports.showAboutMe = async (req,res,next) => {
    res.send(req.rootUser);
}

//Logout

exports.logout = async(req,res,next) => {
    res.clearCookie('jwtoken', {path: '/'});
    res.status(200).json({
        success: true,
        message: "Logged out",
    });
};



// //Forgot Password
// exports.forgotPassword = async(req,res,next) => {
//     const user = await User.findOne({email: req.body.email});
    
//     if(!user){
//         return next(new ErrorHander("User not found",404));
//     }

//     //Get ResetPassword Token
//     const resetToken = user.getResetPasswordToken();

//     await user.save({validateBeforeSave: false});

//     const resetPasswordURL = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`;

//     const message = `Your password reset token is : \n\n ${resetPasswordURL} \n\n If you have not requested this email then, please ignore it `;

//     try {
//         await sendEmail({
//             email: user.email,
//             subject: `Demo Password Recovery`,
//             message,
//         });

//         res.status(200).json({
//             success: true,
//             message: `Email sent to ${user.email} successfully`,
//         });

//     } catch (error) {
//         user.resetPasswordToken = undefined;
//         user.resetPasswordExpire = undefined;
//         await user.save({validateBeforeSave: false});

//         return next(new ErrorHander(error.message, 500));
//     }
// }

// //Reset Password
// exports.resetPassword = async(req,res,next) => {

//     // Creating token hash
//     const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex");

//     const user = await User.findOne({
//         resetPasswordToken,
//         resetPasswordExpire: { $gt: Date.now() },
//     });

//     if(!user){
//         return next(new ErrorHander("Reset Password Token is invalid or has been expired",404));
//     }


//     if(req.body.password !== req.body.confirmedPassword){
//         return next(new ErrorHander("Password does not match",404));
//     }

//     user.password = req.body.password;
//     user.resetPasswordToken = undefined;
//     user.resetPasswordExpire = undefined;

//     await user.save();
//     sendToken(user,200,res);
// }

// // Get User detail
// exports.getUserDetail = async (req,res,next) => {
//     const user = await User.findById(req.user.id);

//     res.status(200).json({
//         success: true,
//         user,
//     });
// };

// // Update User password
// exports.updateUserPassword = async (req,res,next) => {
//     const user = await User.findById(req.user.id).select("+password");

//     const isPasswordMatched = user.comparePassword(req.body.oldPassword);
//     if(!isPasswordMatched){
//         return next(new ErrorHander("Old passowrd is incorrect",400));
//     }

//     if(req.body.newPassword!==req.body.confirmPassword ){
//         return next(new ErrorHander("Password does not macth",400));
//     }

//     user.password = req.body.newPassword;

//     await user.save();

//     sendToken(user,200,res);
// };
// // Update User password
// exports.updateUserPassword = async (req,res,next) => {
//     const user = await User.findById(req.user.id).select("+password");

//     const isPasswordMatched = user.comparePassword(req.body.oldPassword);
//     if(!isPasswordMatched){
//         return next(new ErrorHander("Old passowrd is incorrect",400));
//     }

//     if(req.body.newPassword!==req.body.confirmPassword ){
//         return next(new ErrorHander("Password does not macth",400));
//     }

//     user.password = req.body.newPassword;

//     await user.save();

//     sendToken(user,200,res);
// };
// // Update User password
// exports.updateUserPassword = async (req,res,next) => {
//     const user = await User.findById(req.user.id).select("+password");

//     const isPasswordMatched = user.comparePassword(req.body.oldPassword);
//     if(!isPasswordMatched){
//         return next(new ErrorHander("Old passowrd is incorrect",400));
//     }

//     if(req.body.newPassword!==req.body.confirmPassword ){
//         return next(new ErrorHander("Password does not macth",400));
//     }

//     user.password = req.body.newPassword;

//     await user.save();

//     sendToken(user,200,res);
// };

// // Update User Profile
// exports.updateUserProfile = async (req,res,next) => {
    
//     const newUserData = {
//         name: req.body.name,
//         email: req.body.email,
//     }
//     //we will add cloudinary later. It is used for avatar
//     const user = await User.findByIdAndUpdate(req.user.id,newUserData, {
//         new: true,
//         runValidators: true,
//         useFindAndModify: false,
//     });

//     await user.save();

//     res.status(200).json({
//         success: true,
//         message: "Updated profile successfully",
//         newUserData
//     })
// };

// //Get all users ---> admin
// exports.getAllUsers = async (req,res,next) => {
//     const users = await User.find();
//     res.status(200).json({
//         success: true,
//         users
//     })
// }

// //Get a single user -- ADMIN    
// exports.getSingleUser = async (req,res,next) => {
//     const user = await User.findById(req.params.id);

//     if(!user){
//         return next(new ErrorHander(`User does not exit with the id: ${req.params.id}`))
//     }

//     res.status(200).json({
//         success: true,
//         user
//     })
// }

// // Update User Role -- ADMIN
// exports.updateProfile = async (req,res,next) => {
    
//     const newUserData = {
//         role: req.body.role
//     }
    
//     //we will add cloudinary later. It is used for avatar
//     const user = await User.findByIdAndUpdate(req.params.id,newUserData, {
//         new: true,
//         runValidators: true,
//         useFindAndModify: false,
//     });

//     if(!user){
//         return next(new ErrorHander(`User does not exist with Id: ${req.params.id}`),404)
//     }

//     await user.save();

//     res.status(200).json({
//         success: true,
//         message: "Updated profile successfully",
//         newUserData
//     })
// };

// // Delete User -- ADMIN
// exports.deleteProfile = async (req,res,next) => {
//     const user = await User.findById(req.params.id);

//     //We will remove cloudinary later

//     if(!user){
//         return next(new ErrorHander(`User does not exist with Id: ${req.params.id}`),404)
//     }

//     await user.remove(); 

//     res.status(200).json({
//         success: true,
//         message: "Deleted profile successfully",
//     })
// };
