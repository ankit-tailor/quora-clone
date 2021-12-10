const express = require("express");
const { getOpinionById } = require("../controllers/opinion");
const router = express.Router();
const { getUserById } = require("../controllers/user");
const { upVote, downVote } = require("../controllers/vote");
const { isSignedIn } = require("../middlewares/authentication");

// params
router.param("opinionId", getOpinionById);
router.param("userId", getUserById);

router.post("/upvote/:opinionId/:userId", isSignedIn, upVote);
router.post("/downvote/:opinionId/:userId", isSignedIn, downVote);

module.exports = router;
