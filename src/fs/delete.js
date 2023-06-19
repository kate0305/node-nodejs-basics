import { getPath, errMessage } from '../utils.js';
import { join } from 'node:path';
import { rm } from 'node:fs/promises';

const remove = async () => {
  try {
    const pathFile = join(getPath(import.meta.url), 'files', 'fileToRemove.txt');
    await rm(pathFile);
    console.log('File deleted!')
  } catch (error) {
    throw new Error(errMessage);
  };
};

await remove();