const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { signup, signin } = require("../controllers/authentication");
const { isSignedIn } = require("../middlewares/authentication");

router.post(
  "/signup",
  [
    check("email", "Please provide a valid email.").isEmail(),
    check("password", "Password should be alteast 8 characters.").isLength({
      min: 8,
    }),
  ],
  signup
);

router.post(
  "/signin",
  [
    check("email", "Please provide a valid email.").isEmail(),
    check("password", "Password should be alteast 8 characters.").isLength({
      min: 8,
    }),
  ],
  signin
);

module.exports = router;
