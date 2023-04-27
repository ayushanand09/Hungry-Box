const express = require("express");
const router = express.Router();
const { createFeedback, allFeedbacks } = require("../controllers/feedbackController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/feedback/new").post(createFeedback);

router.route("/admin/feedbacks").get(isAuthenticatedUser, authorizeRoles("admin"),allFeedbacks);

module.exports = router;