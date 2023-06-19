import { fork } from 'node:child_process';
import { join } from 'node:path';
import { getPath } from '../utils.js';

const spawnChildProcess = async (args) => {
  const pathFile = join(getPath(import.meta.url), 'files', 'script.js');
  fork(pathFile, args);
};

spawnChildProcess(['1', '2', '3']);
