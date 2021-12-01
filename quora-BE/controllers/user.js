const { PrismaClient } = require("@prisma/client");
const DB_REFRENCE = new PrismaClient();

exports.getUserById = async (req, res, next) => {
  try {
    const { userId } = req.params;
    let user = await DB_REFRENCE.user.findUnique({
      where: { id: Number(userId) },
      select: { password: false, email: true, id: true },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    req.profile = user;
    next();
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getUser = (req, res) => {
  res.json(req.profile);
};
