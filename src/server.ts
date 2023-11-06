import express, { Request, Response } from "express";
import mongoose from "mongoose";
import userRouter from "./routes/users.js";
import "dotenv/config";

const app = express();
const port = process.env.PORT;
const dbAddress = process.env.DB_PORT;
const dbName = process.env.DB_NAME;

try {
  await mongoose.connect(`mongodb://${dbAddress}/${dbName}`);
} catch (error) {
  console.log(error);
}

app.use(userRouter);

app.get("/", (req: Request, res: Response) => {
  return res.status(200).send("<h1> Hello From Express/Ts </h1>");
});

app.listen(port, () => {
  console.log(`server is up and running on localhost:${port}`);
});
