const Feedback = require("../models/feedbackModel");
const ErrorHander = require("../utils/errorHander");

// Providing a feedback
exports.createFeedback = async (req,res,next) => {
    const {name,age,email,comment} = req.body

    // Feedback.findOne({email:email},(err,user) => {
    //     const feedback = new Feedback({
    //         name: name,
    //         age: age,
    //         email: email,
    //         comment: comment
    //     })
    //     feedback.save((err)=>{
    //         if(err){
    //             res.status(err)
    //         } else {
    //             res.json({message: "Provided Feedback"});
    //         }
    //     })
    // })
    
    const feedback = new Feedback({name,age,email,comment});
    await feedback.save();
    res.status(201).json({
        message: "Feedback submitted successfully"
    })
}

//Getting all feedbacks -- ADMIN
exports.allFeedbacks = async (req,res,next) => {
    const feedbacks = await Feedback.find();

    res.status(200).json({
        success: true,
        feedbacks,
    });
};
