const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { isSignedIn } = require("../middlewares/authentication");
const { getQuestionById } = require("../controllers/question");
const {
  addOpinion,
  getOpinionById,
  updateOpinion,
  deleteOpinion,
  getOpinionByQuestionId,
} = require("../controllers/opinion");

//Params
router.param("questionId", getQuestionById);
router.param("opinionId", getOpinionById);

//CRUD - opinion
router.get("/opinion/:questionId", isSignedIn, getOpinionByQuestionId);
router.post(
  "/opinion/:questionId",
  [
    check(
      "opinionContent",
      "Opinion should contain atleast 5 characters."
    ).isLength({ min: 5 }),
  ],
  isSignedIn,
  addOpinion
);
router.put(
  "/opinion/:questionId/:opinionId",
  isSignedIn,
  [
    check(
      "opinionContent",
      "Opinion should contain atleast 5 characters."
    ).isLength({ min: 5 }),
  ],
  updateOpinion
);
router.delete("/opinion/:questionId/:opinionId", isSignedIn, deleteOpinion);

module.exports = router;
