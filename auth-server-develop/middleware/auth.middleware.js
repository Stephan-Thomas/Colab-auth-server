import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;
  console.log(authorizationHeader);
  if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Authorization header is missing" });
  }
  next();
};

export default authMiddleware;
