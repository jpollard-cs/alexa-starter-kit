# Alexa Starter Kit


## Why?

The purpose of this project is to create an improved and streamlined Node.js development process for new Alexa skills. This starter project offers the following benefits:
- It provides a default Webpack setup and automatically creates a zip file of your transpiled code and assets in the `dist` directory
- It provides a default setup for testing
- Includes the `alexa-app` package to simplify skill development (note there are alternatives, but this one has good documentation in addition to a few awesome blog posts)
- Includes a babel setup specific to the latest version of node supported by AWS Lambda so you can get started using ES2015+ features right away, but features already supported by the latest AWS Lambda Node version will not be transpiled as this is unnecessary and probably less performant in most if not all cases


I will do my best to maintain this project, but contributors are always welcome


## TODO
- Provide a simple way to include audio assets in the bundled zip file
- Ultimately we'll want to use the Babili plugin (https://www.npmjs.com/package/babili-webpack-plugin) or the Uglify plugin (https://github.com/webpack-contrib/uglifyjs-webpack-plugin) with Webpack. The Babili plugin has a few advantages over the current method - one of them being that it runs over all code, including node modules (which is what we want for minification), but currently has an issue with the bluebird library. On the other hand, the Uglify plugin is experimental and the Uglify harmony branch has not been published to npm yet. The current approach is just to minify our local code and not the code from the `node_modules` folder (see `babel-loader` in the Webpack config and `.babelrc` file).


