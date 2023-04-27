const mongoose = require("mongoose");
const validator = require("validator");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const employeeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please enter your name"],
        maxLength: [50, "Cannot exceed 50 characters"]
    },
    email:{
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        validate: [validator.isEmail, "Please enter your mail ID"]
    },
    password:{
        type: String,
        required: [true, "Please enter your password"],
        minLength: [8,"Password should be greater than 8 characters"],
    },
    avatar:{
        public_id:{
            type: String,
            default: "hi"
            // required: true
        },
        url: {
            type: String,
            default: "hi"
            // required: true
        }
    },
    role:{
        type: String,
        default: "admin"
    },

    // resetPasswordToken: String,
    // resetPasswordExpire: Date,

});

employeeSchema.pre("save", async function(next){

    if(!this.isModified("password")){
        next();
    }

    this.password = await bcryptjs.hash(this.password,10);
})

//JWT TOKEN
employeeSchema.methods.getJWTToken = function (){
    return jwt.sign({id: this._id},process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRE,
    });
};


//Compare Passsword
// employeeSchema.methods.comparePassword = async function(password){
//     return await bcryptjs.compare(password,this.password);
// }

//Reset Password
employeeSchema.methods.getResetPasswordToken = async function(){
    // Generating Token

    const resetToken = crypto.randomBytes(20).toString("hex");

    //Hashing and adding resetPasswordToken to userSchema
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");

    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

    return resetToken;
}

module.exports = mongoose.model("Emp", employeeSchema);