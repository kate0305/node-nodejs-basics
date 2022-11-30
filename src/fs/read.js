import { __dirname, errMessage } from './utils.js';
import { join } from 'node:path';
import { readFile } from 'node:fs/promises';

const read = async () => {
  const pathFile = join(__dirname, 'files', 'new.txt');
    try {
      const content = await readFile(pathFile, { encoding: 'utf8' });
        console.log(content);
    } catch (error) {
        throw new Error(errMessage);
    };
};

await read();