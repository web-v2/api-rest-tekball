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
exports.getResultsByUser = exports.addResult = exports.saveResults = exports.getResults = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const filePath = path_1.default.join(__dirname, "../db/results.json");
const getResults = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield fs_extra_1.default.readJSON(filePath);
});
exports.getResults = getResults;
const saveResults = (results) => __awaiter(void 0, void 0, void 0, function* () {
    yield fs_extra_1.default.writeJSON(filePath, results);
});
exports.saveResults = saveResults;
const addResult = (result) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield (0, exports.getResults)();
    results.push(result);
    yield (0, exports.saveResults)(results);
});
exports.addResult = addResult;
const getResultsByUser = (usuario) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield (0, exports.getResults)();
    return results.filter((result) => result.usuario === usuario);
});
exports.getResultsByUser = getResultsByUser;
