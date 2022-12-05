import { createReadStream } from 'node:fs';
import { getPath } from '../utils.js';
import { join } from 'node:path';

const read = async () => {
  const pathFile = join(getPath(import.meta.url), 'files', 'fileToRead.txt');
  createReadStream(pathFile, 'utf-8').pipe(process.stdout);
};

await read();