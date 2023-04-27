const express = require("express");
// const { registerUser, loginUser, showName, showAboutMe, registerEmp } = require("../controllers/employeeController");
const { loginUser, showName, showAboutMe, registerEmp } = require("../controllers/employeeController");
const {isAuthenticatedUser, authorizeRoles} = require("../middleware/auth");
const router = express.Router();

router.route("/register").post(registerEmp);
router.route("/login").post(loginUser);
router.route("/empname").get(isAuthenticatedUser, showName);
router.route("/aboutemp").get(isAuthenticatedUser, showAboutMe);

// router.route("/password/forgot").post(forgotPassword);
// router.route("/password/reset/:token").put(resetPassword);
// router.route("/logout").get(logout);

// router.route("/user").get(isAuthenticatedUser, getUserDetail);
// router.route("/password/update").put(isAuthenticatedUser, updateUserPassword);
// router.route("/userUpdate/update").put(isAuthenticatedUser, updateUserProfile);


//Finds all the users in database
// router.route("/admin/users").get(isAuthenticatedUser, authorizeRoles ("admin") ,getAllUsers);
//Can see the details of any particular user
// router.route("/admin/singleUser/:id").get(isAuthenticatedUser, authorizeRoles ("admin"),getSingleUser);
// Can change the role of any user based on their id
// router.route("/admin/singleUser/:id").put(isAuthenticatedUser,authorizeRoles("admin"), updateProfile);
// Can delete any user based on their id
// router.route("/admin/singleUser/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProfile);

module.exports = router;