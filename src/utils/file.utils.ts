import path from 'path';
import fs from 'fs-extra';

const filePathConfig = path.join(__dirname, '../../config.json');
const filePathResults = path.join(__dirname, '../../Results.json');

export const initializeConfigFile = async () => {
  if (!(await fs.pathExists(filePathConfig))) {
    await fs.writeJSON(filePathConfig, []);
  }
  if (!(await fs.pathExists(filePathResults))) {
    await fs.writeJSON(filePathResults, []);
  }
};
