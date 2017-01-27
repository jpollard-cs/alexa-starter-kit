// Allow this module to be reloaded by hotswap when changed
// useful if you're using alexa-app-server
module.change_code = 1;

import Alexa from 'alexa-app';
import launch from './app';

const options = {
    shouldEndSessionByDefault: false
};

const appName = 'alexa-starter-kit'; // TODO: change this to your app name
const app = new Alexa.app(appName);

launch(app, options);

// hack to support custom utterances in utterance expansion string
// https://www.bignerdranch.com/blog/developing-alexa-skills-locally-with-nodejs-implementing-an-intent-with-alexa-app-and-alexa-app-server/
const utterancesMethod = app.utterances;
app.utterances = function() {
    return utterancesMethod().replace(/\{\-\|/g, '{');
};

// this must use module.exports based on webpack config
// and to be compattible with alexa-app-server
module.exports = app;