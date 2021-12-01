const jwt = require("jsonwebtoken");
const { CONSTANTS } = require("../utils/constants");

exports.isSignedIn = async (req, res, next) => {
  try {
    const tokenHeader = req.headers.authorization.split("Bearer ")[1];

    if (!tokenHeader) {
      return res.status(400).json({ error: "No token found." });
    }

    let user = await jwt.verify(tokenHeader, CONSTANTS.secret_key);

    req.user = user.email;
    next();
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
