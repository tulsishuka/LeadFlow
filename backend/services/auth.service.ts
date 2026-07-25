import bcrypt from "bcryptjs";
import User from "../models/User";
import generateToken from "../utils/generateToken";

export const registerUser = async (
  name: string,
  email: string,
  password: string,
  role: "admin" | "member"
) => {

  const existing = await User.findOne({ email });

  if (existing) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role,
  });

  return {
    token: generateToken(user.id),
    user,
  };
};

export const loginUser = async (
  email: string,
  password: string
) => {

  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const match = await bcrypt.compare(
    password,
    user.password
  );

  if (!match) {
    throw new Error("Invalid credentials");
  }

  return {
    token: generateToken(user.id),
    user,
  };
};