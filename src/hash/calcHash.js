import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { getPath } from '../utils.js';
import { join } from 'node:path';

const calculateHash = async () => {
  const pathFile = join(getPath(import.meta.url), 'files', 'fileToCalculateHashFor.txt');
  try {
    const content = await readFile(pathFile);
    const hash = createHash('sha256').update(content).digest('hex'); 
    console.log(hash);
  } catch (error) {
    console.log(error.message)
  }
};

await calculateHash();