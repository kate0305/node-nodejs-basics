import { getPath, errMessage } from '../utils.js';
import { join } from 'node:path';
import { readFile } from 'node:fs/promises';

const read = async () => {
  const pathFile = join(getPath(import.meta.url), 'files', 'fileToRead.txt');
    try {
      const content = await readFile(pathFile, { encoding: 'utf8' });
        console.log(content);
    } catch (error) {
        throw new Error(errMessage);
    };
};

await read();