const parseEnv = () => {
    const envVars = process.env;
    const rssVars = [];
    for (let envVar in envVars) {
      if (envVar.startsWith('RSS_')) {
        rssVars.push(`${envVar}=${envVars[envVar]}`)
      }
    }
   console.log(rssVars.join('; '));
};

parseEnv();