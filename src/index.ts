import express from "express";
import bodyParser from "body-parser";
import authRoutes from "./routes/auth.routes";
import challengeRoutes from "./routes/challenge.routes";
import { initializeConfigFile } from "./utils/file.utils";
const cors = require("cors");

const app = express();
const port = 3000;

app.use(
  cors({
    origin: "http://localhost:4200",
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    allowedHeaders: "Content-Type,Authorization",
  })
);

app.use(
  cors({
    origin: "https://tekball-softvergara-921597.netlify.app/",
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    allowedHeaders: "Content-Type,Authorization",
  })
);

app.use(bodyParser.json());
app.use("/api/auth", authRoutes);
app.use("/api/challenge", challengeRoutes);

initializeConfigFile()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Error initializing config file", error);
  });
