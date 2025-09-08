import { Request, Response } from "express";
import userModel from "../models/userModel";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"; // bcryptjs works better with TS/Node
import { z } from "zod";

// Utility function to create JWT
const createToken = (id: string): string => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is missing in the environment variables.");
  }
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// ---------------------- Zod Schemas ----------------------
const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

// ---------------------- Login User ----------------------
const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = loginSchema.parse(req.body); // Validate input

    const user = await userModel.findOne({ email });
    if (!user) {
      res.json({ success: false, message: "User doesn't exist" });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.json({ success: false, message: "Invalid credentials" });
      return;
    }

    const token = createToken(user._id.toString());
    res.json({ success: true, token });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      res.json({ success: false, message: error.issues.map(e => e.message).join(", ") });
      return;
    }
    console.error(error);
    res.json({ success: false, message: "Error" });
  }
};

// ---------------------- Register User ----------------------
const registerUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password } = registerSchema.parse(req.body); // Validate input

    // Check if user already exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      res.json({ success: false, message: "User already exists" });
      return;
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id.toString());
    res.json({ success: true, token });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      res.json({ success: false, message: error.issues.map(e => e.message).join(", ") });
      return;
    }
    console.error(error);
    res.json({ success: false, message: "Error" });
  }
};

export { loginUser, registerUser };
