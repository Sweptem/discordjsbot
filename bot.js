const discord = require('discord.js');
const client = new discord.Client();
const PREFIX = ".";
const config = require('./config/config.json');

const rollDice6 = () => Math.floor(Math.random() * 6) + 1;
const rollDice100 = () => Math.floor(Math.random() * 100) + 1;

//nodemon bot.js
client.login("NjkyMjc4NjQxNjcyOTc4NDYy.XnxJhA.DmC3HIcpYmsrxq3jkBGr4zLl808");

client.on('ready', () => {
    console.log(`Bot has logged in.`)
});



client.on('message', function(message){
    if(message.content === '.commands') {
        message.channel.send(`
\`\`\`
.pepega           = for your fat pepega needs
.pepegahistory    = pepega history
.pepegameaning    = what pepega means
.pepegadefinition = pepega's definition
.rolldice         = 1-6 dice roll
.rand             = random number between 1-100
\`\`\`
        `);
    }
});

client.on('message', function(message){
    if(message.content === '.pepega') {
        message.reply('Here\'s a nice fat pepega I found <:pepega:687780812003082357>');
    }
});

client.on('message', function(message){
    if(message.content === '.pepegahistory') {
        message.reply('The first known usage of Pepega is from a Discord conversation in April 2018 where a user named “adew” has misspelled a meme\'s Discord code, missing its second colon, which is apparently where the name is derived from. It was added to the FrankerFaceZ Twitch extension. Its eventual popularity also has a lot to do with the streamer Sebastian ‘Forsen’ Fors, whose streaming community was originally displeased by its addition to the channel’s slate of emotes. Predictably, this led to people spamming it in his chat over and over again, which eventually evolved to an iteration with a horn emoji added with the words “FOR SAN” typed after them, to indicate it was saying the streamer’s username in a stupid voice.');
    }
});

client.on('message', function(message){
    if(message.content === '.pepegameaning') {
        message.reply('Pepega (pronounced “peh-peyguh”) is an emote created by distorting the original Pepe the Frog, and is meant to express that something is stupid. It is “commonly accompanied by the slang pejorative to describe a person with mental disability”, and it is most often used on the streaming platform Twitch, and its rise is mostly owed to Forsen. In most cases, “pepega” is used to indicate a stupid action or statement by the broadcaster. Its impact is growing on the gaming community, with steady interest according to Google Trends over the course of the last year. Professional Dota 2 team and recent DPC participant Fighting PandaS was also originally Fighting Pepegas before… professionalizing themselves somewhat.');
    }
});

client.on('message', function(message){
    if(message.content === '.pepegadefinition') {
        message.channel.send(`The politically correct way of saying retarded.\n
            John: Wow, what a retard.\n
            Arnold: Dude you can\'t say that\n
            John: Sorry, I mean \"pepega.\"\n
            #pepega`);
    }
});

client.on('message', function(message){
    if(message.content === '.rolldice') {
        message.reply("rolled a " + rollDice6());
    }
});

client.on('message', function(message){
    if(message.content === '.rand') {
        message.reply("rolled a " + rollDice100());
    }
});



// Advanced Dice Roll Calling Functions

// const isValidCommand = (message, cmdName) => message.content.toLowerCase().startsWith(PREFIX + cmdName);
// const rollDice6 = () => Math.floor(Math.random() * 6) + 1;
// const rollDice100 = () => Math.floor(Math.random() * 100) + 1;
// client.on('message', function(message) {
//     if(message.author.bot) return;
//     if(isValidCommand(message, "roll"))
//         message.reply("rolled a " + rollDice6());
//     if(isValidCommand(message, "roll100"))
//         message.reply("rolled a " + rollDice100());
// })