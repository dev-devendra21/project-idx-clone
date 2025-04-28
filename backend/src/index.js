import express from "express";
import { config } from "./config/serverConfig.js";
import cors from "cors";

const { PORT } = config;

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.get("/", (req, res) => {
  res.send("welcome to Code Sand Box....");
});

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
