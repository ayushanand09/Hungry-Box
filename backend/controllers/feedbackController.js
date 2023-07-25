const Feedback = require("../models/feedbackModel");
const ErrorHander = require("../utils/errorHander");

// Providing a feedback
exports.createFeedback = async (req,res,next) => {
    const {name,age,email,comment} = req.body
        
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
