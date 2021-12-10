const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const {
  getAllQuestions,
  addQuestion,
  getQuestionById,
  updateQuestion,
  deleteQuestion,
  getQuestion,
} = require("../controllers/question");
const { isSignedIn } = require("../middlewares/authentication");

router.param("questionId", getQuestionById);

//All questions route
router.get("/getAllQuestions", getAllQuestions);

//Route for single question
router.get("/question/:questionId", getQuestion);
router.post(
  "/question",
  isSignedIn,
  [
    check(
      "questionTitle",
      "Question should contain atleast 5 characters."
    ).isLength({
      min: 5,
    }),
  ],
  addQuestion
);
router.put(
  "/question/:questionId",
  isSignedIn,
  [
    check(
      "questionTitle",
      "Question should contain atleast 5 characters."
    ).isLength({
      min: 5,
    }),
  ],
  updateQuestion
);
router.delete("/question/:questionId", isSignedIn, deleteQuestion);

module.exports = router;
