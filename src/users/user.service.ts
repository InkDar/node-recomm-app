import IUser from "./user.interface.js";
import User from "./user.js";

const findOne = async () => {
  const user = await User.findOne();
  return user;
};

const findAll = async () => {
  const users = await User.find().limit(10);
  return users;
};

export { findOne, findAll };
