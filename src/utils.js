import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { access } from 'node:fs/promises';

export const getPath = (url) => {
  const __filename = fileURLToPath(url);
  const __dirname = dirname(__filename);
  return __dirname;
};

export const errMessage = 'FS operation failed';

export const exist = async (path) => {  
  try {
    await access(path)
    return true
  } catch {
    return false
  };
};
