"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listUsernames = exports.loginUser = exports.registerUser = void 0;
const auth_service_1 = require("../services/auth.service");
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const user = yield (0, auth_service_1.register)(username, password);
    if (user) {
        res.status(201).json(user.username);
    }
    else {
        res.status(400).json({ status: 400, message: 'User already exists' });
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const user = yield (0, auth_service_1.authenticate)(username, password);
    if (user) {
        res.status(200).json(user);
    }
    else {
        res.status(401).json({ status: 404, message: 'Invalid credentials' });
    }
});
exports.loginUser = loginUser;
const listUsernames = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usernames = yield (0, auth_service_1.getAllUsernames)();
    res.status(200).json(usernames);
});
exports.listUsernames = listUsernames;
