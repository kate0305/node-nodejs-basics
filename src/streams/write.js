import { createWriteStream } from 'node:fs';
import { getPath } from '../utils.js';
import { join } from 'node:path';

const write = async () => {
  const pathFile = join(getPath(import.meta.url), 'files', 'fileToWrite.txt');
  const writeStream = createWriteStream(pathFile);
  process.stdin.pipe(writeStream);
  console.log('Hello! Enter your text:');
};

await write();