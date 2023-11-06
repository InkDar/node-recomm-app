import { Router, Request, Response } from "express";
import User from "../users/user.js";
import { findOne, findAll } from "../users/user.service.js";
const userRouter = Router();

userRouter.get("/user/:id", async (req: Request, res: Response) => {
  if (req.params.id) {
    const data = await findOne();
    return res.status(200).send(data);
  } else {
    const data = await findAll();
    return res.status(200).send(data);
  }
});

export default userRouter;
