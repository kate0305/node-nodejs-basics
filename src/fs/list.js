import { getPath, errMessage } from '../utils.js';
import { join } from 'node:path';
import { readdir } from 'node:fs/promises';

const list = async () => {
    try {
      const pathFile = join(getPath(import.meta.url), 'files');
      const listFiles = await readdir(pathFile);
      console.log(listFiles);
    } catch (error) {
        throw new Error(errMessage);
    } 
};

await list();