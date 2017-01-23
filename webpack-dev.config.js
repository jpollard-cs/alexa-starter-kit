const makeConfig = require('./make-webpack-config');
const Environment = require('./Environment');

module.exports = makeConfig(Environment.DEVELOPMENT);