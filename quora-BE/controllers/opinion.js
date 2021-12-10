const { PrismaClient } = require("@prisma/client");
const { validationResult } = require("express-validator");

const PRISMA_CLIENT = new PrismaClient();

exports.getOpinionById = async (req, res, next, id) => {
  try {
    const opinion = await PRISMA_CLIENT.opinion.findUnique({
      where: {
        id: Number(id),
      },
      select: {
        opinionContent: true,
        createdAt: true,
        votes: true,
        id: true,
      },
    });

    if (!opinion) {
      return res.stauts(404).json({ error: "Opinion does not exist." });
    }
    req.opinion = opinion;
    next();
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getOpinionByQuestionId = async (req, res) => {
  try {
    const opinion = await PRISMA_CLIENT.opinion.findMany({
      include: { votes: true },
      where: {
        questionId: Number(req.question.id),
      },
    });

    if (!opinion) {
      return res.status(404).json({ error: "There are no opinions to show." });
    }

    res.json(opinion);
  } catch (err) {
    res.stauts(500).json({ error: err });
  }
};

exports.addOpinion = async (req, res) => {
  try {
    const { opinionContent } = req.body;

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
      opinionContent: opinionContent,
      authorId: user.id,
      questionId: req.question.id,
    };
    const opinion = await PRISMA_CLIENT.opinion.create({
      data: payload,
    });

    if (!opinion) {
      return res.status(400).json({
        error: "Failed to add opinion, please check your opinion content.",
      });
    }

    res.json(opinion);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.updateOpinion = async (req, res) => {
  try {
    const { opinionContent } = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const updatedOpinion = await PRISMA_CLIENT.opinion.update({
      where: {
        id: Number(req.opinion.id),
      },
      data: {
        opinionContent: opinionContent,
      },
    });

    if (!updatedOpinion) {
      return res.stauts(400).json({
        error: "Failed to update opinion, please check your opinion content.",
      });
    }

    res.json({ message: "Updated opinion successfully.", updatedOpinion });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.deleteOpinion = async (req, res) => {
  try {
    const opinion = await PRISMA_CLIENT.opinion.delete({
      where: {
        id: req.opinion.id,
      },
    });

    if (!opinion) {
      return res.status(404).json({
        error:
          "Failed to delete opinion, opinion does not exist or it's already deleted!",
      });
    }

    res.json({ message: "Delted opinion successfully.", opinion });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
