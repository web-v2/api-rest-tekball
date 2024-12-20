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
exports.initializeConfigFile = void 0;
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const filePathConfig = path_1.default.join(__dirname, "../db/users.json");
const filePathResults = path_1.default.join(__dirname, "../db/results.json");
const initializeConfigFile = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!(yield fs_extra_1.default.pathExists(filePathConfig))) {
        yield fs_extra_1.default.writeJSON(filePathConfig, []);
    }
    if (!(yield fs_extra_1.default.pathExists(filePathResults))) {
        yield fs_extra_1.default.writeJSON(filePathResults, []);
    }
});
exports.initializeConfigFile = initializeConfigFile;
