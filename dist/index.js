"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const challenge_routes_1 = __importDefault(require("./routes/challenge.routes"));
const file_utils_1 = require("./utils/file.utils");
const cors = require("cors");
const app = (0, express_1.default)();
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
app.use(cors({
    origin: "http://localhost:4200",
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    allowedHeaders: "Content-Type,Authorization",
}));
app.use(cors({
    origin: "https://tekball-softvergara-921597.netlify.app/",
    methods: "GET,POST,OPTIONS",
    allowedHeaders: "Content-Type,Authorization",
}));
app.use(body_parser_1.default.json());
app.use("/api/auth", auth_routes_1.default);
app.use("/api/challenge", challenge_routes_1.default);
(0, file_utils_1.initializeConfigFile)()
    .then(() => {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
})
    .catch((error) => {
    console.error("Error initializing config file", error);
});
