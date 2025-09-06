import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, { expiresIn: "7d" });
};

export const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (!userExists) {
      throw { status: 404, message: "User not found" };
    } else {
      let comparePassword = await bcrypt.compare(password, userExists.password);
      if (!comparePassword) {
        throw { status: 401, message: "Invalid credentials" };
      } else {
        const token = generateToken(userExists._id);
        return res.status(200).json({
          message: "You can login",
          token,
        });
      }
    }
  } catch (error) {
    next(error);
  }
};

export const Register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const userExists = await User.findOne({ email: email.toLowerCase() });
    if (!userExists) {
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await User.create({
        username,
        email,
        password: hashedPassword,
      });

      const token = generateToken(newUser._id);

      res.status(201).json({
        message: "User created successfully!!",
        user: {
          id: newUser._id,
          username: newUser.username,
          email: newUser.email,
        },
        token,
      });
    } else {
      throw { status: 400, message: "User already registered" };
    }
  } catch (error) {
    next(error);
  }
};

export const AdminLogin = async (req, res, next) => {};
