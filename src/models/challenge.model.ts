import { ChallengeResult } from "../interfaces/challengeResult.interface";
import fs from "fs-extra";
import path from "path";

const filePath = path.join(__dirname, "../db/results.json");

export const getResults = async (): Promise<ChallengeResult[]> => {
  return await fs.readJSON(filePath);
};

export const saveResults = async (
  results: ChallengeResult[]
): Promise<void> => {
  await fs.writeJSON(filePath, results);
};

export const addResult = async (result: ChallengeResult): Promise<void> => {
  const results = await getResults();
  results.push(result);
  await saveResults(results);
};

export const getResultsByUser = async (
  usuario: string
): Promise<ChallengeResult[]> => {
  const results = await getResults();
  return results.filter((result) => result.usuario === usuario);
};
