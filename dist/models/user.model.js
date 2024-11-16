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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserByUsername = exports.addUser = exports.saveUsers = exports.getUsers = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const uuid_1 = require("uuid");
const path_1 = __importDefault(require("path"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const filePath = path_1.default.join(__dirname, '../../config.json');
const saltRounds = 10;
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield fs_extra_1.default.readJSON(filePath);
});
exports.getUsers = getUsers;
const saveUsers = (users) => __awaiter(void 0, void 0, void 0, function* () {
    yield fs_extra_1.default.writeJSON(filePath, users);
});
exports.saveUsers = saveUsers;
const addUser = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, exports.getUsers)();
    const hashedPassword = yield bcrypt_1.default.hash(password, saltRounds);
    const newUser = { id: (0, uuid_1.v4)(), username, password: hashedPassword };
    users.push(newUser);
    yield (0, exports.saveUsers)(users);
    return newUser;
});
exports.addUser = addUser;
const findUserByUsername = (username) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, exports.getUsers)();
    return users.find(user => user.username === username);
});
exports.findUserByUsername = findUserByUsername;
