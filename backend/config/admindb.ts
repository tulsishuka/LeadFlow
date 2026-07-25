import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "../models/User";

dotenv.config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);

    const exists = await User.findOne({
      email: "admin@leadflow.com",
    });

    if (exists) {
      console.log("Admin already exists");
      process.exit();
    }

    const password = await bcrypt.hash("Admin@123", 10);

    await User.create({
      name: "Riya",
      email: "admin@leadflow.com",
      password,
      role: "admin",
    });

    console.log("Admin created successfully");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

createAdmin();