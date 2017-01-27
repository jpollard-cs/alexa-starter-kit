import Alexa from 'alexa-app';

const options = {
    shouldEndSessionByDefault: false
};

const appName = 'alexa-starter-kit'; // TODO: change this to your app name
const app = new Alexa.app(appName);

const prompt = 'hello';
app.launch((req, res) =>  res.say(prompt).reprompt(prompt).shouldEndSession(options.shouldEndSessionByDefault));

// hack to support custom utterances in utterance expansion string
// https://www.bignerdranch.com/blog/developing-alexa-skills-locally-with-nodejs-implementing-an-intent-with-alexa-app-and-alexa-app-server/
const utterancesMethod = app.utterances;
app.utterances = function() {
    return utterancesMethod().replace(/\{\-\|/g, '{');
};

export default app;
