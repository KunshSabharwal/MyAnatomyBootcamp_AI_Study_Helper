import { User } from "../models/user.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


const generateToken = (i) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expireIn: "7d" })
}

export const registerUser = async ({
  name, email, password
}) => {
  const userExists = await User.findOne({ email });
  if (userExists)
    throw new Error("User already exists");
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name, email, password
  });
  return {
    _id: user._id,
    name: user_name,
    email: user_email,
    token: generateToken(user._id),
  }
}