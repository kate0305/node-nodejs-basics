const parseArgs = () => {
  const argsCLI = process.argv.slice(2);
  const args = argsCLI.reduce((acc, arg, index, arr) => {
    if (arg.startsWith('--')) {
        acc.push(`${arg.slice(2)} is ${arr[index + 1]}`);
      };
    return acc;
  }, []);
  console.log(args.join(', '));
};

parseArgs();