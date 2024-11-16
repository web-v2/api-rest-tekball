"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const challenge_routes_1 = __importDefault(require("./routes/challenge.routes"));
const file_utils_1 = require("./utils/file.utils");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Lista de orígenes permitidos
const allowedOrigins = [
    "http://localhost:4200",
    "https:www.netlify.com/",
    "https://tekball-softvergara-921597.netlify.app/",
    "https://netlify.app/",
];
// Configuración de CORS
const corsOptions = {
    origin: (origin, callback) => {
        // Permitir solicitudes sin origen (e.g., desde herramientas como Postman)
        if (!origin)
            return callback(null, true);
        // Verifica si el origen está en la lista permitida
        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        }
        else {
            callback(new Error("No autorizado por CORS"));
        }
    },
};
// Usa el middleware CORS
app.use((0, cors_1.default)(corsOptions));
// Rutas de ejemplo
app.get("/api", (req, res) => {
    res.json({ message: "API funcionando correctamente." });
});
/* app.use(
  cors({
    origin: "http://localhost:4200",
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    allowedHeaders: "Content-Type,Authorization",
  })
); */
app.use(body_parser_1.default.json());
app.use("/api/auth", auth_routes_1.default);
app.use("/api/challenge", challenge_routes_1.default);
(0, file_utils_1.initializeConfigFile)()
    .then(() => {
    app.listen(port, () => {
        console.log(`Server running on port:${port}`);
    });
})
    .catch((error) => {
    console.error("Error initializing config file", error);
});
