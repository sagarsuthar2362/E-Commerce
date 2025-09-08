import jwt from "jsonwebtoken";

export const adminAuth = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    throw { status: 401, message: "Unauthorized access" };
  }
  const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

  if (!token || !decoded) {
    throw { status: 401, message: "Unauthorized access" };
  }
  req.user = decoded;
  next();
};
