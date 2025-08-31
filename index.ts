import express, { type Request, type Response } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "running" });
});

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
