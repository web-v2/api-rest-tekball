import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import {
  saveChallengeResult,
  fetchAllResults,
  fetchResultsByUser,
} from "../services/challenge.service";

export const saveResult = async (req: Request, res: Response) => {
  const { usuario, n_aciertos, n_fallidos, totalPuntos } = req.body;
  const id: string = uuidv4();  
  await saveChallengeResult(id, usuario, n_aciertos, n_fallidos, totalPuntos);
  res.status(201).json({ status: 200, message: "Resultado guardado exitosamente" });
};

export const getAllResults = async (req: Request, res: Response) => {
  const results = await fetchAllResults();
  res.status(200).json(results);
};

export const getResultsByUser = async (req: Request, res: Response) => {
  const { usuario } = req.params;
  const results = await fetchResultsByUser(usuario);
  res.status(200).json(results);
};
