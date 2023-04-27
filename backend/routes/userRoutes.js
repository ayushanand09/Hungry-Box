const express = require("express");
const { registerUser, loginUser, logout, forgotPassword, resetPassword, getUserDetail, updateUserPassword, updateUserProfile, getAllUsers, updateProfile, deleteProfile, getSingleUser, showAboutMe, showName } = require("../controllers/userController");
const {isAuthenticatedUser, authorizeRoles} = require("../middleware/auth");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/logout").get(logout);


router.route("/name").get(isAuthenticatedUser, showName);
router.route("/aboutme").get(isAuthenticatedUser, showAboutMe);
// router.route("/user").get(isAuthenticatedUser, getUserDetail);
router.route("/password/update").put(isAuthenticatedUser, updateUserPassword);
router.route("/userUpdate/update").put(isAuthenticatedUser, updateUserProfile);

//Finds all the users in database
router.route("/admin/users").get(isAuthenticatedUser, getAllUsers);
//Can delete any user based on their id
router.route("/admin/singleUser/:id").delete(isAuthenticatedUser, deleteProfile);
//Can see the details of any particular user
router.route("/admin/singleUser/:id").get(isAuthenticatedUser, getSingleUser);
// Can change the role of any user based on their id
router.route("/admin/singleUser/:id").put(isAuthenticatedUser, updateProfile);

module.exports = router;