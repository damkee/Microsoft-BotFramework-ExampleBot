// START OF CODE==============================================

var restify = require('restify'); //this is loading the library installed earlier
var builder = require('botbuilder'); //this is loading the library installed earlier

//============================================================
// Setting up server, connector, and bot
//============================================================

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   //When testing on a local machine, 3978 indicates the port to test on
   console.log('%s listening to %s', server.name, server.url); 
});
  
// Create chat bot
// MICROSOFT_APP_ID and MICROSOFT_APP_PASSWORD are created when you register a bot at https://dev.botframework.com/bots 
// I will walk through how to add them as a process.env variables in a next step.
var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

//============================================================
// Defining how bot carries on the conversation with the user
//============================================================

bot.dialog('/', function (session) {
    session.send("Hello World");
});

// END OF CODE================================================
