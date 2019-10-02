
const Discord = module.require("discord.js");
const fs = require("fs");
const g = require('../game.json');

module.exports.run = async (bot,message,args) => {
    if(g.starts == true) return bot.send("Игра уже началась");
    if(g.starts == false) {
    g.starts = true;
    bot.send("Игра началась!! Кто первый введет слово тот и будет ведущим! (.word set <word>)");
    };
   if ( args.length === 1 && args[ 0 ] === 'stop' ) {
    message.delete().catch();
    g.starts = false;
    bot.send(` ${message.author} Остановил игру`);
    }
  
};

module.exports.help = {
    name: "whstart"
};
