import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { RegisterRequest, LoginRequest, IUser } from '../types/auth';

export const register = async (req: Request, res: Response) => {
  const { email, password, businessCategory }: RegisterRequest = req.body;

  if (!email || !password || !businessCategory) {
    return res
      .status(400)
      .json({ error: 'Email, password and business category are required' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      email,
      password: hashedPassword,
      businessCategory,
    });
    await user.save();

    res.status(201).json({ message: 'User registered successfully', user: { email: user.email, role: user.role, businessCategory: user.businessCategory,registeredAt: user.registeredAt } });
  } catch (error) {
    console.error('Registration error:', error); // Log the full error details
    res.status(500).json({ error: 'Registration failed' });
  }
};


export const login = async (req: Request, res: Response) => {
  const { email, password }: LoginRequest = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { _id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET as string,
      { expiresIn: '1h' }
    );

    // Return role for dashboard redirection
    res.json({ token, role: user.role });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
};
