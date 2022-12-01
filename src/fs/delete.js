import { __dirname, errMessage } from './utils.js';
import { join } from 'node:path';
import { rm } from 'node:fs/promises';

const remove = async () => {
  try {
    const pathFile = join(__dirname, 'files', 'fileToRemove.txt');
    await rm(pathFile);
  } catch (error) {
    throw new Error(errMessage);
  };
};

await remove();