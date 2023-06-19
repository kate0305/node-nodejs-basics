import { getPath, errMessage } from '../utils.js';
import { join } from 'node:path';
import { writeFile } from 'node:fs/promises';

const create = async () => {
  const pathFile = join(getPath(import.meta.url), 'files', 'fresh.txt');
  const fileContent = 'I am fresh and young';
    try {
      await writeFile(pathFile, fileContent, { flag: 'wx' });
    } catch (e) {
        throw new Error(errMessage);
    };
};

await create();