import express, { Request, Response } from "express";
import mongoose from "mongoose";
import userRouter from "./routes/users.js";
import movieRouter from "./routes/movies.js";
import "dotenv/config";

const app = express();
const port = process.env.PORT;
const dbAddress = process.env.DB_URL;
const dbUser = process.env.DB_USERNAME;
const dbPass = process.env.DB_PASS;

try {
  await mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@${dbAddress}`);
} catch (error) {
  console.log(error);
}

app.use(userRouter);
app.use(movieRouter);

app.get("/", (req: Request, res: Response) => {
  return res.status(200).send("<h1> Hello From Express/Ts </h1>");
});

app.listen(port, () => {
  console.log(`server is up and running on localhost:${port}`);
});
