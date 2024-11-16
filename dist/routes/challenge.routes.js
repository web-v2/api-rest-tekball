"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const challenge_controller_1 = require("../controllers/challenge.controller");
const router = (0, express_1.Router)();
router.post('/results', challenge_controller_1.saveResult);
router.get('/results', challenge_controller_1.getAllResults);
router.get('/results/user/:usuario', challenge_controller_1.getResultsByUser);
exports.default = router;
