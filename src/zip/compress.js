import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { getPath } from '../utils.js';
import { join } from 'node:path';

const compress = async () => {
  const pathFile = join(getPath(import.meta.url), 'files', 'fileToCompress.txt');
  const pathArchive = join(getPath(import.meta.url), 'files', 'archive.gz');
  const gzip = createGzip();
  const source = createReadStream(pathFile);
  const destination = createWriteStream(pathArchive);

  pipeline(
    source, 
    gzip, 
    destination, 
    (error) => { 
      if(error) console.log(error.message);
    });
};

await compress();