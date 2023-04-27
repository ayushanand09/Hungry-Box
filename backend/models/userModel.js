const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
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
        // default: "user"
    },
    tokens: [
        {
            token:{
                type: String,
                required: true
            }
        }
    ],

    // resetPasswordToken: String,
    // resetPasswordExpire: Date,

});

userSchema.pre('save', async function(next){

    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12);
    }
    next();
})

//JWT TOKEN
userSchema.methods.generateAuthToken = async function (){
    try {
        let token = jwt.sign({_id:this._id},process.env.JWT_SECRET);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }
    // return jwt.sign({id: this._id},process.env.JWT_SECRET,{
    //     expiresIn: process.env.JWT_EXPIRE,
    // });
};


//Compare Passsword
// userSchema.methods.comparePassword = async function(password){
//     return await bcryptjs.compare(password,this.password);
// }

//Reset Password
userSchema.methods.getResetPasswordToken = async function(){
    // Generating Token

    const resetToken = crypto.randomBytes(20).toString("hex");

    //Hashing and adding resetPasswordToken to userSchema
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");

    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

    return resetToken;
}

module.exports = mongoose.model("User", userSchema);