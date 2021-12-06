const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const { isSignedIn } = require("../middlewares/authentication");
const {
  getUserById,
  getUser,
  updateUserProfile,
  changePassword,
} = require("../controllers/user");

//Params
router.param("userId", getUserById);

router.get("/user/:userId", isSignedIn, getUser);

router.put(
  "/user/:userId",
  isSignedIn,
  [
    check("firstName", "First name must not exceed 30 characters.").isLength({
      max: 30,
    }),
    check("lastName", "Last name must not exceed 30 characters.").isLength({
      max: 30,
    }),
    check("bio", "Bio must not exceed 150 characters.").isLength({ max: 150 }),
  ],
  updateUserProfile
);

router.put(
  "/user/changePassword/:userId",
  isSignedIn,
  [
    check("newPassword", "Password should be alteast 8 characters.").isLength({
      min: 8,
    }),
  ],
  changePassword
);

module.exports = router;
