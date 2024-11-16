import { User } from "../interfaces/user.interface";
import fs from "fs-extra";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import bcrypt from "bcrypt";

const filePath = path.join(__dirname, "../db/users.json");
const saltRounds = 10;

export const getUsers = async (): Promise<User[]> => {
  return await fs.readJSON(filePath);
};

export const saveUsers = async (users: User[]): Promise<void> => {
  await fs.writeJSON(filePath, users);
};

export const addUser = async (
  username: string,
  password: string
): Promise<User> => {
  const users = await getUsers();
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const newUser: User = { id: uuidv4(), username, password: hashedPassword };
  users.push(newUser);
  await saveUsers(users);
  return newUser;
};

export const findUserByUsername = async (
  username: string
): Promise<User | undefined> => {
  const users = await getUsers();
  return users.find((user) => user.username === username);
};
