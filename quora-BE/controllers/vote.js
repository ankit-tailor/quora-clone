const { PrismaClient } = require("@prisma/client");
const PRISMA_CLIENT = new PrismaClient();

exports.upVote = async (req, res) => {
  try {
    const votes = req.opinion.votes;
    const user = votes.find(
      (vote) =>
        vote.authorId === Number(req.profile.id) &&
        vote.opinionId === Number(req.opinion.id)
    );

    if (!user) {
      const vote = await PRISMA_CLIENT.vote.create({
        data: {
          authorId: Number(req.profile.id),
          opinionId: Number(req.opinion.id),
          vote: true,
        },
      });

      return res.json({ message: "Upvoted opinion successfully.", vote });
    } else if (user && !user.vote) {
      const vote = await PRISMA_CLIENT.vote.update({
        where: {
          id: user.id,
        },
        data: {
          authorId: Number(req.profile.id),
          opinionId: Number(req.opinion.id),
          vote: true,
        },
      });

      return res.json({ message: "Upvoted opinion successfully.", vote });
    } else {
      const vote = await PRISMA_CLIENT.vote.delete({
        where: {
          id: user.id,
        },
      });

      return res.json({
        message: "Removed upvote from opinion successfully.",
        vote,
      });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.downVote = async (req, res) => {
  try {
    const votes = req.opinion.votes;
    const user = votes.find((vote) => vote.authorId === Number(req.profile.id));

    if (!user) {
      const vote = await PRISMA_CLIENT.vote.create({
        data: {
          authorId: Number(req.profile.id),
          opinionId: Number(req.opinion.id),
          vote: false,
        },
      });

      return res.json({ message: "Downvoted opinion successfully.", vote });
    } else if (user && user.vote) {
      const vote = await PRISMA_CLIENT.vote.update({
        where: {
          id: user.id,
        },
        data: {
          authorId: Number(req.profile.id),
          opinionId: Number(req.opinion.id),
          vote: false,
        },
      });

      return res.json({ message: "Downvoted opinion successfully.", vote });
    } else {
      const vote = await PRISMA_CLIENT.vote.delete({
        where: {
          id: user.id,
        },
      });
      return res.json({
        message: "Removed downvote from opinion successfully.",
        vote,
      });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
