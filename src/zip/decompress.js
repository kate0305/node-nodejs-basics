import { createUnzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { getPath } from '../utils.js';
import { join } from 'node:path';

const decompress = async () => {
  const pathArchive = join(getPath(import.meta.url), 'files', 'archive.gz');
  const pathFile = join(getPath(import.meta.url), 'files', 'newFileToCompress.txt');
  const unzip = createUnzip();
  const source = createReadStream(pathArchive);
  const destination = createWriteStream(pathFile);

  pipeline(
    source, 
    unzip, 
    destination, 
    (error) => {
      if (error) console.log(error.message);
    });
};

await decompress();