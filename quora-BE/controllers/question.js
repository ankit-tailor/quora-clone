const { PrismaClient } = require("@prisma/client");
const { validationResult } = require("express-validator");

const PRISMA_CLIENT = new PrismaClient();

exports.getAllQuestions = async (req, res) => {
  try {
    const questions = await PRISMA_CLIENT.question.findMany({});
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getQuestionById = async (req, res, next, id) => {
  try {
    const question = await PRISMA_CLIENT.question.findUnique({
      where: {
        id: Number(id),
      },
      select: {
        id: true,
        questionTitle: true,
        opinion: true,
        authorId: true,
        createdAt: true,
      },
    });

    if (!question) {
      return res.status(404).json({ error: "Question does not exist." });
    }

    req.question = question;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getQuestion = async (req, res) => {
  res.json(req.question);
};

exports.addQuestion = async (req, res) => {
  try {
    const { questionTitle } = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const user = await PRISMA_CLIENT.user.findUnique({
      where: {
        email: req.user,
      },
      select: { id: true },
    });

    const payload = {
      questionTitle: questionTitle,
      authorId: user.id,
    };

    const question = await PRISMA_CLIENT.question.create({
      data: payload,
    });

    res.json({ message: "Added question successfully.", question });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.updateQuestion = async (req, res) => {
  try {
    const { questionTitle } = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const updatedQuestion = await PRISMA_CLIENT.question.update({
      where: {
        id: Number(req.question.id),
      },
      data: {
        questionTitle: questionTitle,
      },
    });

    if (!updatedQuestion) {
      return res.status(400).json({
        error: "Failed to update question, please check your question.",
      });
    }

    res.json({ message: "Updated question successfully. ", updatedQuestion });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.deleteQuestion = async (req, res) => {
  try {
    const question = await PRISMA_CLIENT.question.findUnique({
      where: {
        id: Number(req.question.id),
      },
    });

    await PRISMA_CLIENT.question.delete({
      where: {
        id: question.id,
      },
    });

    res.json({ message: "Deleted question successfully.", question });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
