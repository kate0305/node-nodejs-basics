import { __dirname, errMessage, exist } from './utils.js';
import { join } from 'node:path';
import { rename as renameFile } from 'node:fs/promises';

const rename = async () => {
  const pathOldFile = join(__dirname, 'files', 'wrongFilename.txt');
  const pathNewFile = join(__dirname, 'files', 'properFilename.md');
  
  try {
    if (await exist(pathNewFile)) throw new Error(errMessage);
    await renameFile(pathOldFile, pathNewFile);
  } catch (error) {
    throw new Error(errMessage);
  }
};

await rename();