import express, { Request, Response } from "express";
import "dotenv/config";

const app = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  return res.status(200).send("<h1> Hello From Express/Ts </h1>");
});

app.listen(port, () => {
  console.log(`server is up and running on localhost:${port}`);
});
