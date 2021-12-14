import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`);
});
