import IUser from "./user.interface.js";
import User from "./user.js";
import mongoose from "mongoose";

const findOne = async (id: string) => {
  const _id = new mongoose.Types.ObjectId(id);
  const user = await User.findOne({ _id });
  return user;
};

const findAll = async () => {
  const users = await User.find().limit(10);
  return users;
};

export { findOne, findAll };
