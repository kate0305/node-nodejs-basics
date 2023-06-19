import { pipeline, Transform } from 'node:stream'

const transform = async () => {
  const transformText = new Transform({
    transform(chunk, encoding, callback) {
      const str = chunk.toString().trim();
      const transformStr = str.split('').reverse().join('');
      callback(null, `${transformStr}\n`);
    }
  });

  pipeline(
    process.stdin,
    transformText,
    process.stdout,
    error => { console.log(error.message) }
  );
  
  console.log('Hello! Enter your text:');
};


await transform();