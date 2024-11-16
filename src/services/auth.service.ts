import { addUser, findUserByUsername, getUsers } from '../models/user.model';
import { User } from '../interfaces/user.interface';
import bcrypt from 'bcrypt'

export const register = async (username: string, password: string): Promise<User | null> => {
  const existingUser = await findUserByUsername(username);
  if (existingUser) {
    return null;
  }
  return await addUser(username, password);
};

export const authenticate = async (username: string, password: string): Promise<User | null> => {
  const user = await findUserByUsername(username);
  if (user && await bcrypt.compare(password, user.password)) {
    return user;
  }
  return null;
};


export const getAllUsernames = async (): Promise<string[]> => { 
    const users = await getUsers(); 
    return users.map(user => user.username); 
};
