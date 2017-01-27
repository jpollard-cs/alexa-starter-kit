// IMPORTANT: this file must not use import statements (https://github.com/webpack/webpack/issues/4039)
// as you can't mix import statements with module.exports when using webpack 2

// Allow this module to be reloaded by hotswap when changed
// useful if you're using alexa-app-server
module.change_code = 1;

const app = require('./app').default;

// this must use module.exports based on webpack config
// and to be compatible with alexa-app-server
module.exports = app;