const Environment = require('../Environment');
process.env['NODE_ENV'] = Environment.TEST;
// so we pick up on the test configuration in our .babelrc file