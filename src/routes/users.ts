import { Router, Request, Response } from "express";
import { findOne, findAll } from "../users/user.service.js";

const userRouter = Router();

userRouter.get("/user/list/:page", async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.params.page);
    const data = await findAll(page);
    return res.status(200).send(data);
  } catch (error) {
    throw new Error("Wrong page number selected");
  }
});

userRouter.get("/user/:id", async (req: Request, res: Response) => {
  const data = await findOne(req.params.id);
  return res.status(200).send(data);
});

export default userRouter;
