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
exports.getResultsByUser = exports.getAllResults = exports.saveResult = void 0;
const uuid_1 = require("uuid");
const challenge_service_1 = require("../services/challenge.service");
const saveResult = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { usuario, n_aciertos, n_fallidos, totalPuntos } = req.body;
    const id = (0, uuid_1.v4)();
    yield (0, challenge_service_1.saveChallengeResult)(id, usuario, n_aciertos, n_fallidos, totalPuntos);
    res.status(201).json({ status: 200, message: "Resultado guardado exitosamente" });
});
exports.saveResult = saveResult;
const getAllResults = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield (0, challenge_service_1.fetchAllResults)();
    res.status(200).json(results);
});
exports.getAllResults = getAllResults;
const getResultsByUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { usuario } = req.params;
    const results = yield (0, challenge_service_1.fetchResultsByUser)(usuario);
    res.status(200).json(results);
});
exports.getResultsByUser = getResultsByUser;
