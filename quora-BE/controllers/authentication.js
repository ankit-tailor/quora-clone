const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const { PrismaClient } = require("@prisma/client");
const PRISMA_CLIENT = new PrismaClient();

const { CONSTANTS } = require("../utils/constants");

exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const user = await PRISMA_CLIENT.user.findUnique({
      where: { email: email },
    });

    if (user) {
      return res.status(400).json({ error: "The email already exist." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await PRISMA_CLIENT.user.create({
      data: {
        email: email,
        password: hashedPassword,
      },
      select: { email: true },
    });

    if (!newUser) {
      return res.status(404).json({
        message:
          "Failed to signup user, something went wrong at our end please try again.",
      });
    }

    const token = await JWT.sign({ email }, CONSTANTS.secret_key, {
      expiresIn: CONSTANTS.JWT_token_expiry_time,
    });

    res.json({ ...newUser, token });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const user = await PRISMA_CLIENT.user.findUnique({
      where: { email: email },
    });

    if (!user) {
      return res.status(400).json({ error: "Email does not exist." });
    }

    const isCredentialsMatch = await bcrypt.compare(password, user.password);

    if (!isCredentialsMatch) {
      return res
        .status(400)
        .json({ error: "Email and password does not match." });
    }

    const token = await JWT.sign({ email }, CONSTANTS.secret_key, {
      expiresIn: CONSTANTS.JWT_token_expiry_time,
    });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
