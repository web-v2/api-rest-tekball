import express from "express";
import bodyParser from "body-parser";
import authRoutes from "./routes/auth.routes";
import challengeRoutes from "./routes/challenge.routes";
import { initializeConfigFile } from "./utils/file.utils";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

// Lista de orígenes permitidos
const allowedOrigins = [
  "http://localhost:4200",
  "https://www.netlify.com",
  "https://tekball-softvergara-921597.netlify.app",
  "https://netlify.app",
];

// Configuración de CORS
const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("No autorizado por CORS"));
    }
  },
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true 
};

// Usa el middleware CORS
app.use(cors(corsOptions));

app.get("/api", (req, res) => {
  res.json({ message: "API funcionando correctamente." });
});

app.use(bodyParser.json());
app.use("/api/auth", authRoutes);
app.use("/api/challenge", challengeRoutes);

initializeConfigFile()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error initializing config file", error);
  });
