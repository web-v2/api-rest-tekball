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
  const getFechaHoraBogota = (): string => {
    const fechaActual = new Date();
    const opciones: Intl.DateTimeFormatOptions = {
      timeZone: "America/Bogota",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };
    return new Intl.DateTimeFormat("es-CO", opciones).format(fechaActual);
  };

  const result: ChallengeResult = {
    id,
    usuario,
    n_aciertos,
    n_fallidos,
    totalPuntos,
    fechaHora: getFechaHoraBogota(),
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
