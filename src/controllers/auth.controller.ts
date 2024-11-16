import { Request, Response } from 'express';
import { register, authenticate, getAllUsernames } from '../services/auth.service';

export const registerUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await register(username, password);
  if (user) {
    res.status(201).json(user.username);
  } else {
    res.status(400).json({status: 400, message: 'User already exists' });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await authenticate(username, password);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(401).json({ status: 404, message: 'Invalid credentials' });
  }


};

export const listUsernames = async (req: Request, res: Response) => { 
    const usernames = await getAllUsernames(); res.status(200).json(usernames); 
};


