import {
  addResult,
  getResults,
  getResultsByUser,
} from "../models/challenge.model";
import { ChallengeResult } from "../interfaces/challengeResult.interface";

export const saveChallengeResult = async (
  id: string,
  usuario: string,
  n_aciertos: number,
  n_fallidos: number,
  totalPuntos: number
): Promise<void> => {
  const fechaHora = new Date().toISOString(); // Obtener la fecha y hora actual
  const result: ChallengeResult = {
    id,
    usuario,
    n_aciertos,
    n_fallidos,
    totalPuntos,
    fechaHora,
  };
  await addResult(result);
};

export const fetchAllResults = async (): Promise<ChallengeResult[]> => {
  return await getResults();
};

export const fetchResultsByUser = async (
  usuario: string
): Promise<ChallengeResult[]> => {
  return await getResultsByUser(usuario);
};
