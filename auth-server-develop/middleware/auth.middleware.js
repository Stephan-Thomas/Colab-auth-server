import jwt from "jsonwebtoken";
import config from "../config/config.js";
import { ForbiddenError } from "./error.js";

const authMiddleware = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;
  console.log(authorizationHeader);
  if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Access token is missing" });
  }
  const tokens = authorizationHeader.split(" ")[1];
  // const verification = jwt.verify(tokens, config.jwt.accessToken.secret);
  jwt.verify(tokens, config.jwt.accessToken.secret, function (err, decoded) {
    if (err) {
      throw new ForbiddenError(`Token is invalid or tampered: ${err.message}`);
    }

    next();
  });
};

export default authMiddleware;
