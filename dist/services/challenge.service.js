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
exports.fetchResultsByUser = exports.fetchAllResults = exports.saveChallengeResult = void 0;
const challenge_model_1 = require("../models/challenge.model");
const saveChallengeResult = (id, usuario, n_aciertos, n_fallidos, totalPuntos) => __awaiter(void 0, void 0, void 0, function* () {
    const fechaHora = new Date().toISOString(); // Obtener la fecha y hora actual
    const result = {
        id,
        usuario,
        n_aciertos,
        n_fallidos,
        totalPuntos,
        fechaHora,
    };
    yield (0, challenge_model_1.addResult)(result);
});
exports.saveChallengeResult = saveChallengeResult;
const fetchAllResults = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, challenge_model_1.getResults)();
});
exports.fetchAllResults = fetchAllResults;
const fetchResultsByUser = (usuario) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, challenge_model_1.getResultsByUser)(usuario);
});
exports.fetchResultsByUser = fetchResultsByUser;
