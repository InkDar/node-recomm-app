import { Router, Request, Response } from "express";
import User from "../users/user.js";
import mongoose from "mongoose";
import { findOne, findAll } from "../users/user.service.js";
const userRouter = Router();

userRouter.get("/user", async (req: Request, res: Response) => {
  const data = await findAll();
  return res.status(200).send(data);
});

userRouter.get("/user/:id", async (req: Request, res: Response) => {
  const data = await findOne(req.params.id);
  return res.status(200).send(data);
});

export default userRouter;
