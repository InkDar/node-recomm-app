import User from "./user.js";
import mongoose from "mongoose";

const findOne = async (id: string) => {
  const _id = new mongoose.Types.ObjectId(id);
  const user = await User.findOne({ _id });
  return user;
};

const findAll = async (i: number) => {
  const users = await User.find()
    .skip((i - 1) * 10)
    .limit(10);
  return users;
};

export { findOne, findAll };
