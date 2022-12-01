import { __dirname, errMessage } from './utils.js';
import { join } from 'node:path';
import { readdir } from 'node:fs/promises';

const list = async () => {
    try {
      const pathFile = join(__dirname, 'files');
      const listFiles = await readdir(pathFile);
      console.log(listFiles);
    } catch (error) {
        throw new Error(errMessage);
    } 
};

await list();