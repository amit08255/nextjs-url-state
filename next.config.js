const path = require('path');

//Used to set folders as alias to directly use in nextjs
const nextConfiguration = ({
  publicRuntimeConfig: {
    // Will be available on both server and client
    NODE_ENV: process.env.NODE_ENV
  },
  webpack: config => {
    config.resolve.alias['storeon'] = path.join(__dirname, 'storeon'); //folder alias 1
    config.resolve.alias['stores'] = path.join(__dirname, 'stores'); //folder alias 2
    config.resolve.alias['containers'] = path.join(__dirname, 'containers'); //folder alias 3
    return config;
  }
})

module.exports = nextConfiguration;
