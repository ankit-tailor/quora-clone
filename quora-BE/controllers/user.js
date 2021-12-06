const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const { CONSTANTS } = require("../utils/constants");

const PRISMA_CLIENT = new PrismaClient();

exports.getUserById = async (req, res, next, id) => {
  try {
    let user = await PRISMA_CLIENT.user.findUnique({
      where: { id: Number(id) },
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

exports.updateUserProfile = async (req, res) => {
  try {
    const userId = req.profile.id;
    const { firstName, lastName, bio } = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const payload = {
      firstName,
      lastName,
      bio,
    };

    const user = await PRISMA_CLIENT.user.update({
      where: {
        id: userId,
      },
      data: payload,
      select: { firstName: true, lastName: true, bio: true },
    });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors });
    }

    const user = await PRISMA_CLIENT.user.findUnique({
      where: {
        email: req.user,
      },
    });

    if (!user) {
      return res.status(404).json({ error: "Email does not exist." });
    }

    const isPasswordMatch = await bcrypt.compare(
      currentPassword,
      user.password
    );

    if (!isPasswordMatch) {
      return res.status(404).json({ error: "Your old password is incorrect." });
    }

    if (isPasswordMatch && currentPassword === newPassword) {
      return res
        .status(400)
        .json({ error: "Your new password should not match old password." });
    }

    const newHashedPassword = await bcrypt.hash(newPassword, 10);
    const updatedUser = await PRISMA_CLIENT.user.update({
      where: {
        email: req.user,
      },
      data: {
        password: newHashedPassword,
      },
    });

    const token = await JWT.sign({ email: req.user }, CONSTANTS.secret_key, {
      expiresIn: CONSTANTS.JWT_token_expiry_time,
    });

    res.json({ message: "The password has been changed successfully.", token });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
