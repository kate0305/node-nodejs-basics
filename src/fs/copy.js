import { __dirname, errMessage } from './utils.js';
import { join } from 'node:path';
import { copyFile, readdir, mkdir } from 'node:fs/promises';

const copy = async () => {
  const pathDir = join(__dirname, 'files');
  const pathCopyDir = join(__dirname, 'files_copy');

  try {
    await mkdir(pathCopyDir);
    const files = await readdir(pathDir, {withFileTypes: true});
    for (const file of files) {
      const pathFile = join(pathDir, file.name);
      const pathCopyFile = join(pathCopyDir, file.name);
      if (file.isFile()) {
        await copyFile(pathFile, pathCopyFile);
      } else {
        await copyDir(pathFile, pathCopyFile);
      }
    };
  } catch (error) {
    throw new Error(errMessage);
  };
};

copy();