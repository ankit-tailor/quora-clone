const express = require("express");
const router = express.Router();
const { isSignedIn } = require("../middlewares/authentication");
const { getUserById, getUser } = require("../controllers/user");

//Params
router.param("userId", getUserById);

router.get("/user/:userId", isSignedIn, getUser);

module.exports = router;
