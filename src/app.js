const launch = (app, options) => {
    const { shouldEndSessionByDefault } = options;
    const prompt = 'hello';
    app.launch((req, res) =>  res.say(prompt).reprompt(prompt).shouldEndSession(shouldEndSessionByDefault))
};

export default launch;
