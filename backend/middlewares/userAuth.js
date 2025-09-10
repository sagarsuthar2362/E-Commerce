import jwt from 'jsonwebtoken'

export const userAuth = (req, res, next) => {
    console.log(req)
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    throw { status: 401, message: "Unauthorized access" };
  }
  const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

  if (!token || !decoded) {
    throw { status: 401, message: "Unauthorized access" };
  }
    req.user = decoded;
    console.log(decoded)
  next();
};
