import Alexa from 'alexa-app';

const launch = (options) => {
    const { shouldEndSessionByDefault } = options;
    const app = new Alexa.app('alexa-starter-kit');
    const prompt = 'hello';
    app.launch((req, res) =>  res.say(prompt).reprompt(prompt).shouldEndSession(shouldEndSessionByDefault))
};

export default launch;