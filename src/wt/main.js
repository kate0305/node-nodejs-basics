import { Worker } from 'node:worker_threads';
import { getPath } from '../utils.js';
import { join } from 'node:path';
import { cpus } from 'node:os';

const performCalculations = async () => {
  const pathFile = join(getPath(import.meta.url), 'worker.js');
  const cpuTotal = cpus();
  
  let number = 10;

  const workers = await Promise.allSettled(cpuTotal.map(() => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(pathFile, {
        workerData: number++,
      });
      worker.on('message', resolve);
      worker.on('error', reject);
    });
  }));

  const results = workers.map(({status, value}) => ({
    status: status === 'fulfilled' ? 'resolved' : 'error',
    data: status === 'fulfilled' ? value : null,
  }));

  console.log(results);
};

await performCalculations();