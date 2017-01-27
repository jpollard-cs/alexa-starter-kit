# Alexa Starter Kit

## Why?

The purpose of this project is to create an improved and streamlined Node.js development process for new Alexa skills. 
This starter project offers the following benefits:
- It provides a default Webpack setup and automatically creates a zip file of your transpiled code and assets in the `dist` directory
- It provides a default setup for testing
- Includes the `alexa-app` package to simplify skill development (note there are alternatives, but this one has good documentation in addition to a few awesome blog posts)
- Includes a babel setup specific to the latest version of node supported by AWS Lambda (via `babel-preset-env` currently targeting node 4.3) so you can get started using ES2015+ features right away, but features already supported by the latest AWS Lambda Node version will not be transpiled as this is unnecessary and probably less performant in most if not all cases

If you want to use `babel-polyfill` you should `import 'babel-polyfill'` it at the composition root of your application (this is `./src/index.js` unless you modify it). Doing this in conjunction with using `babel-preset-env` will mean that only the polyfills you need will be included in your output bundle. 

I will do my best to maintain this project, but contributors are always welcome

## NOTES

This project currently uses the Uglify plugin (because it allows you to specify the version of Uglify you want to use
rather than using the version of Uglify which is bundled with Webpack: https://github.com/webpack/webpack/issues/3673).
It is using the harmony branch of Uglify directly which comes with some risk, but I have found it to work with most of
the ES6 features that the current version of node supports (because we are using babel-preset-env targeting node 4.3).
We have two potential issue areas here:
- Features that are not considered "finished" by the TC39 committed (in stage-x) are not transpiled by babel-preset-env, but some of these features may already be supported by our target version of node
    - those that are not supported by node should be transpiled by including an appropriate Babel plugin at the top level of the .babelrc file (because these are not specific to the environment)
- Features that are not yet supported by Uglify harmony
    - these features should be transpiled by including an appropriate Babel plugin in the `production` environment portion of the babelrc file (because we only need Uglify in production)
- To maintain compatibility with `alexa-app-server` code in the composition root (`./src/index.js`) should use requires statements and not import statements as we need to use `module.exports` and this can not be mixed with `import` statements (at least not currently: https://github.com/webpack/webpack/issues/4039) 
    - note that the output of current Babel and Webpack modules are not future proof [babel-esm-spec-mode](http://www.2ality.com/2017/01/babel-esm-spec-mode.html)

please submit a bug report (or even better - a PR) if you encounter any compatibility issues
